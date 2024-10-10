import React from "react";

import Scooter1Image from "../../../assets/img/scooter1.png";

const AboutUs: React.FC = () => {
  return (
    <div className="w-11/12 container mx-auto xl:flex bg-white rounded-2xl shadow-md">
      <div className="xl:w-2/5 flex justify-center items-center p-5 xl:p-20">
        <img src={Scooter1Image} alt="..." />
      </div>
      <div className="xl:w-3/5 xl:py-16 xl:pe-16">
        <h5 className="text-lg xl:text-4xl font-semibold xl:mb-12 text-center xl:text-start">Информация о компании</h5>
        <p className="text-sm xl:text-2xl font-medium xl:pe-12 p-2">
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
    </div>
  );
};

export default AboutUs;
