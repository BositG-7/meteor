import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { IoMenu } from "react-icons/io5";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
          <div id="logo">
            <h5 className="flex">LOGO</h5>
          </div>
          <ul id="navigation" className="hidden gap-10 lg:flex">
            <li className="font-semibold">
              <Scroll
                to="hero"
                smooth={true}
                duration={500}
                offset={-window.innerHeight / 2 + 300}
                className="cursor-pointer"
              >
                <Link to="/">Главная</Link>
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
                О нас
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
                <Link to="/">Мопеды</Link>
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
                <Link to="/">Информация о мопедах</Link>
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
                <Link to="/">Цены</Link>
              </Scroll>
            </li>
            <li className="font-semibold">
              <Link to="/catalog">Каталог</Link>
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
                Оставить заявку
              </Scroll>
            </li>
          </ul>
        </nav>
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
