import React from "react";
import { useState, useEffect } from "react";
import { BiChevronRight } from "../assets/icons/index";
import { sideBarNavigation } from "../data/data";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  // UseState Hooks
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const shouldShowBoardHeading = !isSmallScreen || (isSmallScreen && open);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const location = useLocation();

  return (
    <>
      {/* Dashboard Sidebar */}
      <div
        className={`bg-black ${
          open ? "w-80 p-12" : "w-16 p-8"
        } md:w-[400px] flex flex-col rounded-3xl transition-all duration-300  ${
          shouldShowBoardHeading
            ? "flex flex-col"
            : "flex justify-around items-center"
        }`}
      >
        {/* logo */}
        {shouldShowBoardHeading ? (
          <h1 className="text-4xl font-bold mt-5 mb-10 text-white">
            <Link to={"/"}>Board.</Link>
          </h1>
        ) : (
          <h1 className="-rotate-90 text-4xl font-bold text-white">
            <Link to={"/"}>Board.</Link>
          </h1>
        )}

        {/* Pages Link */}

        {shouldShowBoardHeading
          ? sideBarNavigation?.map((menu, i) => (
              <Link key={i} to={menu?.link}>
                <div
                  className={`flex items-center justify-start gap-3 py-5 text-gray-400 hover:text-white ${
                    location.pathname === menu?.link ? "text-white " : ""
                  }`}
                >
                  {React.createElement(menu?.icon)}
                  <h2 className="overflow-hidden font-medium text-[18px]">
                    {menu?.name}
                  </h2>
                </div>
              </Link>
            ))
          : sideBarNavigation?.map((menu, i) => (
              <Link key={i} to={menu?.link}>
                <div
                  className={`text-xl text-gray-400 hover:text-white ${
                    location.pathname === menu?.link
                      ? "text-slate-900 bg-neutral-300 hover:text-slate-900 p-1 rounded-full"
                      : ""
                  }`}
                >
                  {React.createElement(menu?.icon)}
                </div>
              </Link>
            ))}

        {shouldShowBoardHeading ? (
          <div className="mt-72">
            <h1 className="text-md text-gray-400">Help</h1>
            <h1 className="text-md text-gray-400 mt-5">Contact</h1>
          </div>
        ) : (
          <div className="-rotate-90 flex overflow-hidden gap-3">
            <h1 className="text-md text-gray-400">Help</h1>
            <h1 className="text-md text-gray-400">Contact</h1>
          </div>
        )}

        {/* Icon */}
        {isSmallScreen && (
          <div className="absolute right-10 bottom-10 bg-black rounded-full cursor-pointer z-50">
            <BiChevronRight
              className="text-3xl text-white"
              onClick={() => setOpen(!open)}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;
