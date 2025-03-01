import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 1,
      name: "Starter",
      credits: 100,
      price: 9.99,
      features: [
        "Basic image generation",
        "100 credits",
        "Standard resolution",
        "Email support",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Pro",
      credits: 500,
      price: 29.99,
      features: [
        "Advanced image generation",
        "500 credits",
        "HD resolution",
        "Priority support",
        "Commercial usage",
      ],
      popular: true,
    },
    {
      id: 3,
      name: "Enterprise",
      credits: 2000,
      price: 99.99,
      features: [
        "Premium image generation",
        "2000 credits",
        "4K resolution",
        "24/7 support",
        "Commercial usage",
        "API access",
      ],
      popular: false,
    },
  ];

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
    // Add your payment processing logic here
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Choose Your Credit Plan
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Select the perfect plan for your creative needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl border ${
                plan.popular
                  ? "border-purple-500 ring-2 ring-purple-500"
                  : "border-gray-700"
              } bg-gray-800 shadow-xl transition-all duration-200 hover:scale-105`}
            >
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-white">
                  {plan.name}
                </h3>
                <p className="mt-4 flex items-baseline">
                  <span className="text-5xl font-bold tracking-tight text-white">
                    ${plan.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold text-gray-400">
                    /month
                  </span>
                </p>
                <p className="mt-2 text-lg text-purple-400">
                  {plan.credits} Credits
                </p>

                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheck className="h-5 w-5 text-purple-500" />
                      <span className="ml-3 text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleSelectPlan(plan.id)}
                  className={`mt-8 w-full rounded-lg py-3 px-6 text-center text-sm font-semibold transition-all duration-200 ${
                    plan.popular
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  {selectedPlan === plan.id ? "Selected" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400">
            Need a custom plan?{" "}
            <a
              href="/contact"
              className="text-purple-500 hover:text-purple-400"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
