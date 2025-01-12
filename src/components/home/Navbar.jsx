import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center m-auto w-[90%] py-6">
      <div className="flex items-center gap-3">
        <img
          className="w-[50px] h-[50px]"
          src="./logo/imagiinLogo.png"
          alt="logoImaginasiin"
        />
        <p className="text-2xl font-semibold">Imaginasiin</p>
      </div>
      <div className="flex gap-6 items-center">
        <button>Pricing</button>
        <button className="bg-black text-white px-16 py-3 rounded-full">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
