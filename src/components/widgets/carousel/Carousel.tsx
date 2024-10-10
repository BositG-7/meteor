import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import Scooter1Image from "../../../assets/img/scooteryellow.png";
import Scooter2Image from "../../../assets/img/scooterred.png";
import Scooter3Image from "../../../assets/img/scooterwhite.png";
import Scooter4Image from "../../../assets/img/scooterredtwo.png";

const images = [Scooter1Image, Scooter2Image, Scooter3Image, Scooter4Image];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative bg-white mb-8 xl:mb-16">
      <div className="flex justify-center items-center gap-4 pt-8 pb-24 xl:pb-32 overflow-hidden">
        {images.map((image, index) => {
          let opacityClass = "opacity-0";
          let positionClass = "hidden";

          if (index === currentIndex) {
            opacityClass = "opacity-100";
            positionClass = "order-2";
          } else if (
            index ===
            (currentIndex - 1 + images.length) % images.length
          ) {
            opacityClass = "opacity-35";
            positionClass = "order-1";
          } else if (index === (currentIndex + 1) % images.length) {
            opacityClass = "opacity-35";
            positionClass = "order-3";
          }

          return (
            <div
              className={`inline-block relative h-[184px] min-w-[246px] xl:h-[728px] xl:min-w-[970px] transition-opacity duration-500 ease-in-out ${opacityClass} ${positionClass}`}
              key={index}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="block w-full h-full"
              />
              {index === currentIndex && (
                <div className="inset-x-0 -bottom-10 text-center mb-12">
                  <h3 className="text-xl xl:text-4xl font-semibold mb-4">
                    GELI JET 60
                  </h3>
                  <div className="mb-8">
                    <a
                      href="/catalog"
                      className="px-8 xl:px-16 py-2 rounded-full text-xl xl:text-3xl bg-orange text-white"
                    >
                      Подробнее
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-5 md:left-40 lg:left-48 bg-white rounded-full shadow-md p-4"
        onClick={goToPrevious}
      >
        <FaArrowLeft className="text-xl" />
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-5 md:right-40 lg:right-48 bg-white rounded-full shadow-md p-4"
        onClick={goToNext}
      >
        <FaArrowRight className="text-xl" />
      </button>
    </div>
  );
};

export default Carousel;
