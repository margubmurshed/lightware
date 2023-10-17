import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    const user = true;
  const [open, setOpen] = useState(false);
  const commonLinks = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "Shop", to: "/shop" },
  ];

  const nonUserLinks = [
    { id: 1, text: "Login", to: "/login" },
  ]

  const userLinks = [
    { id: 2, text: "Dashboard", to: "/dashboard" },
  ]

  const links = commonLinks.concat(user ? userLinks : nonUserLinks)
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 select-none">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <RxHamburgerMenu
            size={20}
            className="text-white lg:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex gap-5 items-center">
          <ul
            className={`flex gap-5 flex-col lg:flex-row absolute lg:static bg-white lg:bg-transparent top-full left-0 ${
              open ? "left-5" : "-translate-x-full lg:translate-x-0"
            } p-5 lg:p-0 rounded lg:rounded-none shadow-md lg:shadow-none transition-all`}
          >
            {links.map(({ text, to, id }, index) => (
              <li
                key={id}
                className={
                  index + 1 === links.length
                    ? ""
                    : "pb-5 border-b lg:pb-0 lg:border-none"
                }
              >
                <NavLink
                  className={({ isActive }) =>
                    `text-gray-500 hover:text-black lg:text-white lg:hover:text-gray-200 transition-all ${
                      isActive ? "text-amber-900" : ""
                    }`
                  }
                  to={to}
                >
                  {text}
                </NavLink>
              </li>
            ))}

            {user}
          </ul>
          <div className="flex gap-5 items-center text-white">
            <RiAccountCircleFill size={30} />
              <FaShoppingCart size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
