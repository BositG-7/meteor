import React, { useEffect, useState } from "react";

import { ContactUs } from "../components/widgets";
import { FaCheck } from "react-icons/fa6";
import { useNavigate, useParams } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { getScooter } from "../service/api";
import Information from "../components/information";
import Charactrs from "../components/characters";

interface Detail {
  id: number;
  key: string;
  value: string;
}

interface Character {
  id: number;
  name: string;
  details: Detail[];
}
const ProductInfo = () => {
  const [product, setProduct] = useState<{
    id: number;
    brand: { name: string };
    description: string;
    price: string;
    engine_type: string;
    name: string;
    battery_types: {
      name: string;
    }[];
    short_description: string;
    long_description: string;
    colors: {
      id: number;
      color: string;
      images: { id: number; image: string }[];
    }[];
    characters: Character[];
    images: { id: number; image: string }[];
  }>();
  const [loading, setLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0].color);
  const [step, setStep] = useState<"INFORMATION" | "CHARACTERS">("INFORMATION");
  const [mainImage, setMainImage] = useState<string>("");
  const [activeBattery, setActiveBattery] = useState<string>("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);

      try {
        const productData = await getScooter(+id!);

        setMainImage(productData?.images[0].image);
        setActiveBattery(productData?.battery_types[0].name);
        setProduct(productData);
      } catch (err) {
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [productCount, setProductCount] = useState(4);

  const updateProductCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      // lg
      setProductCount(4);
    } else if (width >= 768) {
      // md
      setProductCount(3);
    } else {
      // sm
      setProductCount(2);
    }
  };

  useEffect(() => {
    updateProductCount();
    window.addEventListener("resize", updateProductCount);
    return () => window.removeEventListener("resize", updateProductCount);
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="container w-11/12 p-5 mx-auto my-8 bg-white rounded-lg shadow-md lg:p-10 lg:my-12">
        <div className="mb-12 lg:flex">
          <div className="lg:w-3/5">
            <div className="flex justify-center mb-6">
              <img
                src={mainImage}
                className="h-[300px] w-[270px] lg:h-[700px] lg:w-[700px]"
                alt="..."
              />
            </div>
            <div className="hidden gap-5 lg:flex">
              {product?.images.slice(0, 3).map((item) => (
                <img
                  key={item.id}
                  onClick={() => setMainImage(item.image)}
                  src={item.image}
                  className="bg-lightgray p-2 h-[170px] cursor-pointer"
                  alt="Product"
                />
              ))}
            </div>
          </div>
          <div className="lg:w-2/5 lg:p-10">
            <div className="mb-5">
              <h1 className="text-lg font-semibold lg:text-3xl lg:mb-5">
                {product?.name}
              </h1>
              <p className="text-sm lg:text-xl">{product?.description}</p>
            </div>
            <div>
              <div className="flex items-center gap-4 lg:block">
                <div className="flex items-center gap-2 mb-5 lg:w-full lg:block">
                  <h2 className="mb-1 text-sm lg:text-xl lg:mb-2">Цена:</h2>
                  <p className="font-semibold md:text-sm lg:text-3xl">
                    {new Intl.NumberFormat("uz-UZ", {}).format(
                      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                      +product?.price!
                    )}{" "}
                    so'm
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-5 lg:w-full lg:block">
                  <h2 className="mb-1 text-sm lg:text-xl lg:mb-2">
                    Цвет: <span className="hidden lg:inline-block">Серый</span>
                  </h2>
                  <div className="flex items-center">
                    <div className="flex gap-2">
                      {product?.colors?.map((color) => (
                        <label key={color.id} className="relative">
                          <input
                            type="radio"
                            value={color.color}
                            checked={selectedColor === color.color}
                            onChange={() => {
                              handleColorChange(color.color);
                              setMainImage(color.images[0].image);
                            }}
                            className={`appearance-none rounded-md w-8 h-8 lg:w-10 lg:h-10 cursor-pointer ${
                              selectedColor === color.color
                                ? "border-2 border-gray-500"
                                : ""
                            }`}
                            style={{ backgroundColor: color.color }} // Style bilan rangni dinamik tarzda qo'shish
                          />
                          {selectedColor === color.color && (
                            <FaCheck className="absolute text-white transform -translate-x-1/2 size-5 top-1/2 left-1/2 -translate-y-2/3" />
                          )}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <h2 className="mb-2 text-xl">Аккумулятор</h2>
                <div className="flex items-center gap-4">
                  {product?.battery_types.map((item) => (
                    <>
                      <p
                        onClick={() => {
                          setActiveBattery(item.name);
                        }}
                        className={
                          item.name === activeBattery
                            ? "px-4 py-2 text-sm text-white rounded-full lg:text-lg lg:px-10 bg-blue"
                            : "px-4 py-2 text-sm rounded-full lg:text-lg lg:px-10 bg-lightgray"
                        }
                      >
                        {item.name}
                      </p>
                    </>
                  ))}
                </div>
              </div>
              <div className="mb-5">
                <div className="flex items-center justify-between">
                  <p className="flex items-center gap-2 text-sm font-semibold text-green lg:text-xl">
                    <FaCheck />
                    гарантия от продавца
                  </p>
                  <p className="flex items-center gap-2 text-sm font-semibold text-green lg:text-xl">
                    <FaCheck />
                    Качество
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-5">
              <Scroll
                to="contact-us"
                smooth={true}
                duration={500}
                offset={-window.innerHeight / 2 + 300}
                className="px-12 py-3 text-white rounded-full cursor-pointer bg-orange"
              >
                Заказать
              </Scroll>
            </div>
          </div>
        </div>

        <div className="p-2">
          <div className="flex gap-4 mb-5">
            <button
              onClick={() => {
                setStep("INFORMATION");
              }}
              className={
                step === "INFORMATION"
                  ? "px-6 py-2 text-sm font-semibold text-white rounded-full lg:py-4 lg:px-12  bg-blue  lg:text-xl"
                  : "px-6 py-2 text-sm font-semibold rounded-full lg:py-4 lg:px-12 bg-lightgray lg:text-xl"
              }
            >
              Информация
            </button>
            <button
              onClick={() => {
                setStep("CHARACTERS");
              }}
              className={
                step !== "INFORMATION"
                  ? "px-6 py-2 text-sm font-semibold text-white rounded-full lg:py-4 lg:px-12  bg-blue  lg:text-xl"
                  : "px-6 py-2 text-sm font-semibold rounded-full lg:py-4 lg:px-12 bg-lightgray lg:text-xl"
              }
            >
              Характеристики
            </button>
          </div>
          {step === "INFORMATION" ? (
            <Information product={product} />
          ) : (
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            <Charactrs product={product} />
          )}
        </div>
      </div>

      {/* <div className="container mx-auto">
        <h2 className="mb-4 text-xl font-semibold text-center lg:text-start lg:text-4xl lg:mb-10">
          Похожие мопеды
        </h2>
        <div className="relative grid w-11/12 grid-cols-2 gap-6 mx-auto md:grid-cols-3 lg:grid-cols-4">
          <div className="absolute p-4 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 -left-5 lg:-left-8">
            <FaArrowLeft className="size-5 lg:size-6" />
          </div>
          {Array.from({ length: productCount }).map((_, index) => (
            <ProductCard key={index} />
          ))}
          <div className="absolute p-4 -translate-y-1/2 bg-white rounded-full shadow-md top-1/2 -right-5 lg:-right-8">
            <FaArrowRight className="size-5 lg:size-6" />
          </div>
        </div>
      </div> */}

      <div>
        <ContactUs />
      </div>
    </>
  );
};

export default ProductInfo;
