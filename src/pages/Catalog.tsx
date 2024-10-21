/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import ProductCard from "../components/widgets/product-card/ProductCard";
import Filter from "../components/widgets/filter/Filter";
import { ContactUs } from "../components/widgets";
import { Pagination } from "../components/common";
import { getScootersWithFilters, getFilters } from "../service/api";
import { useTranslation } from "react-i18next";

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<any>({});
  const [, setProductCount] = useState(4);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [filterOptions, setFilterOptions] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;

  const updateProductCount = useCallback(() => {
    const width = window.innerWidth;
    if (width >= 1024) {
      setProductCount(12);
    } else if (width >= 768) {
      setProductCount(9);
    } else {
      setProductCount(8);
    }
  }, []);

  useEffect(() => {
    updateProductCount();
    window.addEventListener("resize", updateProductCount);
    return () => window.removeEventListener("resize", updateProductCount);
  }, [updateProductCount]);

  // Fetch filter options on component mount
  useEffect(() => {
    const fetchFilters = async () => {
      setLoading(true);
      setError(null);
      try {
        const filtersData = await getFilters();

        setFilterOptions(filtersData);
      } catch (err) {
        setError("Failed to fetch filters. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchFilters();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const productsData: any = await getScootersWithFilters({
          ...filters,
          page: currentPage,
          page_size: pageSize,
        });
        setProducts(productsData);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [filters, currentPage]);
  const totalPages = products?.count ? Math.ceil(products.count / pageSize) : 1;
  const filteredProducts = products.results;
  const toggleFilter = () => setIsFilterOpen((prevState) => !prevState);

  const onPageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return; // Sahifa raqamini tekshirish
    setCurrentPage(newPage);
  };
  const { t } = useTranslation();

  return (
    <>
      <div className="container mx-auto my-6 xl:my-16">
        <div className="gap-12 mb-6 xl:flex xl:mb-12">
          <div className="hidden px-8 py-4 text-2xl font-semibold text-center bg-white rounded-lg shadow-md xl:w-1/5 xl:block">
            {t("catelog.top.text1")}
          </div>
          <div className="flex items-center justify-between w-11/12 gap-2 px-4 py-2 mx-auto bg-white rounded-lg shadow-md md:justify-start xl:gap-8 xl:w-4/5 xl:px-6">
            <h5 className="text-[10px] xl:text-2xl font-medium xl:ms-3">
              {t("catelog.top.text2")}
            </h5>
            <button className="text-[9px] xl:text-2xl font-medium bg-lightgray px-4 py-2 rounded-md">
              {t("catelog.top.btn1")}
            </button>
            <button className="text-[9px] xl:text-2xl font-medium bg-blue text-white px-4 py-2 rounded-md">
              {t("catelog.top.btn2")}
            </button>
            <button
              onClick={toggleFilter}
              className="text-[9px] xl:text-2xl font-medium bg-lightgray px-4 py-2 rounded-md xl:hidden"
            >
              Фильтр
            </button>
          </div>
        </div>

        <div className="flex gap-12">
          <Filter
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
            filterOptions={filterOptions}
            onFilterChange={setFilters}
          />
          <div className="w-11/12 mx-auto xl:w-4/5">
            <div className="grid grid-cols-2 gap-6 mb-6 md:grid-cols-3 xl:grid-cols-4">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p>No products available</p>
              )}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(newPage) => {
                onPageChange(newPage);
              }}
              pageSize={pageSize}
              products={products}
            />
          </div>
        </div>
      </div>
      <ContactUs />
    </>
  );
};

export default Catalog;
