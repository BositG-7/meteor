/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product?: any }) => {
  const { t, i18n } = useTranslation();

  const lang = i18n.language;
  return (
    <div className="bg-white rounded-lg shadow-md">
      <img src={product.image.image} className="p-4 xl:p-8" alt="..." />
      <div className="p-2 xl:p-6">
        <h6 className="mb-2 text-sm font-semibold xl:text-2xl">
          {product.brand.name} {product.name}
        </h6>
        <p className="font-medium text-[9px] xl:text-[15px] mb-2">
          {lang === "uz"
            ? product.short_description_uz
            : product.short_description}
        </p>
        <p className="mb-2 text-sm font-bold xl:text-2xl">
          {Math.round(product.price).toString()} so‘m
        </p>
        <Link
          className="py-2 bg-blue text-white text-[10px] xl:text-2xl text-center rounded-md block"
          to={`/product/${product.id}/info`}
        >
          {t("btn1")}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
