"use client";

import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import imgOne from "../public/images/banner/samsung-memory-Yf5YaNr3Ujg-unsplash.jpg";
import imgTwo from "../public/images/banner/ibrahim-yusuf-vWJtYRfE_rw-unsplash.jpg";
import imgThree from "../public/images/banner/kit-formerly-convertkit-d7JpeA8l6RA-unsplash.jpg";
import imgFour from "../public/images/banner/kit-formerly-convertkit-jQio01Aydt4-unsplash.jpg";
import imgFive from "../public/images/banner/nat-hwcMLF374mY-unsplash.jpg";
import imgSix from "../public/images/banner/nubelson-fernandes-gTs2w7bu3Qo-unsplash.jpg";
import imgSeven from "../public/images/banner/nubelson-fernandes-jTpKCvH8A0E-unsplash.jpg";
import imgEight from "../public/images/banner/denice-alex-U-7GtV1Da2c-unsplash.jpg";

// Custom Next Arrow
function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-24 sm:w-32 md:w-44 h-6 sm:h-7 md:h-8 absolute bottom-4 sm:bottom-8 md:bottom-32 z-30 right-2 sm:right-4 md:right-10 border border-gray-900 px-1 sm:px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-xs sm:text-sm uppercase relative flex items-center justify-end cursor-pointer group">
        <span className="absolute -translate-x-16 sm:-translate-x-20 md:-translate-x-28 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          next
        </span>
        <span className="absolute -translate-x-16 sm:-translate-x-20 md:-translate-x-28 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          next
        </span>
        <span className="text-base sm:text-lg">
          <FaChevronRight />
        </span>
      </div>
    </div>
  );
}

// Custom Prev Arrow
function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div
      className="w-24 sm:w-32 md:w-44 h-6 sm:h-7 md:h-8 absolute bottom-4 sm:bottom-8 md:bottom-32 z-30 left-2 sm:left-4 md:left-10 border border-gray-900 px-1 sm:px-2 hover:border-gray-800 bg-black/50 hover:bg-black shadow-btnShadow overflow-hidden"
      onClick={onClick}
    >
      <div className="w-full h-full text-gray-300 text-xs sm:text-sm uppercase relative flex items-center justify-between cursor-pointer group">
        <span className="text-base sm:text-lg">
          <FaChevronLeft />
        </span>
        <span className="absolute translate-x-16 sm:translate-x-20 md:translate-x-24 translate-y-0 group-hover:-translate-y-7 transition-transform duration-500">
          previous
        </span>
        <span className="absolute translate-x-16 sm:translate-x-20 md:translate-x-24 translate-y-7 group-hover:translate-y-0 transition-transform duration-500">
          previous
        </span>
      </div>
    </div>
  );
}

const Banner = () => {
  const images = [
    { src: imgOne, alt: "Banner Image 1" },
    { src: imgTwo, alt: "Banner Image 2" },
    { src: imgThree, alt: "Banner Image 3" },
    { src: imgFour, alt: "Banner Image 4" },
    { src: imgFive, alt: "Banner Image 5" },
    { src: imgSix, alt: "Banner Image 6" },
    { src: imgSeven, alt: "Banner Image 7" },
    { src: imgEight, alt: "Banner Image 8" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640, // sm
        settings: {
          arrows: true,
          autoplaySpeed: 4000, // Faster autoplay on mobile
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          arrows: true,
        },
      },
    ],
  };

  return (
    <div className="w-full h-auto sm:h-96 md:h-[500px] lg:h-[650px] relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <Image
              className="w-full h-64 sm:h-96 md:h-[500px] lg:h-[650px] object-cover"
              src={img.src}
              alt={img.alt}
              placeholder="blur"
              quality={60}
              loading={index === 0 ? "eager" : "lazy"}
              priority={index === 0}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;