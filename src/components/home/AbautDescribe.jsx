import React from "react";
import { assets } from "../../assets/assets"; // Pastikan gambar ada di assets

const AbautDescribe = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center gap-7 mt-10 md:mt-0">
      <div className="text-center flex flex-col items-center pb-7">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Create AI Images
        </h1>
        <p className="text-gray-500 mt-1">Turn your imagination into visuals</p>
      </div>
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Kolom Gambar */}
        <div className="flex justify-center items-center p-4 sm:p-2 md:p-0">
          <img
            className="w-full max-w-md rounded-lg shadow-lg"
            src={assets.sample_img_1} // Ganti dengan gambar yang sesuai
            alt="AI Generated Image"
          />
        </div>

        {/* Kolom Deskripsi */}
        <div className="flex flex-col gap-4 p-4 sm:p-2 md:p-0">
          <h2 className="mt-6 text-xl md:text-2xl font-semibold text-gray-900">
            Introducing the AI-Powered Text to Image Generator
          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            Easily bring your ideas to life with our free AI image generator.
            Whether you need stunning visuals or unique imagery, our tool
            transforms your text into eye-catching images with just a few
            clicks. Imagine it, describe it, and watch it come to life
            instantly.
          </p>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed border-l-4 border-blue-500 pl-4">
            Simply type in a text prompt, and our cutting-edge AI will generate
            high-quality images in seconds.{" "}
            <span className="text-blue-500 font-medium">
              From product visuals to character designs and portraits,
            </span>{" "}
            even concepts that don’t yet exist can be visualized effortlessly.
            Powered by advanced AI technology, the creative possibilities are
            limitless!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AbautDescribe;
