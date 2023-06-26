import React from "react";

import { datas } from "../data/data";
const Grid = () => {
  return (
    <div className="sm:grid-cols-2 lg:grid-cols-4 grid grid-cols-1 gap-5 md:gap-8 lg:gap-10  ">
      {datas?.map((item, i) => (
        <div
          key={i}
          style={{ backgroundColor: item.background }}
          className="w-full md:w-[350px]h-[100px] md:h-[150px] rounded-3xl px-10 py-5 shadow-md relative hover:ease-in-out hover:scale-95 transition-all duration-500 cursor-pointer"
        >
          <div className="absolute top-5 right-5 text-3xl">{<item.icon />}</div>
          <div className="mt-8">
            <h1 className="text-md font-medium ">{item.title}</h1>
            <h1 className="text-2xl font-bold mt-2">{item.value}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Grid;
