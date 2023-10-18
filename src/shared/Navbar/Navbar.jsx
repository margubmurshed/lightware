/** @format */

import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaLeaf, FaShoppingCart } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const commonLinks = [
    { id: 1, text: "Home", to: "/" },
    { id: 2, text: "Shop", to: "/shop" },
  ];

  const nonUserLinks = [{ id: 1, text: "Login", to: "/login" }];

  const userLinks = [{ id: 2, text: "Dashboard", to: "/dashboard" }];

  const links = commonLinks.concat(user ? userLinks : nonUserLinks);
  const handleLogout = () => {
    logOut();
  };
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 select-none">
      <div className="container mx-auto p-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <RxHamburgerMenu
            size={20}
            className="text-white lg:hidden cursor-pointer"
            onClick={() => {
              setOpenProfile(false);
              setOpen(!open);
            }}
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
          </ul>
          {user && (
            <div
              className={`max-w-3xl bg-white shadow-md rounded-lg border p-5 space-y-2 absolute right-5 top-full ${
                openProfile ? "block" : "hidden"
              }`}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                className="w-20 h-20 border rounded-full bg-cover mx-auto"
                alt="user image"
              />
              <h3 className="font-semibold">
                {user.displayName || user.email}
              </h3>
              <div className="flex justify-center items-center gap-1 text-sm mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Active Now</span>
              </div>
              <Link to="/dashboard/account-details" className="block">
                <button className="border-2 rounded-2xl w-full bg-amber-950 font-semibold text-white py-2">
                  View Profile
                </button>
              </Link>
            </div>
          )}
          <div className="flex gap-5 items-center text-white">
            {user && (
              <>
                <RiAccountCircleFill
                  size={30}
                  className="cursor-pointer"
                  onClick={() => {
                    setOpen(false);
                    setOpenProfile(!openProfile);
                  }}
                />
                <FiLogOut
                  size={30}
                  onClick={handleLogout}
                  className="cursor-pointer lg:text-white lg:hover:text-gray-200 transition-all"
                />
              </>
            )}
            <Link to="/cart">
              <FaShoppingCart size={30} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
