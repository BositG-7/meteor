import { FunctionComponent } from "react";

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

interface Product {
  id: number;
  brand: { name: string };
  description: string;
  price: string;
  engine_type: string;
  name: string;
  battery_types: { name: string };
  short_description: string;
  long_description: string;
  colors: {
    id: number;
    color: string;
    images: { id: number; image: string }[];
  }[];
  characters: Character[];
}

interface CharactersProps {
  product: Product;
}

const Charactrs: FunctionComponent<CharactersProps> = ({ product }) => {
  return (
    <div className="lg:p-5">
      {product.characters.map((character) => (
        <div key={character.id} className="mb-5">
          <h6 className="mb-2 text-sm font-semibold lg:text-xl">
            {character.name}
          </h6>
          {character.details.map((detail) => (
            <div key={detail.id} className="flex justify-between">
              <p className="text-sm lg:text-xl">{detail.key}</p>
              <p className="text-sm lg:text-xl">{detail.value}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Charactrs;
