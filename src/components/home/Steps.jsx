import React from "react";
import { steps } from "../../data/steps";

const Steps = () => {
  return (
    <section className="flex flex-col items-center gap-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center pt-[10%]">
        <h2 className="text-3xl font-semibold">How it works</h2>
        <p className="text-md font-light text-gray-600">
          Transform Words Into Stunning Images
        </p>
      </div>

      <div className="flex flex-col items-start gap-8 w-full max-w-3xl">
        {steps.map((step, index) => (
          <div
            className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-md p-6 shadow-lg w-full mx-auto transition-transform transform hover:scale-105"
            key={index}
          >
            <img className="w-10" src={step.icon} alt="step-icon" />
            <div className="flex flex-col">
              <h3 className="text-center sm:text-left text-lg">{step.title}</h3>
              <p className="text-[14px] font-light">"{step.description}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;
