import { NavLink } from "react-router-dom";

const NavLinkCustom = ({children}) => {
  return (
    <NavLink className="text-base text-gray-600 hover:font-semibold">
      {children}
    </NavLink>
  )
}

export default NavLinkCustom
