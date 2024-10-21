/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import ProductCard from "../product-card/ProductCard";
import { getScooters } from "../../../service/api";
import { useTranslation } from "react-i18next";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [, setProductCount] = useState(4);

  const updateProductCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setProductCount(8);
    } else if (width >= 768) {
      setProductCount(6);
    } else {
      setProductCount(4);
    }
  };

  useEffect(() => {
    updateProductCount();
    window.addEventListener("resize", updateProductCount);
    return () => window.removeEventListener("resize", updateProductCount);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const productsData = await getScooters();

        setProducts(productsData);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredScooters = products.results;

  const { t } = useTranslation();

  return (
    <div className="container w-11/12 mx-auto mt-8 xl:mt-12">
      <h5 className="mb-4 text-xl font-semibold text-center xl:text-4xl xl:mb-8">
        {t("nav.prices")}
      </h5>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 xl:gap-10">
          {filteredScooters.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
