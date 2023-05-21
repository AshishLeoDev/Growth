import React from "react";
import CreatingContent from "../utils";
import ShowTextContent from "./ShowTextContent";

const Creating = ({contentHeading,showImageContent}) => {
  return (
    <section className="max-w-[1180px] py-16 mx-auto px-5  bg-transparent" >
      <h2 className="text-[#ff341d] font-[900] text-xl tracking-tighter uppercase font-kanit ">
      {contentHeading}
      </h2>
      <div className="mt-5 mx-3 border border-orange-500 -rotate-2 rounded-[8px]">
          {showImageContent ? <CreatingContent/>:<ShowTextContent/>}
      </div>
    </section>
  );
};
export default Creating;
