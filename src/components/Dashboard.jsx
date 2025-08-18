import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 flex items-center gap-3 border-b">
          <div
            className="w-10 h-10 bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCKqwgrH0rTo0IIoGgtM_S3zrGm2ilIA4D-CuIXVZpy-2vpfa9BxMYTn9-NBTE5YBAFuqZyZuH-qLjzbFUgbd7ZBj6R59mZAKY6KLTN8Nfj-fHRQXVL-1XrS8RmnCki4ffq5mRG5e2DbPSXBT-Q4F8ksJ_wIRsS2raDi-fKKp6LanUNgZNsqIUxNL0XTLR8vfXgvnM9AH92SAPnrXeoDddIv_wxvzFfeBJOEqU96Zz26ETDoSkUd59CDw_0j9jWvUpIPttAWq-h")',
            }}
          ></div>
          <h1 className="text-xl font-bold">InvestSmart</h1>
        </div>

        {/* Nav menu */}
        <nav className="flex-1 p-4 space-y-3">
          {[
            { label: "Dashboard", active: true },
            { label: "Portfolio" },
            { label: "Transactions" },
            { label: "Market" },
            { label: "Reports" },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${
                item.active
                  ? "bg-blue-100 text-blue-600 font-semibold"
                  : "hover:bg-gray-100"
              }`}
            >
              <span className="w-5 h-5 bg-gray-400 rounded"></span>
              <span>{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 space-y-8">
        <header className="text-2xl font-semibold">Welcome back, Alex 👋</header>

        {/* Portfolio value */}
        <div className="bg-white shadow rounded-2xl p-6 w-72">
          <p className="text-gray-500">Total Portfolio Value</p>
          <p className="text-2xl font-bold text-green-600">$125,450</p>
        </div>

        {/* Time Selector */}
        <div className="flex gap-4">
          {["Daily", "Weekly", "Monthly"].map((t, i) => (
            <label
              key={i}
              className={`cursor-pointer px-4 py-2 rounded-lg border ${
                i === 0 ? "bg-blue-600 text-white border-blue-600" : "bg-white"
              }`}
            >
              {t}
              <input type="radio" name="timeperiod" className="hidden" />
            </label>
          ))}
        </div>

        {/* Performance */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-center">
            <p className="font-semibold">Portfolio Performance</p>
            <p className="text-green-600 font-bold">+2.5%</p>
          </div>

          <div className="mt-2 text-sm text-gray-500">Today: +2.5%</div>

          {/* Chart */}
          <div className="mt-4">
            <div className="w-full h-32 bg-gradient-to-t from-blue-100 to-transparent rounded"></div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </div>
          </div>
        </div>

        {/* Asset Allocation */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Asset Allocation</h2>
          <div className="flex gap-6">
            {[
              { label: "Stocks", height: "h-40 bg-blue-500" },
              { label: "Crypto", height: "h-10 bg-purple-500" },
              { label: "ETFs", height: "h-10 bg-green-500" },
              { label: "Bonds", height: "h-20 bg-yellow-500" },
            ].map((a, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className={`w-8 ${a.height} rounded-lg`}></div>
                <p className="mt-2 text-sm">{a.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market News */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Market News</h2>
          <div className="grid grid-cols-2 gap-6">
            {[
              {
                title: "Tech Stocks Surge Amidst New Product Launches",
                desc: "The tech sector is experiencing a significant boost as several major companies announce innovative product releases.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5FP7HmY76cjyV69YCuEC81cgn41m-6iM2UJ9KV-YPCFfM7V3IM-n7b18XtZM44s2480zFp56gYwkm-n2eZ-KcPblcGUEj3rUNAITMTLyyYBZ6dOkNTXy9YEb_YuTToi5GtkBr_ujgZc02YNjc3MS5BUVj8XoaAW2WUf9HJnrUxyTkZJkmKjB0pQJrOQLvaMo14n5dGPJC8RX3IsGYSyqCzRUdyoQss9Ma_gtw9cv_cxZLPchjVOpnJZ4NAlF4ftmvzT8xGohI",
              },
              {
                title: "Cryptocurrency Market Sees Volatile Trading",
                desc: "The cryptocurrency market is currently experiencing high volatility with significant price fluctuations across various coins.",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTgy38VJOseFzjYYNEqQvLT42M8PGtGsowZQWvTN2uAqM3NESmOhfS8fVHGQ5zj6hGVxUW5EZ_tXpfxJtZpSP76mEwO72zPfi4XXnpC_9MZklPIOy_87MswRozJ804Y8YEjo6T2L9DkQuDd_nbUgRoaE_ox7W8JPMUylL4by1Ya-es7Xfi4FYZgnfq95L_AJcxH0oHBHlwctyAGOdWkawv6CbJclOWlNGtX2VNybbkzbdMZViZEMC7BQ9GUWQaZdqwJvNeqYTH",
              },
            ].map((n, i) => (
              <div
                key={i}
                className="bg-white shadow rounded-2xl overflow-hidden flex"
              >
                <div className="p-4 flex-1">
                  <h3 className="font-semibold">{n.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{n.desc}</p>
                </div>
                <div
                  className="w-32 bg-cover bg-center"
                  style={{ backgroundImage: `url(${n.img})` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
