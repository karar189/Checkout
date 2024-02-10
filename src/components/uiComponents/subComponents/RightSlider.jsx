import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import styles from "../../../styles/style";
import trophy from "../../../assets/sec1_trophy.png";

const images = [
  "https://images.unsplash.com/photo-1514496959998-c01c40915c5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514496959998-c01c40915c5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1514496959998-c01c40915c5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  "https://images.unsplash.com/photo-1514496959998-c01c40915c5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const RightSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <div className="relative mb-4 ">
      <div className="absolute inset-0 flex items-center justify-between z-10 mx-2">
        <button
          className="p-2 bg-white bg-opacity-80 rounded-full shadow-md hover:bg-opacity-75"
          onClick={prevSlide}
        >
          <ChevronLeftIcon className="h-4 w-4 text-black" />
        </button>
        <button
          className="p-2 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75"
          onClick={nextSlide}
        >
          <ChevronRightIcon className="h-4 w-4 text-black" />
        </button>
      </div>
      <div className="overflow-hidden rounded-2xl shadow-xl">
        <div
          className="whitespace-nowrap transition-transform duration-300 ease-in-out "
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              className={`inline-block w-full h-[200px] object-cover`}
              alt={`Slide ${index}`}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 mx-1 rounded-full bg-white ${
              currentSlide === index ? "bg-opacity-100" : "bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
      <div className="absolute rounded-md shadow-md top-0 left-0 bg-white px-2 py-1 text-black mt-2 ml-2">
        <p className={`${styles.paragraph3} flex`}>
          {" "}
          <span>
            <img src={trophy} alt="trophy" className="mr-1 mt-[2px]" />
          </span>
          Bestseller
        </p>
      </div>
    </div>
  );
};

export default RightSlider;
