import React from "react";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-gray-900">Advanced Analytics</h1>
          <p className="text-gray-500 text-sm mt-1 font-medium">Analisis mendalam performa energi dan efisiensi sistem.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-gray-100 rounded-xl text-xs font-bold text-gray-600 shadow-sm hover:bg-gray-50 transition-all">
            Last 7 Days
          </button>
          <button className="px-4 py-2 bg-gray-950 rounded-xl text-xs font-bold text-white shadow-lg shadow-gray-200 hover:bg-gray-800 transition-all">
            Generate Report
          </button>
        </div>
      </div>
    );
};
export default Header;