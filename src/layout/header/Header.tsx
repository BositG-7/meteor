import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import uz from "../../assets/img/uz.png";
import ru from "../../assets/img/ru.png";

import { useTranslation } from "react-i18next";
import { Menu, MenuItem } from "@mui/material";

const languages = [
  {
    key: "uz",
    label: "Uzbek",
    flag: <img src={uz} className="size-4" alt="Uzbek flag" />,
  },
  {
    key: "ru",
    label: "Russian",
    flag: <img src={ru} className="size-4" alt="Russian flag" />,
  },
];
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t, i18n } = useTranslation();
  const langKEY = i18n.language;

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.currentTarget);

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const currentLanguage = languages.find(
    (l) => l.key === (langKEY === "en-US" ? "uz" : langKEY)
  );
  return (
    <>
      <header className="sticky top-0 z-10 flex p-5 text-white xl:p-9 bg-red">
        <nav className="container flex items-center justify-between gap-20 mx-auto xl:gap-32">
          <a
            onClick={toggleMenu}
            className="text-white xl:hidden focus:outline-none"
          >
            <IoMenu />
          </a>

          <ul id="navigation" className="hidden gap-10 lg:flex">
            <li className="font-semibold">
              <Scroll
                to="hero"
                smooth={true}
                duration={500}
                offset={-window.innerHeight / 2 + 300}
                className="cursor-pointer"
              >
                <Link to="/">{t("nav.main")}</Link>
              </Scroll>
            </li>
            <li className="font-semibold">
              <Scroll
                to="about-us"
                smooth={true}
                duration={500}
                offset={-window.innerHeight / 2 + 300}
                className="cursor-pointer"
              >
                {t("nav.about")}
              </Scroll>
            </li>
            <li className="font-semibold">
              <Scroll
                to="search"
                smooth={true}
                duration={500}
                offset={-window.innerHeight / 2 + 400}
                className="cursor-pointer"
              >
                <Link to="/">{t("nav.moped")}</Link>
              </Scroll>
            </li>
            <li className="font-semibold">
              <Scroll
                to="about-scooter"
                smooth={true}
                duration={500}
                offset={-window.innerHeight / 2 + 400}
                className="cursor-pointer"
              >
                <Link to="/">{t("nav.information_moped")}</Link>
              </Scroll>
            </li>
            <li className="font-semibold">
              <Scroll
                to="catalog"
                smooth={true}
                duration={500}
                offset={-window.innerHeight / 2 + 400}
                className="cursor-pointer"
              >
                <Link to="/"> {t("nav.prices")}</Link>
              </Scroll>
            </li>
            <li className="font-semibold">
              <Link to="/catalog">{t("nav.catelog")}</Link>
            </li>
          </ul>
          <ul id="contacts" className="flex items-center gap-8">
            <li className="hidden font-semibold lg:block">+998 88 888 88 88</li>
            <li className="text-xs font-semibold xl:text-lg">
              <Scroll
                to="contact-us"
                smooth={true}
                duration={500}
                offset={-window.innerHeight / 2 + 300}
                className="cursor-pointer"
              >
                {t("nav.order")}
              </Scroll>
            </li>
          </ul>
        </nav>

        <>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {languages.map(({ key, label, flag }) => (
              <MenuItem
                key={key}
                onClick={() => {
                  changeLanguage(key);
                  handleClose();
                }}
              >
                <div className="flex items-center">
                  {flag}
                  <span className="ml-2">{label}</span>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </>

        <div className="text-xl" onClick={handleClick}>
          {currentLanguage?.flag}
        </div>
      </header>
      <ul
        id="navigation"
        className={`gap-10 ${
          isOpen ? "block" : "hidden"
        } xl:text-xl lg:hidden gap-10 bg-red sticky top-14 z-10 pb-4`}
      >
        <li className="p-2 text-sm font-semibold text-white lg:text-xl ms-5">
          <Scroll
            to="hero"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2 + 100}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            <Link to="/">Главная</Link>
          </Scroll>
        </li>
        <li className="p-2 text-sm font-semibold text-white lg:text-xl ms-5">
          <Scroll
            to="about-us"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2 + 100}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            О нас
          </Scroll>
        </li>
        <li className="p-2 text-sm font-semibold text-white lg:text-xl ms-5">
          <Scroll
            to="search"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2 + 100}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            <Link to="/">Мопеды</Link>
          </Scroll>
        </li>
        <li className="p-2 text-sm font-semibold text-white lg:text-xl ms-5">
          <Scroll
            to="about-scooter"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2 + 100}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            <Link to="/">Информация о мопедах</Link>
          </Scroll>
        </li>
        <li className="p-2 text-sm font-semibold text-white lg:text-xl ms-5">
          <Scroll
            to="catalog"
            smooth={true}
            duration={500}
            offset={-window.innerHeight / 2 + 100}
            className="cursor-pointer"
            onClick={toggleMenu}
          >
            <Link to="/">Цены</Link>
          </Scroll>
        </li>
        <li className="p-2 text-sm font-semibold text-white lg:text-xl ms-5">
          <Link to="/catalog" onClick={toggleMenu}>
            Каталог
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
