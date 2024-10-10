import React, { useEffect, useState } from "react";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Scooter1Image from "../assets/img/scooter1.png";
import { ContactUs, ProductCard } from "../components/widgets";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

const ProductStats: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState("grey");

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const [productCount, setProductCount] = useState(4);

  const updateProductCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setProductCount(4);
    } else if (width >= 768) {
      setProductCount(3);
    } else {
      setProductCount(2);
    }
  };

  useEffect(() => {
    updateProductCount(); // Set initial value
    window.addEventListener("resize", updateProductCount);
    return () => window.removeEventListener("resize", updateProductCount);
  }, []);

  return (
    <>
      <div className="container w-11/12 p-5 mx-auto my-8 bg-white rounded-lg shadow-md lg:p-10 lg:my-12">
        <div className="mb-12 lg:flex">
          <div className="lg:w-3/5">
            <div className="flex justify-center mb-6">
              <img
                src={Scooter1Image}
                className="h-[300px] w-[270px] lg:h-[700px] lg:w-[700px]"
                alt="..."
              />
            </div>
            <div className="hidden gap-5 lg:flex">
              <div className="flex items-center justify-center">
                <IoIosArrowBack className="size-12" />
              </div>
              <img
                src={Scooter1Image}
                className="bg-lightgray p-2 h-[170px]"
                alt="..."
              />
              <img
                src={Scooter1Image}
                className="bg-lightgray p-2 h-[170px]"
                alt="..."
              />
              <img
                src={Scooter1Image}
                className="bg-lightgray p-2 h-[170px]"
                alt="..."
              />
              <img
                src={Scooter1Image}
                className="bg-lightgray p-2 h-[170px]"
                alt="..."
              />
              <div className="flex items-center justify-center">
                <IoIosArrowForward className="size-12" />
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 lg:p-10">
            <div className="mb-5">
              <h1 className="text-lg font-semibold lg:text-3xl lg:mb-5">
                Gelin GTR Fast 70K
              </h1>
              <p className="text-sm lg:text-xl">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 lg:block">
                <div className="flex items-center gap-2 mb-5 lg:w-full lg:block">
                  <h2 className="mb-1 text-sm lg:text-xl lg:mb-2">Цена:</h2>
                  <p className="font-semibold md:text-sm lg:text-3xl">
                    7 700 000 so`m
                  </p>
                </div>
                <div className="flex items-center gap-4 mb-5 lg:w-full lg:block">
                  <h2 className="mb-1 text-sm lg:text-xl lg:mb-2">
                    Цвет: <span className="hidden lg:inline-block">Серый</span>
                  </h2>
                  <div className="flex items-center">
                    <div className="flex gap-2">
                      {["blue", "red", "gray", "lightgray"].map((color) => (
                        <label key={color} className="relative">
                          <input
                            type="radio"
                            value={color}
                            checked={selectedColor === color}
                            onChange={() => handleColorChange(color)}
                            className={`appearance-none rounded-md w-8 h-8 lg:w-10 lg:h-10 bg-${color} cursor-pointer `}
                          />
                          {selectedColor === color && (
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
                  <p className="px-4 py-2 text-sm text-white rounded-full lg:text-lg lg:px-10 bg-blue">
                    48V20Ah
                  </p>
                  <p className="px-4 py-2 text-sm rounded-full lg:text-lg lg:px-10 bg-lightgray">
                    60V20Ah
                  </p>
                  <p className="px-4 py-2 text-sm rounded-full lg:text-lg lg:px-10 bg-lightgray">
                    72V20Ah
                  </p>
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

        <div className="lg:p-2">
          <div className="flex gap-4 mb-5">
            <Link
              className="px-6 py-2 text-sm font-semibold rounded-full lg:py-4 lg:px-12 bg-lightgray lg:text-xl"
              to="/product/info"
            >
              Информация
            </Link>
            <Link
              className="px-6 py-2 text-sm font-semibold text-white rounded-full lg:py-4 lg:px-12 bg-blue lg:text-xl"
              to="/product/stats"
            >
              Характеристики
            </Link>
          </div>
          <div className="lg:p-5">
            <div className="mb-5">
              <h6 className="mb-2 text-sm font-semibold lg:text-xl">
                Заводские данные
              </h6>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">
                  Гарантия продавца / производителя
                </p>
                <p className="text-sm lg:text-xl">12 мес.</p>
              </div>
            </div>
            <div className="mb-5">
              <h6 className="mb-2 text-sm font-semibold lg:text-xl">
                Классификация и внешний вид
              </h6>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Тип</p>
                <p className="text-sm lg:text-xl">электромопед</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Модель</p>
                <p className="text-sm lg:text-xl">Meteor GTR 70</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Код производителя</p>
                <p className="text-sm lg:text-xl">MG70</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Код производителя</p>
                <p className="text-sm lg:text-xl">черный</p>
              </div>
            </div>
            <div className="mb-5">
              <h6 className="mb-2 text-sm font-semibold lg:text-xl">
                Ходовые характеристики
              </h6>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Максимальная нагрузка</p>
                <p className="text-sm lg:text-xl">140 кг</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Мощность мотора</p>
                <p className="text-sm lg:text-xl">1000 Вт</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">
                  Максимальный угол подъема (градус)
                </p>
                <p className="text-sm lg:text-xl">15°</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Максимальная скорость</p>
                <p className="text-sm lg:text-xl">90 км/ч</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Привод</p>
                <p className="text-sm lg:text-xl">задний</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Максимальный запас хода</p>
                <p className="text-sm lg:text-xl">60 км</p>
              </div>
            </div>
            <div className="mb-5">
              <h6 className="mb-2 text-sm font-semibold lg:text-xl">Питание</h6>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Емкость аккумулятора</p>
                <p className="text-sm lg:text-xl">700.6 Вт*ч</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Емкость аккумулятора</p>
                <p className="text-sm lg:text-xl">15 000 мА*ч</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Напряжение аккумулятора</p>
                <p className="text-sm lg:text-xl">52 В</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Время полной зарядки</p>
                <p className="text-sm lg:text-xl">320.8 мин</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Параметры питания</p>
                <p className="text-sm lg:text-xl">100-240В / 50-60 Гц</p>
              </div>
            </div>
            <div className="mb-5">
              <h6 className="mb-2 text-sm font-semibold lg:text-xl">
                Дополнительно
              </h6>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Комплектация</p>
                <p className="text-sm lg:text-xl">
                  винт x 22, гаечный ключ x 2, гайка x 10,
                  <br />
                  документация, зарядное устройство,
                  <br />
                  шайба x 8, шестигранный ключ x 3
                  <br />
                  Рабочий диапазон температур
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">
                  Рабочий диапазон температур
                </p>
                <p className="text-sm lg:text-xl">от -5° до + 45°С</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Освещение</p>
                <p className="text-sm lg:text-xl">LED</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Тормоза</p>
                <p className="text-sm lg:text-xl">
                  передние и задние дисковые тормоза
                </p>
              </div>
            </div>
            <div className="mb-5">
              <h6 className="mb-2 text-sm font-semibold lg:text-xl">
                Габариты, вес
              </h6>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Диаметр колес (дюйм)</p>
                <p className="text-sm lg:text-xl">14</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Ширина</p>
                <p className="text-sm lg:text-xl">280 мм</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Высота</p>
                <p className="text-sm lg:text-xl">1150 мм</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Длина</p>
                <p className="text-sm lg:text-xl">1650 мм</p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm lg:text-xl">Вес</p>
                <p className="text-sm lg:text-xl">47.5 кг</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
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
      </div>

      <div>
        <ContactUs />
      </div>
    </>
  );
};

export default ProductStats;
