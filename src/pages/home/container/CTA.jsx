import React from "react";
import { images } from "../../../constants";

const CTA = () => {
  return (
    <>
      <svg
        id="wave"
        className="w-full h-auto max-h-40 translate-y-1"
        preserveAspectRatio="none"
        viewBox="0 0 1440 230"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(13, 36, 54, 1)" offset="0%"></stop>
            <stop stopColor="rgba(13, 36, 54, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M0,184L60,168.7C120,153,240,123,360,103.5C480,84,600,77,720,88.2C840,100,960,130,1080,134.2C1200,138,1320,115,1440,107.3C1560,100,1680,107,1800,107.3C1920,107,2040,100,2160,95.8C2280,92,2400,92,2520,76.7C2640,61,2760,31,2880,42.2C3000,54,3120,107,3240,138C3360,169,3480,176,3600,164.8C3720,153,3840,123,3960,107.3C4080,92,4200,92,4320,103.5C4440,115,4560,138,4680,149.5C4800,161,4920,161,5040,149.5C5160,138,5280,115,5400,111.2C5520,107,5640,123,5760,122.7C5880,123,6000,107,6120,107.3C6240,107,6360,123,6480,126.5C6600,130,6720,123,6840,118.8C6960,115,7080,115,7200,115C7320,115,7440,115,7560,99.7C7680,84,7800,54,7920,49.8C8040,46,8160,69,8280,69C8400,69,8520,46,8580,34.5L8640,23L8640,230L8580,230C8520,230,8400,230,8280,230C8160,230,8040,230,7920,230C7800,230,7680,230,7560,230C7440,230,7320,230,7200,230C7080,230,6960,230,6840,230C6720,230,6600,230,6480,230C6360,230,6240,230,6120,230C6000,230,5880,230,5760,230C5640,230,5520,230,5400,230C5280,230,5160,230,5040,230C4920,230,4800,230,4680,230C4560,230,4440,230,4320,230C4200,230,4080,230,3960,230C3840,230,3720,230,3600,230C3480,230,3360,230,3240,230C3120,230,3000,230,2880,230C2760,230,2640,230,2520,230C2400,230,2280,230,2160,230C2040,230,1920,230,1800,230C1680,230,1560,230,1440,230C1320,230,1200,230,1080,230C960,230,840,230,720,230C600,230,480,230,360,230C240,230,120,230,60,230L0,230Z"
        ></path>
      </svg>
      <section className="relative bg-dark-hard px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              modi.
            </h2>
            <div className="w-full max-w-[30.875rem] mt-12 space-y-3 mx-auto md:space-y-0 md:flex md:items-center md:space-x-2 lg:mx-0">
              <input
                type="email"
                className="px-4 py-3 rounded-lg w-full placeholder:text-dark-light"
                placeholder="Mailul tau"
              />
              <button className="px-4 py-3 rounded-lg w-full bg-primary text-white font-bold md:w-fit md:whitespace-nowrap">
                Lorem, ipsum.
              </button>
            </div>
            <p className="text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left">
              <span className="font-bold italic text-[#B3BAC5] md:not-italic md:font-normal md:text-dark-light">
                Lorem ipsum dolor sit
              </span>{" "}
              amet consectetur adipisicing elit. Corporis nobis fugit
              necessitatibus in adipisci vel nisi debitis laboriosam officiis?
            </p>
          </div>
          <div className="col-span-12 hidden mb-[4.375rem] md:block md:order-first lg:col-span-6 lg:order-last">
            <div className="w-3/4 mx-auto relative">
              <div className="w-1/2 h-1/2 bg-[#FC5A5A] rounded-lg absolute top-[10%] -right-[8%]" />
              <div className="w-1/2 h-1/2 bg-white rounded-lg opacity-[.06] absolute -bottom-[10%] -left-[8%]" />
              <div className="w-full rounded-xl bg-white p-3 z-[1] relative">
                <img
                  src={images.CTAImage}
                  alt="titlu"
                  className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
                />
                <div className="p-5">
                  <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[1.75rem]">
                    Future of Work
                  </h2>
                  <p className="text-dark-light mt-3 text-sm md:text-lg">
                    Majority of people will work in jobs that don't exist today.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
