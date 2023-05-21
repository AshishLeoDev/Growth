import React from "react";

const ShowTextContent = () => {
  const millions = [
    {
      id: "million",
      title: "25 Million+",
      desc: "views",
    },
    {
      id: "hours",
      title: "200,000 Hours+",
      desc: "Watch Time",
    },
    {
      id: "audience",
      title: "10 Million+",
      desc: "Audience",
    },
  ];

  return <div className="flex py-10 px-40 justify-between items-center no-tilt">
    {millions.map((value) => (
      <div key={value.id} className=" text-center flex flex-col justify-center items-center">
        <h1 className="text-black font-extrabold text-4xl tracking-tight font-kanit">
          {value.title}
        </h1>
        <p className="text-black font-extrabold text-2xl tracking-tight font-kanit">
          {value.desc}
        </p>
      </div>
    ))}
  </div> 
};

export default ShowTextContent;
