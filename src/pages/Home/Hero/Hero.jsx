import React from "react";
import image from "../../../assets/slider2-nego1-1920x960_1920x846.progressive.webp";
import {AiOutlineArrowRight} from 'react-icons/ai'

const Hero = () => {
  return (
    <header
      className="h-screen bg-cover bg-no-repeat bg-center relative"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 bg-black opacity-10 z-1"></div>
      <div className="container mx-auto p-5 flex items-center h-full relative z-10">
        <div className="text-white lg:w-1/2 space-y-5">
          <h3 className="tracking-widest">TYPI NON HABENT CLARITATEM INSITAM</h3>
          <h4 className="font-semibold text-5xl">WORLD LEADING TECHNOLOGY</h4>
          <h5 className="font-light">
            Claritas est etiam processus dynamicus, qui sequitur mutationem
            consuetudium lectorum. Mirum est notare quam littera gothica, quam
            nunc putamus parum claram.
          </h5>
          <button className="flex items-center gap-3 border px-5 py-3 rounded-md hover:bg-white hover:text-black transition-all"><span>View Collection</span> <AiOutlineArrowRight size="20"/></button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
