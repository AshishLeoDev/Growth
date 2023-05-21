import React from "react";
import { Link } from "react-router-dom";

const Science = () => {
  return (
    <section className="w-full flex relative max-w-[1220px] mt-10 mx-auto px-8 py-3">
      <div className="min-w-[60%]">
        <h6 className="font-bold text-2xl font-kanit tracking-tight">
          We create content that is a
        </h6>
        <div>
          <h1 className="hero-text text-5xl mt-1 font-bold font-kanit">
            blend of Science
          </h1>
          <h1 className="hero-text text-5xl mt-1 font-bold font-kanit">
            & Creativity
          </h1>
        </div>
        <p className="font-medium text-xl tracking-wider mt-3 font-molengo leading-6">
          Data drives everything we do. Data that shows <br /> how to hack the
          algorithm. Our content strategy <br /> is backed by hard data analysis
          to ensure <br /> your content resonates with your audience, builds{" "}
          <br />
          brand loyalty and drives growth on social <br />
          media.
        </p>
      </div>
      <div className="w-[40%] ml-32 flex flex-col justify-center">
        <div>
          <h1 className="font-extrabold text-xl tracking-tighter font-kanit uppercase text-[#ff341d]">
            I want to grow on
          </h1>
        </div>
        <div className="flex gap-8 py-2">
          <Link to={'https://www.youtube.com/'} target="_blank">
            <button className="py-3 cursor-pointer px-10 bg-[#ffb701] text-[16px] text-black font-bold   hover:transform-none hover:text-white">
              YouTube
            </button>
          </Link>
          <Link to={'https://www.instagram.com/'} target="_blank">
            <button className="py-3 cursor-pointer px-10 bg-[#ff341d] box-content border-none text-[16px] text-black font-bold   hover:transform-none hover:text-white">
              Instagram
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Science;
