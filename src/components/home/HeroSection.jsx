import React from "react";
import { assets } from "../../assets/assets";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center gap-10 my-12">
      <div className="text-center flex items-center gap-3 font-light border-gray-600 rounded-full border-2 py-2 px-6">
        <span>Best text to image generator</span>
        <img src={assets.star_icon} alt="star-icon" />
      </div>
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-5xl">Turn Text To</h1>
        <h1 className="text-5xl">
          <span className="text-blue-600">Image</span> ,In Secconds.
        </h1>
        <p className="text-md font-light text-center text-wrap max-w-[600px]">
          Unleash your creativity with AI. Turn your imagination into visual art
          in seconds – just type, and watch the magic happen.
        </p>
      </div>
      <button className="bg-black text-white px-16 py-3 rounded-full flex items-center gap-2">
        Generate image
        <img className="w-7" src={assets.star_group} alt="starGroup-icon" />
      </button>
    </section>
  );
};
export default HeroSection;
