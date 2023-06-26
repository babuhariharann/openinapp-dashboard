import { Outlet } from "react-router-dom";

import { Sidebar, Header } from "../components";

const Layout = () => {
  return (
    <div className="flex h-screen w-screen bg-neutral-100 overflow-hidden px-5 md:px-10 py-5 gap-5 transition-all duration-300">
      {/* Sidebar Component */}

      <div className="flex">
        <Sidebar />
      </div>

      {/* Header Component */}

      <div className="w-full mx-2 md:mx-5">
        <Header />
        <div
          className="overflow-y-scroll custom-scrollbar"
          style={{ height: "calc(100vh - 80px)" }}
        >
          {/* Routes Components */}

          <div className="scroll-content mt-5 font-semibold">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
