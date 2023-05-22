import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "../index.css";
import Typewriter from "typewriter-effect";
import leo from "../assets/spur.png";

const img1 = [
  {
    link: "https://www.growthrocket.media/_next/image?url=%2F01.jpg&w=1920&q=75",
  },
  {
    link: "https://www.growthrocket.media/_next/image?url=%2F02.jpg&w=1920&q=75",
  },
];

const img2 = [
  {
    link: "https://www.growthrocket.media/_next/image?url=%2F04.JPG&w=1920&q=75",
  },
  {
    link: "https://www.growthrocket.media/_next/image?url=%2F05.jpeg&w=1920&q=75",
  },
];
const img3 = [
  {
    link: "https://www.growthrocket.media/_next/image?url=%2F06.jpg&w=1920&q=75",
  },
  {
    link: "https://www.growthrocket.media/_next/image?url=%2F09.jpg&w=1920&q=75",
  },
];

const responsive = {
  mobile: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};
const Hero = () => {
  return (
    <section id="hero" className="min-h-[550px] mb-10 pb-16">
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
              <button
                className="bg-[#ff341e] hover:bg-orange-500 hover:transform-none hover:text-white text-gray-900 px-5 font-[700] text-[20px] mt-2 py-2 font-kanit rounded-[3px]"
                onClick={() => {
                  document
                    .getElementById("science")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="absolute w-[200px] h-[200px] rounded-full top-[-16px] left-24  border border-none">
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={5000}
              keyBoardControl={true}
              transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {img1.map((x, i) => (
                <img
                  key={i}
                  src={x.link}
                  className="w-[100%] text-transparent inset-0 h-[100%] flex justify-center text-center rounded-full"
                  alt="vr-image"
                />
              ))}
            </Carousel>
          </div>
          <div className="absolute w-[150px] h-[150px] rounded-full top-16 left-[22rem]">
          <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={4000}
              keyBoardControl={true}
              transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {img2.map((x, i) => (
                <img
                  key={i}
                  src={x.link}
                  className="w-[100%] text-transparent inset-0 h-[100%] flex justify-center text-center rounded-full"
                  alt="vr-image"
                />
              ))}
            </Carousel>
          </div>
          <div className="absolute w-[230px] h-[230px] rounded-full top-[15rem] left-[9rem]">
          <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={10000}
              keyBoardControl={true}
              transitionDuration={500}
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {img3.map((x, i) => (
                <img
                  key={i}
                  src={x.link}
                  className="w-[100%] text-transparent inset-0 h-[100%] flex justify-center text-center rounded-full"
                  alt="vr-image"
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
