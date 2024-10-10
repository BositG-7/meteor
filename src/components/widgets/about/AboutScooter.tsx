import React from "react";

import Scooter1Image from "../../../assets/img/scooter1.png";
import Scooter2Image from "../../../assets/img/scooter2.png";
import Scooter3Image from "../../../assets/img/scooter3.png";

const AboutScooter: React.FC = () => {
  return (
    <div className="xl:flex w-11/12 container mx-auto gap-2 xl:gap-12 mt-8 xl:mt-16">
      <div className="xl:w-2/5 bg-white p-2 xl:p-16 rounded-2xl shadow-md">
        <h5 className="text-lg xl:text-4xl text-center xl:text-start font-semibold xl:mb-12">Информация о мопедах</h5>
        <p className="text-sm xl:text-2xl">
          Компания Meteor Scooters — это молодая и динамично развивающаяся
          компания, специализирующаяся на продаже и обслуживании мопедов
          высокого качества. Мы предлагаем широкий ассортимент мопедов различных
          моделей и мощностей, от легких и компактных для городских условий до
          мощных туристических вариантов. Наша цель — предоставить клиентам
          доступные и надежные транспортные средства для удобства и комфорта в
          повседневных перемещениях. Meteor Scooters стремится к высокому уровню
          обслуживания и индивидуальному подходу к каждому клиенту, обеспечивая
          надежность, безопасность и удовлетворение от использования наших
          продуктов.
        </p>
      </div>
      <div className="mt-2 xl:w-3/5">
        <div className="bg-white p-2 xl:p-4 rounded-2xl shadow-md mb-2 xl:mb-12">
          <img src={Scooter1Image} className="size-48 md:size-80 xl:size-96 mx-auto" alt="..." />
        </div>
        <div className="grid grid-cols-2 gap-2 xl:gap-12">
          <div className="bg-white p-2 xl:p-4 rounded-2xl shadow-md">
            <img src={Scooter2Image} className="size-40 md:size-80 xl:size-96 mx-auto" alt="..." />
          </div>
          <div className="bg-white p-2 xl:p-4 rounded-2xl shadow-md">
            <img src={Scooter3Image} className="size-40 md:size-80 xl:size-96 mx-auto" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutScooter;
