import React from "react";
import { assets } from "../../assets/assets";
import { steps } from "../../data/steps";

const Steps = () => {
  return (
    <section className="flex flex-col items-center gap-8 min-h-screen">
      <div className="flex flex-col items-center pt-[10%]">
        <h2 className="text-3xl font-semibold">How it works</h2>
        <p className="text-md font-light text-gray-600">
          Transform Words Into Stunning Images
        </p>
      </div>

      <div className="flex flex-col items-start gap-8">
        {steps.map((step, index) => (
          <div
            className="flex items-center gap-4 bg-white rounded-md p-8 shadow-lg w-full mx-auto"
            key={index}
          >
            <img src={step.icon} alt="step-icon" />
            <div className="flex flex-col">
              <h3 className="text-2xl">{step.title}</h3>
              <p className="text-[14px] font-light">"{step.description}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
