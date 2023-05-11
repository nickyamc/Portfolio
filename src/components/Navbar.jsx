import React, { useState } from "react";
import { MoonIcon, SunIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleClickMenu = () => {
        setMenu(!menu)
    }
 
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 py-2 px-4 bg-white shadow-md">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 content-center">
          <div className="justify-items-start flex items-center">
            <a href="#welcome" className="font-neo font-bold text-2xl text-os">nickyamc</a>
          </div>
          <div className="justify-items-center col-span-2 lg:col-span-1 order-last lg:order-none my-auto">
            <ul className={`${menu ? "flex" : "hidden"} lg:flex flex-nowrap flex-col lg:flex-row justify-center items-center gap-14 font-open text-[15px]`}>
              <li className="whitespace-nowrap hover:text-[#4f65f2]"><a href="#aboutus" className="cursor-pointer">Sobre mi</a></li>
              <li className="hover:text-[#4f65f2] z-30"><a href="#experience" className="cursor-pointer">Experiencia</a></li>
              <li className="hover:text-[#4f65f2] z-30"><a href="#background" className="cursor-pointer">Habilidades</a></li>
              <li className="hover:text-[#4f65f2] z-30"><a href="#projects" className="cursor-pointer">Proyectos</a></li>
              <li className="hover:text-[#4f65f2] z-30"><a className="cursor-pointer">Contacto</a></li>
            </ul>
          </div>
          <div className="justify-end flex items-center gap-2">
            <button className="hidden rounded-full p-1 text-gray-500 bg-white hover:text-black hover:drop-shadow-lg">
              <SunIcon className="w-5 h-5" />
            </button>
            <button onClick={handleClickMenu} className="lg:hidden rounded-lg p-1 border text-gray-500 bg-white hover:text-black hover:drop-shadow-lg">
              { menu ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
