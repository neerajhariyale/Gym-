import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-screen md:w-11/12 flex flex-col md:flex-row md:items-center lg:items-center justify-between p-4 text-black relative">
      <div className="text-2xl font-bold cursor-pointer hover:shadow-2xl md:mx-40 transition-all">
        <p>GYM LOVER</p>
        <div className="w-16 border-2 border-yellow-500 mt-1"></div>
      </div>

      {/* Hamburger Menu Button */}
      <div className="md:hidden absolute right-4 top-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      {/* Menu Links */}
      <div
        className={`${isOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row gap-4 mt-4 md:mt-0 relative bg-white md:bg-transparent w-full md:w-auto left-0 md:left-auto top-4 md:top-auto p-4 md:p-0 shadow-md md:shadow-none`}
      >
        <p className="cursor-pointer hover:border-b-2 hover:border-b-yellow-600 transition-all">Home</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-yellow-600 transition-all">About</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-yellow-600 transition-all">Diet Plan</p>
        <p className="cursor-pointer hover:border-b-2 hover:border-b-yellow-600 transition-all">Membership</p>
      </div>
    </nav>
  );
};

export default Navbar;
