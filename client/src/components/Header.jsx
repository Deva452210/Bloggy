import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border-primary/40 bg-primary/10 rounded-full text-sm text-primary">
          <p>New AI feature integrated</p>
          <img className="w-2.5" src={assets.star_icon} alt="star icon" />
        </div>
      </div>
      <img
        src={assets.gradientBackground}
        alt="Background image"
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default Header;
