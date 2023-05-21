import React from "react";
import { Link } from "react-router-dom";
import Tag from '../components/Tag'

const Business = () => {

  const title = 'Fisdom'
  return (
    <section className="w-full max-w-[1180px] py-10 flex flex-col relative mx-auto px-7 my-[100px]">
      {/* This is a Instagram Section */}

      <div className="w-full flex py-10">
        <div className="w-[325px] h-[576px] youtube rounded-xl">
          <div className="h-[576px] w-[325px] youtube-tilt flex">
            <img
              src="https://www.growthrocket.media/_next/image?url=%2Finsta1.png&w=1920&q=75"
              loading="lazy"
              alt="youtube"
            />
            <Link target="_blank" to={"https://tailwindcss.com/"}>
              <i className="fa-solid fa-circle-play absolute cursor-pointer opacity-75 top-[275px] left-[140px] text-6xl text-[#FFB701] ease-in-out transition duration-200 hover:scale-110 h-[1em] w-[1em]"></i>
            </Link>
          </div>
        </div>
        <div className="w-full px-16">
          <h1 className="text-lg text-[#FF341D] font-bold font-kanit uppercase">
            If Your business is't on instagram, it should be
          </h1>
          <h1 className="text-5xl pt-6 font-extrabold tracking-tight font-kanit leading-[1.2]">
            if your business is on <br /> Instagram,{" "}
            <span className="text-[#FFB701]">
              {" "}
              engage your <br /> Followers daily.
            </span>
          </h1>
          <p className="pt-6 font-[400] tracking-wide leading-[1.85rem] text-xl">
            Create end-to-end content for your Instagram. We will create Reels,
            Carousels, Memes & Daily Stories for your page. Grow your Instagram{" "}
            <br /> page organically and build a community of followers that
            convert to <br /> paid customers.
          </p>
          <div className="pt-8">
            <Link to={`/#contact`}>
              <button className="bg-[#ff341e] text-black font-[700] text-base mt-2 font-kanit rounded-[1px] hover:scale-110 hover:bg-orange-500 hover:text-white h-[3em] w-[8em] transition duration-150 ease-in">
                Book A Call
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* This is a Youtube Section  */}
      <div className=" w-full py-10 flex ">
        <div className="  mt-16">
          <h1 className="text-lg text-[#FF341D] font-bold font-kanit uppercase">
            If Your business is't on Youtube, it should be
          </h1>
          <h1 className="text-5xl pt-6 font-extrabold tracking-tight font-kanit leading-[1.2]">
            if your business is on <br /> Youtube,{" "}
            <span className="text-[#FFB701]">
              build A <br /> Community.
            </span>
          </h1>
          <p className="pt-6 font-[400] tracking-wide leading-[1.85rem] text-xl">
            Create both long and short videos for YouTube. <br /> We will take
            care of each aspect of creating <br /> an engaging YouTube video -
            Research, Scripting, <br /> Recording, Video Editing, Thumbnail &{" "}
            <br /> Management. Build a loyal community that <br /> transforms
            from subscribers to customers.
          </p>
          <div className="pt-8">
            <Link to={`/#contact`}>
              <button className="bg-[#ff341e] text-black font-[700] text-base mt-2 font-kanit rounded-[1px] hover:scale-110 hover:bg-orange-500 hover:text-white h-[3em] w-[8em] transition duration-150 ease-in">
                Book A Call
              </button>
            </Link>
          </div>
        </div>

        <div className=" video relative top-[36px] rounded-xl left-[166px]">
          <div className="w-[325px] h-[576px] video-tilt   rounded-xl">
            <div className="h-[576px] px-10 py-8 w-[325px] relative border border-orange-500 rounded-xl flex">
              <iframe
                src="https://www.youtube.com/embed/AB-4AcR2-e4?autoplay=1"
                className=" w-[100%] absolute video-horizontal h-[100%]"
              ></iframe>
            </div>
          </div>
        </div>
        <Link target="_blank" to={"https://tailwindcss.com/"}>
          <div className="  px-7 py-2 w-[240px] flex flex-col tracking-tighter border border-orange-500 relative box-style text-black  rounded-xl -rotate-7 top-[200px]">
            <h4 className="font-extrabold rotate-1 px-2 text-lg">Fisdom</h4>
            <div className="flex font-extrabold rotate-1 px-1 text-lg">
              <img
                src="https://www.growthrocket.media/_next/image?url=%2Fyoutube.png&w=16&q=75"
                alt=""
                className='w-[20px] h-[25px] pt-1'
              />
              <p className="pl-1">200K+ Subscibers</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Business;
