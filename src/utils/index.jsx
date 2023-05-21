import aism from "../assets/aism.webp";
import navi from "../assets/navi.webp";
import spur from "../assets/spur.png";
import fisdom from "../assets/fisdom.svg";

const creatingContent = [
  {
    id: "i1",
    src: spur,
    alt: spur,
    width: 150,
    height: 55,
  },
  {
    id: "i2",
    src: navi,
    alt: navi,
    width: 180,
    height: 55,
  },
  {
    id: "i3",
    src: aism,
    alt: aism,
    width: 60,
    height: 55,
  },
  {
    id: "i4",
    src: fisdom,
    alt: fisdom,
    width: 220,
    height: 55,
  },
];

const CreatingContent = () => {
  return  <div className="flex py-10 justify-between items-center no-tilt">
    {creatingContent.map((img) => (
      <div key={img.id} className=" text-center flex justify-center items-center">
        <img src={img.src} alt={img.alt} width={img.width} height="55" />
      </div>
    ))}
  </div>
};

export default CreatingContent;
