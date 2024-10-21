import React from "react";

import Scooter1Image from "../../../assets/img/scooter1.png";
import { useTranslation } from "react-i18next";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-11/12 container mx-auto xl:flex bg-white rounded-2xl shadow-md">
      <div className="xl:w-2/5 flex justify-center items-center p-5 xl:p-20">
        <img src={Scooter1Image} alt="..." />
      </div>
      <div className="xl:w-3/5 xl:py-16 xl:pe-16">
        <h5 className="text-lg xl:text-4xl font-semibold xl:mb-12 text-center xl:text-start">
          {t("information_company")}
        </h5>
        <p className="text-sm xl:text-2xl font-medium xl:pe-12 p-2">
          {t("description_company")}
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
