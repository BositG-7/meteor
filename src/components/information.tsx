/* eslint-disable @typescript-eslint/no-explicit-any */
import { FunctionComponent } from "react";
import { useTranslation } from "react-i18next";

interface InformationProps {
  product: any;
}

const Information: FunctionComponent<InformationProps> = ({ product }) => {
  const { i18n } = useTranslation();

  const lang = i18n.language;

  return (
    <div className="text-sm lg:text-xl">
      {lang === "uz" ? product?.long_description_uz : product?.long_description}
    </div>
  );
};

export default Information;
