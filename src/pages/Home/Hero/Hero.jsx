import React from "react";
import image from "../../../assets/slider2-nego1-1920x960_1920x846.progressive.webp";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { FaMoneyCheckAlt, FaHeadphones } from "react-icons/fa";

const Hero = () => {
  return (
    <header>
      <div
        className="h-screen bg-cover bg-no-repeat bg-center relative"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-black opacity-10 z-1"></div>
        <div className="container mx-auto p-5 flex items-center h-full relative z-10">
          <div className="text-white lg:w-1/2 space-y-5">
            <h3 className="tracking-widest">
              TYPI NON HABENT CLARITATEM INSITAM
            </h3>
            <h4 className="font-semibold text-5xl">WORLD LEADING TECHNOLOGY</h4>
            <h5 className="font-light">
              Claritas est etiam processus dynamicus, qui sequitur mutationem
              consuetudium lectorum. Mirum est notare quam littera gothica, quam
              nunc putamus parum claram.
            </h5>
            <button className="flex items-center gap-3 border px-5 py-3 rounded-md hover:bg-white hover:text-black transition-all">
              <span>View Collection</span> <AiOutlineArrowRight size="20" />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-red-100 bg-opacity-30 py-10">
        <div className="container mx-auto p-5 flex flex-col lg:flex-row gap-5 text-black">
          <div className="border p-5 rounded-md relative">
            <h4>FREE DELIVERY</h4>
            <p className="text-xs leading-5">Nam liber tempor cum soluta nobis eleifend option congue.</p>
            <BsFillRocketTakeoffFill size={30} className="absolute -right-2 text-amber-950"/>
          </div>
          <div className="border p-5 rounded-md relative">
            <h4>MONEY GUARANTEE</h4>
            <p className="text-xs leading-5">Nam liber tempor cum soluta nobis eleifend option congue.</p>
            <FaMoneyCheckAlt  size={30} className="absolute -right-2 text-amber-950"/>
          </div>
          <div className="border p-5 rounded-md relative">
            <h4>ONLINE SUPPORT</h4>
            <p className="text-xs leading-5">Nam liber tempor cum soluta nobis eleifend option congue.</p>
            <FaHeadphones  size={30} className="absolute -right-2 text-amber-950"/>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
