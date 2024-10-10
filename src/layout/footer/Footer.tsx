import React from "react";

import InstagramLogo from "../../assets/icons/instagram.png";
import FacebookLogo from "../../assets/icons/facebook.png";
import TelegramLogo from "../../assets/icons/telegram.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="flex pt-10 mb-20 xl:mb-60">
        <div className="flex xl:gap-60 justify-around container mx-auto">
          <div>
            <ul className="md:flex xl:gap-3">
              <li className="block size-12 mb-3 rounded-full bg-blue">
                <a href="#">
                  <img src={InstagramLogo} className="p-3" alt="..." />
                </a>
              </li>
              <li className="block size-12 mb-3 rounded-full bg-blue">
                <a href="#">
                  <img src={FacebookLogo} className="p-3" alt="..." />
                </a>
              </li>
              <li className="block size-12 mb-3 rounded-full bg-blue">
                <a href="#">
                  <img src={TelegramLogo} className="p-3" alt="..." />
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex md:gap-20 xl:gap-60 text-center xl:text-start">
            <div className="mb-5">
              <h6 className="text-sm xl:text-2xl font-semibold mb-3">КОМПАНИЯ</h6>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
            </div>
            <div className="mb-5">
              <h6 className="text-sm xl:text-2xl font-semibold mb-3">ПОМОЩЬ</h6>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
            </div>
            <div className="mb-5">
              <h6 className="text-sm xl:text-2xl font-semibold mb-3">МАГАЗИН</h6>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
              <p className="text-xs xl:text-lg font-medium mb-2">О нас</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-12 xl:pb-20">
        <p className="w-4/5 container mx-auto text-xs xl:text-2xl font-medium">
          Компания <span className="font-semibold">Meteor Scooter</span> занимается продажой качественных мопедов из
          Китая.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
