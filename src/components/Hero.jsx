import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import Typewriter from "typewriter-effect";
import leo from '../assets/spur.png'

const Hero = () => {
  return (
    <section className="min-h-[550px] mb-10 pb-16">
      <div className="w-full flex max-w-7xl mx-auto h-800px p-16">
        <div className="flex w-1/2 flex-col font-[kanit] pt-[80px] pb-[80px]">
          <h1 className="text-7xl font-medium tracking-wide">Social Media</h1>
          <h1 className="text-7xl font-medium tracking-wide mt-2">
            Content to
          </h1>
          <div>
            <h1 className="pb-[40px] text-7xl font-extrabold tracking-wide mt-2">
              <Typewriter
                className="Typewriter__wrapper Typewriter__cursor"
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  strings: [
                    "Bring Customer",
                    "Build Loyality",
                    "Engage Viewers",
                  ],
                  pauseFor: 1000,
                  deleteSpeed: 100,
                }}
              />
            </h1>
          </div>
          <div className="z-40 ">
            <Link to={`/#growth`}>
              <button className="bg-[#ff341e]  hover:bg-orange-500 hover:transform-none hover:text-white text-gray-900 px-5 font-[700] text-[20px] mt-2 py-2 font-kanit rounded-[3px]">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-[200px] h-[200px] rounded-full top-[-16px] left-24  border border-none">
            <img src="https://www.growthrocket.media/_next/image?url=%2F01.jpg&w=1920&q=75" className="w-[100%] text-transparent inset-0 h-[100%] flex justify-center text-center rounded-full"  alt="vr-image" />
          </div>
          <div className="absolute w-[150px] h-[150px] rounded-full top-16 left-[22rem]">
          <img src="https://www.growthrocket.media/_next/image?url=%2F05.jpeg&w=1920&q=75" className="w-[100%] h-[100%] flex justify-center text-center rounded-full"  alt="vr-image" />
          </div>
          <div className="absolute w-[230px] h-[230px] rounded-full top-[15rem] left-[9rem]">
          <img src="https://www.growthrocket.media/_next/image?url=%2F08.JPG&w=1920&q=75" className="w-[100%] h-[100%] flex justify-center text-center rounded-full"  alt="vr-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
