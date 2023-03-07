import NavLinkCustom from "../bases/NavLinkCustom";
import LogoN from "../../assets/logo_n.svg";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header>
      <nav className=" px-6 py-3 bg-transparent">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center gap-1">
              <img src={LogoN} className="w-5" />
              <p className="text-lg font-bold font-mono">{"<nicky/>"}</p>
            </div>
            <div>
              <ul className="flex flex-wrap items-center gap-8">
                <li>
                  <NavLinkCustom>Sobre Mi</NavLinkCustom>
                </li>
                <li>
                  <NavLinkCustom>Experiencia</NavLinkCustom>
                </li>
                <li>
                  <NavLinkCustom>Proyectos</NavLinkCustom>
                </li>
                <li>
                  <NavLinkCustom>Contacto</NavLinkCustom>
                </li>
              </ul>
            </div>
            <div className="flex flex-nowrap items-center gap-2">
              <button
                type="button"
                className="p-1.5 rounded-md text-gray-600 hover:text-white hover:bg-gray-500"
              >
                <SunIcon className="w-5 h-5" />
                {/* <MoonIcon className="w-4 h-4" /> */}
              </button>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 rounded-md">
                <option selected>ES</option>
                <option>EN</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
