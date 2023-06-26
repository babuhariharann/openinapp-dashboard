import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Schedule = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-xl font-bold">Today's Schedule</h1>
        <div className="flex justify-center items-center gap-3">
          <p className="text-sm text-gray-500 hidden md:block">See all</p>
          <BiChevronRight className="text-xl text-gray-500" />
        </div>
      </div>

      <div className="grid grid-cols-1">
        <div className=" border-green-500 border-l-[5px] mt-10">
          <h1 className="ml-3 text-sm font-bold text-gray-500 md:text-md lg:text-lg">
            Meeting with suppliers from Kuta Bali
          </h1>
          <p className="ml-3 text-sm text-gray-400 mt-1">14.00 - 15.00</p>
          <p className="ml-3 text-sm text-gray-400 mt-1">
            At Sunset Road, Kuta, Bali
          </p>
        </div>
      </div>

      <div>
        <div className=" border-indigo-500 border-l-[5px] mt-8">
          <h1 className="ml-3 text-sm font-bold text-gray-500">
            Check operation at Giga Factory 1
          </h1>
          <p className="ml-3 text-sm text-gray-400">18.00 - 20.00</p>
          <p className="ml-3 text-sm text-gray-400">At central Jakarta</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
