import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { isLogin } = props;
  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center m-auto w-[90%] md:w-[80%] pt-8">
      <Link to="/">
        <div className="flex items-center gap-3">
          <img
            className="w-7 md:w-10"
            src="./logo/imagiinLogo.png"
            alt="logoImaginasiin"
          />
          <p className="text-2xl font-semibold">Imaginasiin</p>
        </div>
      </Link>
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:gap-10">
        <Link to="/pricing">
          <button>Pricing</button>
        </Link>
        {isLogin ? (
          <Link to="/">
            <div className="flex items-center gap-3">
              <img
                className="w-10 rounded-full"
                src="./assets/avatar.png"
                alt="user-avatar"
              />
            </div>
          </Link>
        ) : (
          <Link to="/login">
            <button className="bg-black text-white px-16 py-3 rounded-full">
              Login
            </button>
          </Link>
        )}
        {isLogin && (
          <Link to="/">
            <button
              onClick={() => {
                localStorage.clear();
                window.location.reload();
              }}
            >
              Logout
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
