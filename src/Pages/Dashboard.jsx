import { ProductsChart, Schedule, Graph, Grid } from "../components";

const Dashboard = () => {
  const generateRandomData = () => {
    const dataPoints = [];
    for (let i = 0; i < 6; i++) {
      dataPoints.push(Math.floor(Math.random() * 500) + 100);
    }
    return dataPoints;
  };

  const data = {
    xAxis: ["Week -3", "Week -2", "Week -1", "Week 0", "Week 1", "Week 2"],
    yAxis1: generateRandomData(),
    yAxis2: generateRandomData(),
  };

  return (
    <div className="flex flex-col">
      {/* Grid Layouts */}
      <div className="mt-5">
        <Grid />
      </div>

      {/* Graph  */}
      <div className="bg-white mt-10 rounded-3xl shadow-xl  hidden lg:block">
        <Graph data={data} />
      </div>

      {/* Product Charts */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 w-full gap-2 md:gap-10">
        <div className="bg-white rounded-3xl shadow-xl h-auto mb-8 sm:mb-0 lg:mb-8 p-10 hover:scale-95 transition-all duration-500 cursor-pointer">
          <ProductsChart />
        </div>

        {/* Schedule div */}

        <div className="bg-white rounded-3xl shadow-xl h-auto mb-8 p-10 hover:scale-95 transition-all duration-500 cursor-pointer">
          <Schedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
