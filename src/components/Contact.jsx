import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="w-full text-center flex-col justify-center mx-auto py-10 px-8 flex">
      <div>
        <h1 className="font-extrabold text-lg text-[#FF341D]">Contact Us</h1>
      </div>
      <h1 className="font-extrabold text-5xl px-5 py-2 tracking-tighter">
        Let's Connect
      </h1>
      <div className="flex gap-10 py-6 justify-center">
        <Link to={"https://www.instagram.com/"} target="_blank">
          <button className=" py-3 cursor-pointer px-10 bg-[#FFB701] box-content border-none text-[16px] text-black font-semibold  hover:ease-in-out hover:duration-200 hover:text-white">
            Schedule A Call
          </button>
        </Link>
        <Link to={"https://web.whatsapp.com/"} target="_blank">
          <button className="py-3 cursor-pointer px-9 bg-[#ff341d] box-content border-none text-[16px] text-black font-semibold   hover:transform-none hover:text-white">
            Chat On Whatsapp
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Contact;
