import React, { useState } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleClickMenu = () => {
        setMenu(!menu)
    }
 
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 py-2 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 content-center">
          <div className="justify-items-start flex items-center">
            <p className="font-neo font-bold text-2xl text-os">nickyamc</p>
          </div>
          <div className="justify-items-center col-span-2 md:col-span-1 order-last md:order-none my-auto">
            <ul className={`${menu ? "flex" : "hidden"} md:flex flex-nowrap flex-col md:flex-row justify-center items-center gap-14 font-open text-[15px]`}>
              <li>About</li>
              <li>BackEnd</li>
              <li>FrontEnd</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="justify-end flex items-center gap-2">
            <button className="rounded-full p-1 text-gray-500 bg-white hover:text-black hover:drop-shadow-lg">
              <SunIcon className="w-5 h-5" />
            </button>
            <button onClick={handleClickMenu} className="md:hidden rounded-lg p-1 border text-gray-500 bg-white hover:text-black hover:drop-shadow-lg">
              { menu ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
