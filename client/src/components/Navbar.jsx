import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [circleDropdown, setCircleDropdown] = useState(false);
  const [sidenav, setSidenav] = useState(false);
  const searchClick = () => {
    setSearch((prev) => {
      return !prev;
    });
  };
  const categroryDropdownClick = () => {
    setCategoryDropdown((prev) => {
      return !prev;
    });
  };
  const circleDropdownClick = () => {
    setCircleDropdown((prev) => {
      return !prev;
    });
  };
  const sideNavClick = () => {
    setSidenav((prev) => {
      return !prev;
    });
  };

  return (
    <div className="flex justify-between p-3">
      {/* This is for logo */}
      <div className="logo self-center ml-8 mdm:ml-3">
        <h1 className="text-4xl font-extrabold">Logo</h1>
      </div>

      {/* This is for navbar options */}
      {/* More adjust it when we add login functionality */}
      <div className="options self-center mt-2 mdm:hidden">
        <ul className="flex space-x-10 px-5 py-3 lgm:space-x-6">
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            Home
          </li>
          <li>
            <div
              onClick={categroryDropdownClick}
              className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110"
            >
              Categories
              <svg
                width="6"
                height="3"
                class="ml-2 overflow-visible inline"
                aria-hidden="true"
              >
                <path
                  d="M0 0L3 3L6 0"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            {/* Dropdown menu */}
            <div
              className={
                categoryDropdown
                  ? "absolute z-10 mt-3 bg-red-400 w-48 rounded"
                  : "hidden"
              }
            >
              <ul className="space-y-2">
                <li className=" p-1 px-3 py-2 hover:bg-red-300 cursor-pointer">
                  Option1
                </li>
                <li className=" p-1 px-3 py-2 hover:bg-red-300 cursor-pointer">
                  Option2
                </li>
                <li className="mb-1 p-1 px-3 py-2 hover:bg-red-300 cursor-pointer">
                  Option3
                </li>
              </ul>
            </div>
          </li>
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            SignUp
          </li>
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            SignIn
          </li>
          <li className="transition duration-200 font-semibold hover:text-red-600 hover:cursor-pointer hover:scale-110">
            Contact
          </li>
          <li>
            <input
              type="text"
              className={
                search
                  ? "transition duration-700 border rounded-lg px-2 border-black lgm:w-24"
                  : "w-0"
              }
              translate
              placeholder="Search"
            />
          </li>
          <li
            className="transition duration-200 my-1 hover:text-red-600 hover:cursor-pointer hover:scale-110"
            onClick={searchClick}
          >
            <BsSearch />
          </li>
          <li className="transition duration-200 my-1 hover:text-red-600 hover:cursor-pointer hover:scale-110">
            <BsFillCartFill />
          </li>
        </ul>
      </div>

      {/* Hidden info which shows itself after login */}
      <div className="info self-center md:hidden">
        <div className="flex mdm:space-x-9">
          <div onClick={sideNavClick} className="space-y-1 py-2.5 w-5 cursor-pointer md:hidden">
            <div className="p-0.5 bg-slate-500"></div>
            <div className="p-0.5 bg-slate-500"></div>
            <div className="p-0.5 bg-slate-500"></div>
          </div>

          <div className="">
            <div onClick={circleDropdownClick} className="img cursor-pointer">
              <img
                className=" rounded-full h-10 w-10"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="img"
              />
            </div>
            <div
              className={
                circleDropdown
                  ? "absolute z-20 mt-2 -ml-40 bg-red-400 w-48 rounded"
                  : "hidden"
              }
            >
              <ul className="space-y-2">
                <li className=" p-1 px-3 py-2 hover:bg-red-300 cursor-pointer">
                  Option1
                </li>
                <li className=" p-1 px-3 py-2 hover:bg-red-300 cursor-pointer">
                  Option2
                </li>
                <li className="mb-1 p-1 px-3 py-2 hover:bg-red-300 cursor-pointer">
                  Option3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className={sidenav?"absolute z-10 h-full w-3/4 bg-slate-500 -m-3" : "hidden"}>
        <div className="float-right p-5 w-full block">
          <h1 className="float-right cursor-pointer" onClick={sideNavClick}>❌</h1>
        </div>
        <div className="block mt-20">
          <ul className="">
            <li className="hover:bg-red-300 p-5">Option 1</li>
            <li className="hover:bg-red-300 p-5">Option 2</li>
            <li className="hover:bg-red-300 p-5">Option 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
