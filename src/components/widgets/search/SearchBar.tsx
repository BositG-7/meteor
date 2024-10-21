/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Dropdown } from "../../common";
import { getBrands, getNames, postScooterId } from "../../../service/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchBar: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [names, setNames] = useState<{ name: string }[]>();
  const [brands, setBrands] = useState<{ name: string }[]>();
  const [brand, setBrand] = useState<string>("");
  const [engine_type, setEngineType] = useState<"electric" | "gasoline" | null>(
    null
  );
  const navigate = useNavigate();

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getNames();

        setNames(data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getBrands();

        setBrands(data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  const onSubmit = async () => {
    if (name && brand && engine_type) {
      try {
        const data = await postScooterId({
          name: name,
          brand: brand,
          engine_type: engine_type,
        });

        navigate(`/product/${data.id}/info`);
      } catch (error: any) {
        toast.error(error.response.data.message);
      }
    } else {
      toast.error("Malumotlarni to'lig' toldirilmagan");
    }
  };
  const { t } = useTranslation();

  return (
    <div className="mt-8 xl:mt-16">
      <h5 className="text-xl xl:text-4xl font-semibold text-center mb-4 xl:mb-8">
        {t("choose_model")}
      </h5>
      <div className="w-11/12 xl:w-full container mx-auto xl:flex justify-around rounded-xl shadow-md bg-white">
        <div className="flex gap-2 xl:gap-20 p-2 xl:p-12">
          <Dropdown
            label={t("marka")}
            options={names?.map((item) => item.name)}
            setValues={setName}
          />
          <Dropdown
            oldStepValue={name}
            label={t("model")}
            options={brands?.map((item) => item.name)}
            setValues={setBrand}
          />
          <Dropdown
            oldStepValue={brand}
            label={t("type_moped")}
            options={["gasoline", "electric"]}
            setValues={setEngineType}
          />
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={onSubmit}
            className="rounded-md xl:rounded-2xl text-sm xl:text-xl font-semibold bg-orange text-white mb-2 xl:mb-0 py-2 xl:py-4 px-8 xl:px-24"
          >
            {t("search_btn")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
