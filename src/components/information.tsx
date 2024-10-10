import { FunctionComponent } from "react";

interface InformationProps {
  product: any;
}

const Information: FunctionComponent<InformationProps> = ({ product }) => {
  return <div className="text-sm lg:text-xl">{product?.long_description}</div>;
};

export default Information;
