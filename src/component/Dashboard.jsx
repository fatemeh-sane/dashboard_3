import { IoStatsChart, IoPeople, IoTrophy, IoRibbon } from "react-icons/io5";
import ChartOne from "./ChartOne.jsx";
import ChartTwo from "./ChartTwo.jsx";
import ChartThree from "./ChartThree.jsx";
import ChartFour from "./ChartFour.jsx";

const statItems = [
  { id: 1, title: "تعداد کل تیم‌ها", number: "۳۰۰,۰۰۰", icon: IoStatsChart },
  { id: 2, title: "تعداد کاربران", number: "۱۵۰,۰۰۰", icon: IoPeople },
  { id: 3, title:"تعداد پروژه های برتر", number: "۵۰,۰۰۰", icon: IoTrophy },
  { id: 4, title: "مدال‌های کسب شده", number: "۸۵,۰۰۰", icon: IoRibbon },
];

const Dashboard = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {statItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="p-6 flex items-center gap-4 bg-primary shadow-md rounded-xl"
            >
              <div className="flex-shrink-0 flex bg-subPurple items-center justify-center text-white w-12 h-12 rounded-md">
                <Icon className="text-xl" />
              </div>
              <div className="flex flex-col items-start min-w-0">
                <div className="text-xl sm:text-2xl text-white font-bold truncate">
                  {item.number}
                </div>
                <div className="text-sm sm:text-base text-white opacity-90 truncate">
                  {item.title}
                </div>
              </div>
            </div>
          );
        })}
      </div>

    
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="shadow rounded-xl overflow-hidden">
          <ChartOne />
        </div>
        <div className="shadow rounded-xl overflow-hidden">
          <ChartTwo />
        </div>
        <div className="shadow p-4 sm:p-6 rounded-xl">
          <ChartThree />
        </div>
        <div className="shadow p-4 sm:p-6 rounded-xl">
          <ChartFour />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
