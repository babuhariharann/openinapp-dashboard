import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import profile from "../assets/images/profile.png";
import { BiBell, BiSearch } from "../assets/icons/index";
import { sideBarNavigation } from "../data/data";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Fetch data from sidebar navigation

  const currentNavItem = sideBarNavigation.find(
    (item) => item.link === location.pathname
  );

  // Logout dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="h-10 rounded-xl bg-neutral-100 justify-between z-10000 flex items-center w-full px-3">
      {currentNavItem && (
        <h1 className="text-xl font-bold">{currentNavItem.name}</h1>
      )}

      <div className="flex items-center gap-5">
        <div className="hidden md:block">
          {/* Search Bar */}

          <div className="flex flex-row items-center bg-white rounded-lg px-2 md:px-3  ">
            <input
              type="text"
              className="bg-transparent outline-none w-36 text-sm py-0.5 px-1"
              placeholder="Search"
            />
            <BiSearch className="text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Bell Icon */}

        <BiBell className="text-2xl hover:ease-in-out hover:scale-95 transition-all duration-500 cursor-pointer" />

        {/* Img div */}

        <div className="relative hover:scale-95 transition-all duration-500 cursor-pointer">
          <div className="h-6 w-6 cursor-pointer" onClick={toggleDropdown}>
            <img src={profile} alt="profile" className="rounded-full" />
          </div>

          {/* Logout Dropdown */}

          {isDropdownOpen && (
            <div className="absolute top-8 right-0 bg-white rounded-md shadow-lg">
              <button
                className="block w-full text-left px-4 py-0.5 text-gray-700 hover:bg-gray-100 z-10000"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
