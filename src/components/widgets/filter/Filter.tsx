/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface FilterProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  filterOptions: any;
  onFilterChange: (filters: any) => void;
}

const Filter: React.FC<FilterProps> = ({
  isOpen,
  setIsOpen,
  filterOptions,
  onFilterChange,
}) => {
  const [selectedEngineTypes, setSelectedEngineTypes] = useState<string[]>([]);
  const [selectedBatteryTypes, setSelectedBatteryTypes] = useState<string[]>(
    []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState<number | null>(null);
  const [maxPrice, setMaxPrice] = useState<number | null>(null);

  useEffect(() => {
    if (filterOptions.price) {
      setMinPrice(filterOptions.price.min_price);
      setMaxPrice(filterOptions.price.max_price);
    }
  }, [filterOptions.price]);

  const { i18n } = useTranslation();

  const lang = i18n.language;
  useEffect(() => {
    const filters = {
      engineTypes: selectedEngineTypes,
      batteryTypes: selectedBatteryTypes,
      brands: selectedBrands,
      colors: selectedColors,
      minPrice: minPrice || filterOptions.price?.min_price || 0,
      maxPrice: maxPrice || filterOptions.price?.max_price || 100000000,
    };
    onFilterChange(filters);
  }, [
    selectedEngineTypes,
    selectedBatteryTypes,
    selectedBrands,
    selectedColors,
    minPrice,
    maxPrice,
    filterOptions,
    onFilterChange,
  ]);

  const handleEngineTypeChange = (value: string) => {
    setSelectedEngineTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleBatteryTypeChange = (value: string) => {
    setSelectedBatteryTypes((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleBrandChange = (value: string) => {
    setSelectedBrands((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleColorChange = (value: string) => {
    setSelectedColors((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleClearFilters = () => {
    setSelectedEngineTypes([]);
    setSelectedBatteryTypes([]);
    setSelectedBrands([]);
    setSelectedColors([]);
    setMinPrice(filterOptions.price?.min_price || null);
    setMaxPrice(filterOptions.price?.max_price || null);
    setIsOpen(false);
  };

  return (
    <div
      className={`fixed top-14 z-10 lg:z-0 lg:top-0 lg:rounded-lg left-0 h-full bg-white shadow-lg p-8 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0 lg:block lg:w-1/5 lg:max-h-screen lg:bg-white lg:overflow-y-auto`}
    >
      <button
        className="absolute text-gray-600 lg:hidden top-4 right-4"
        onClick={() => setIsOpen(false)}
      >
        ✕
      </button>

      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold">Тип мопеда</h3>
        <div className="flex items-center">
          <input
            type="checkbox"
            value="gasoline"
            className="mr-2 size-5"
            onChange={() => handleEngineTypeChange("gasoline")}
            checked={selectedEngineTypes.includes("gasoline")}
          />
          <label className="block">Бензиновый</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            value="electric"
            className="mr-2 size-5"
            onChange={() => handleEngineTypeChange("electric")}
            checked={selectedEngineTypes.includes("electric")}
          />
          <label className="block">Электрический</label>
        </div>
      </div>

      {/* Brands Filter */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold">Марка</h3>
        {filterOptions?.brands?.map((brand: any) => (
          <div key={brand.id} className="flex items-center">
            <input
              type="checkbox"
              value={brand.name}
              className="mr-2 size-5"
              onChange={() => handleBrandChange(brand.name)}
              checked={selectedBrands.includes(brand.name)}
            />
            <label className="block">{brand.name}</label>
          </div>
        ))}
      </div>

      {/* Battery Types Filter */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold">Аккумулятор</h3>

        {filterOptions?.batteryTypes?.map((battery: any) => (
          <div key={battery.id} className="flex items-center">
            <input
              type="checkbox"
              value={battery.name}
              className="mr-2 size-5"
              onChange={() => handleBatteryTypeChange(battery.name)}
              checked={selectedBatteryTypes.includes(battery.name)}
            />
            <label className="block">{battery.name}</label>
          </div>
        ))}
      </div>

      {/* Colors Filter */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold">Цвет</h3>
        {filterOptions.colors?.map((color: any) => (
          <div key={color.id} className="flex items-center">
            <input
              type="checkbox"
              value={lang === "uz" ? color.name_uz : color.name}
              className="mr-2 size-5"
              onChange={() => handleColorChange(color.color)}
              checked={selectedColors.includes(color.color)}
            />
            <label className="block">
              {lang === "uz" ? color.name_uz : color.name}
            </label>
          </div>
        ))}
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <h3 className="mb-2 text-xl font-semibold">Цена, сум</h3>
        <div className="flex items-center justify-around gap-2">
          <input
            type="number"
            className="w-1/2 p-2 border border-gray-300 rounded"
            placeholder={`от ${filterOptions.price?.min_price || 0}`}
            value={minPrice || ""}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            min="0"
          />
          <input
            type="number"
            className="w-1/2 p-2 border border-gray-300 rounded"
            placeholder={`до ${filterOptions.price?.max_price || 100000000}`}
            value={maxPrice || ""}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            min="0"
            max="100000000"
          />
        </div>
      </div>

      {/* Clear Filters Button */}
      <button
        className="w-full py-2 rounded bg-lightgray ring-1 ring-black hover:bg-red-600"
        onClick={handleClearFilters}
      >
        Очистить всё
      </button>
    </div>
  );
};

export default Filter;
