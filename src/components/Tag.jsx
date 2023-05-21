import React from "react";
import { Link } from "react-router-dom";

const Tag = () => {

  return (
    <Link target="_blank" to={"https://tailwindcss.com/"}>
      <div className="  px-7 py-2 w-[240px] flex flex-col tracking-tighter border border-orange-500 relative box-style text-black  rounded-xl -rotate-7 top-[200px]">
        <h4 className="font-extrabold rotate-1 px-2 text-lg">Fisdom</h4>
        <div className="flex font-extrabold rotate-1 px-1 text-lg">
          <img
            src="https://www.growthrocket.media/_next/image?url=%2Fyoutube.png&w=16&q=75"
            alt=""
            className="w-[20px] h-[25px] pt-1"
          />
          <p className="pl-1">200K+ Subscibers</p>
        </div>
      </div>
    </Link>
  );
};

export default Tag;
