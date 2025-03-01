import React from "react";
import PricingPlans from "../components/pricing/PricingPlans";
import Navbar from "../components/home/Navbar";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Power up your creativity</span>
            <span className="block text-purple-500">with our credit plans</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-500">
            Choose from our flexible credit plans and start generating amazing
            images today. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Plans */}
        <PricingPlans />

        {/* FAQ Section */}
        <div className="mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Have questions? We're here to help.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-800 p-8">
              <h3 className="text-lg font-medium text-white">
                What are credits?
              </h3>
              <p className="mt-4 text-gray-300">
                Credits are our virtual currency used to generate images. One
                credit typically equals one image generation.
              </p>
            </div>

            <div className="rounded-lg bg-gray-800 p-8">
              <h3 className="text-lg font-medium text-white">
                Do credits expire?
              </h3>
              <p className="mt-4 text-gray-300">
                Credits are valid for 12 months from the date of purchase.
                Unused credits will roll over if you renew your subscription.
              </p>
            </div>

            <div className="rounded-lg bg-gray-800 p-8">
              <h3 className="text-lg font-medium text-white">
                Can I upgrade my plan?
              </h3>
              <p className="mt-4 text-gray-300">
                Yes, you can upgrade your plan at any time. The remaining
                credits will be transferred to your new plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
