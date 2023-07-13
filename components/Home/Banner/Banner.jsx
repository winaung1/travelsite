import Aos from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { BannerCounts } from "./BannerCounts";

export const Banner = () => {
  useEffect(() => {
    Aos.init({
      duration: 400, 
      easing: 'ease',
      delay:200
    })
  }, [Aos])
  return (
    <div  className="relative">
      <Image
      priority
        alt=""
        className="w-full h-[600px] object-cover"
        src={"/images/japan.jpg"}
        width={500}
        height={500}
      />
      <div data-aos='fade-down' className="text-white w-full h-full absolute inset-0 bg-black/40">
        <div className=" px-4 mx-auto lg:w-3/4 xl:w-1/2 flex flex-col h-full justify-center">
          <p className="text-5xl md:text-7xl font-semibold pb-2">
            Explore the Beauty
          </p>
          <p className="text-5xl md:text-7xl font-semibold pb-2">of Journey</p>
          <p className="text-md md:text-md lg:py-2">
            Experience the unforgettable experiences and lifelong memories.
          </p>
          <p className="text-md md:text-md">
            {" "}
            Don&apos;t wait, embark on your adventure today!
          </p>
        </div>
      </div>
      <div className="absolute w-full px-4 lg:w-[850px] xl:w-[1000px] md:-bottom-10 left-[50%] -translate-x-[50%] ">
        <BannerCounts />
      </div>
    </div>
  );
};
