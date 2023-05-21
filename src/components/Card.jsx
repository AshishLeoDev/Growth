import React from "react";
import { Tilt } from "react-tilt";
import { services } from "../constants";

const Card = () => {
  const defaultOptions = {
    reverse: false,
    max: 10,
    perspective: 1000,
    scale: 1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  return (
    <section className="max-w-[1220px] mx-auto mt-10 ">
      <div className="px-8 justify-center py-10 flex flex-col ">
        <h1 className="text-4xl pb-10 font-extrabold tracking-tighter">
          Here's what we will do for you
        </h1>
        <div className="mt-4 flex flex-wrap justify-center gap-24">
          {services.map((e) => (
            <Tilt options={defaultOptions} className="w-[290px]">
              <div className=" border border-orange-500 hover:bg-black bg-[#FFB701] -rotate-6 rounded-xl">
                <Tilt options={defaultOptions}>
                  <div className="bg-black text-white border rotate-6 border-orange-500 theme rounded-xl flex flex-col py-10 px-8 min-h-[400px]">
                    <h1 className="font-extrabold text-4xl tracking-tighter font-kanit">
                      {e.title}
                    </h1>
                    <p className="font-light text-2xl leading-7 pt-4 tracking-tight">
                      {e.desc}
                    </p>
                  </div>
                </Tilt>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;

