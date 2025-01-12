import React from "react";
import { assets } from "../../assets/assets";

const ExampleImage = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-center gap-5">
        <img
          className="w-[77.5px] rounded-sm"
          src={assets.sample_img_1}
          alt="sample_img_1"
        />
        <img
          className="w-[77.5px] rounded-sm"
          src={assets.sample_img_2}
          alt="sample_img_2"
        />
        <img
          className="w-[77.5px] rounded-sm"
          src={assets.sample_img_3}
          alt="sample_img_3"
        />
        <img
          className="w-[77.5px] rounded-sm"
          src={assets.sample_img_4}
          alt="sample_img_4"
        />
        <img
          className="w-[77.5px] rounded-sm"
          src={assets.sample_img_5}
          alt="sample_img_5"
        />
        <img
          className="w-[77.5px] rounded-sm"
          src={assets.sample_img_6}
          alt="sample_img_6"
        />
      </div>
      <div className="text-center">
        <p className="text-sm font-light">Generated images from imagify</p>
      </div>
    </div>
  );
};

export default ExampleImage;
