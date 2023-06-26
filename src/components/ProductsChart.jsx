import React from "react";
import Chart from "react-apexcharts";
import { BiChevronDown } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";

const ProductsChart = () => {
  // Data for the pie chart
  const chartOptions = {
    labels: ["Basic tees", "Custom short pants", "Hoodies"],
    series: [55, 31, 14],
    colors: ["#98D89E", "#F6DC7D", "#EE8484"],
    legend: {
      show: false,
    },
  };

  return (
    <div>
      <div className="flex justify-between ">
        <h1 className="text-xl font-bold">Top Products</h1>
        <div className="flex justify-center items-center gap-3">
          <p className="text-sm text-gray-500 hidden md:block">
            May -June 2021
          </p>
          <BiChevronDown className="text-xl text-gray-500" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-around">
        <Chart
          options={chartOptions}
          series={chartOptions.series}
          type="pie"
          width="280"
          className="mt-5"
        />

        {/* Basic Tees */}
        <div className="flex flex-col items-start mt-5 ">
          <div>
            <div className="flex items-center gap-3">
              <BsCircleFill className="text-xs text-[#98D89E]" />
              <p className="text-md font-bold">Basic Tees</p>
            </div>
            <p className="text-sm ml-6">55%</p>
          </div>

          {/* Short pants */}
          <div className="mt-3">
            <div className="flex items-center gap-3 ">
              <BsCircleFill className="text-xs text-[#F6DC7D]" />
              <p className="text-md font-bold">Custom Shorts</p>
            </div>
            <p className="text-sm ml-6">31%</p>
          </div>

          {/* Hoodies */}
          <div className="mt-3">
            <div className="flex items-center gap-3">
              <BsCircleFill className="text-xs text-[#EE8484]" />
              <p className="text-md font-bold">Super Hoodies</p>
            </div>
            <p className="text-sm ml-6">14%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsChart;
