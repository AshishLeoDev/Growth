import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="max-w-[1180px] relative mx-auto mt-10">
      <div className="px-8 py-10">
        <div className="w-full flex py-10">
          <div className="w-[325px] h-[535px] relative youtube rounded-xl">
            <div className="h-[535px] w-[325px] youtube-tilt flex">
              <img
                src="https://www.growthrocket.media/_next/image?url=%2Ffounder.jpg&w=1920&q=75"
                loading="lazy"
                alt="youtube"
              />
            </div>
          </div>

          <div className="  px-4 py-2 w-[200px] text-center justify-center flex flex-col absolute tracking-tighter border border-orange-500  box-style-new text-black  rounded-xl -rotate-7">
            <h4 className="font-extrabold rotate-1 px-2 text-lg">
              Ayushman Pandita
            </h4>
            <div className="flex pl-2 font-extrabold rotate-1 text-lg">
              <Link
                target="_blank"
                to={"https://www.youtube.com/"}
                className="px-2"
              >
                <img
                  src="https://www.growthrocket.media/_next/image?url=%2Fyoutube.png&w=16&q=75"
                  alt=""
                  className="w-[20px] h-[25px] pt-1"
                />
              </Link>
              <Link target="_blank" to={"https://www.instagram.com/"}>
                <i className="fa-brands fa-instagram"></i>
              </Link>
              <p className="pl-2">400,000+</p>
            </div>
          </div>
          <div className="w-full px-16">
            <h1 className="text-lg text-[#FF341D] font-bold font-kanit uppercase">
              MEET THE FOUNDER
            </h1>
            <h1 className="text-5xl pt-6 font-extrabold tracking-tight font-kanit leading-[1.2]">
              Ayushman Pandita
            </h1>
            <span className="text-[#FFB701] font-bold text-2xl tracking-tighter">
              250,000+ Youtube | 150,000+ Instagram
            </span>
            <p className="pt-6 font-[400]  leading-[1.85rem] text-xl">
              As an entrepreneur and content creator, Ayushman has a passion for
              <br /> creating exceptional content that resonates with audiences.
              His journey <br /> began in February 2021 when he started making
              finance videos on <br /> YouTube for India's youth. After his
              success on Youtube, he launched his <br />
              Instagram account in August 2022 and scaled to 1 lakh followers in
              less <br /> than 4 months.
            </p>
              <p className="pt-6 font-[400] leading-[1.85rem] text-xl">
                Ayushman completed his BTech in Computer Science from IIITD in
                2020. <br /> He previously worked as a Software Engineer at HSBC
                and as a Product <br /> Manager at BharatPe.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
