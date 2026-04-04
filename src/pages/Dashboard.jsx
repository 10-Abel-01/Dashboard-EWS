import React from "react";
import {
  Home,
  BarChart3,
  Settings,
  HelpCircle,
  Sun,
  Battery,
  Zap,
  MapPin,
} from "lucide-react";
import Panel from "../assets/panel.png";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {/* <aside className="w-20 bg-white border-r border-gray-200 flex flex-col items-center py-8 gap-8">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black italic">
          S
        </div>`
        <nav className="flex flex-col gap-6">
          <Home size={22} className="text-indigo-600 cursor-pointer" />
          <BarChart3
            size={22}
            className="text-gray-400 hover:text-indigo-600 cursor-pointer transition-colors"
          />
          <Settings
            size={22}
            className="text-gray-400 hover:text-indigo-600 cursor-pointer"
          />
        </nav>
      </aside> */}

      <main className="flex-1 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              label: "Solar Efficiency",
              value: "60%",
              color: "text-emerald-500",
            },
            {
              label: "Power Generation",
              value: "6.5 Kw",
              color: "text-orange-500",
            },
            {
              label: "Energy Consumed",
              value: "12 KWh",
              color: "text-rose-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-sm flex justify-between items-center"
            >
              <div>
                <p className="text-sm font-bold text-gray-400 mb-1">
                  {item.label}
                </p>
                <h3 className="text-3xl font-black">{item.value}</h3>
              </div>
              <div className="w-20 h-12 bg-gray-50 rounded-t-full border-t-4 border-indigo-500 flex items-end justify-center pb-1">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-ping" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm relative overflow-hidden">
            <div className="flex justify-between items-start mb-12">
              <div>
                <h2 className="text-4xl font-black mb-2">80.88</h2>
                <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                  Power Usage
                </p>
                <h3 className="text-2xl font-bold mt-4">
                  12.35{" "}
                  <span className="text-sm font-normal text-gray-400">Kw</span>
                </h3>
              </div>
              <img src={Panel} alt="Solar Panel" className="w-48 h-auto drop-shadow-2xl" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase">
                  Capacity
                </p>
                <p className="font-bold">210 kwh</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                <p className="text-[10px] font-bold text-emerald-600 uppercase">
                  Yield
                </p>
                <p className="font-bold">178 kwh</p>
              </div>
            </div>
          </div>

          {/* MIDDLE RIGHT: Consumption Detail */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm">
            <h3 className="font-bold text-xl mb-6">Home Energy Consumption</h3>
            <div className="space-y-6">
              <div className="h-2 w-full bg-gray-100 rounded-full flex overflow-hidden">
                <div className="w-[50%] bg-blue-500" />
                <div className="w-[16%] bg-emerald-400" />
                <div className="w-[34%] bg-orange-400" />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" /> Meter
                    Power
                  </span>
                  <span className="font-bold">0.8 kw</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full" />{" "}
                    Meter Energy
                  </span>
                  <span className="font-bold">2.656 kw</span>
                </div>
              </div>

              {/* Divider & Slider Sim */}
              <div className="pt-6 border-t border-gray-100">
                <p className="text-xs font-bold text-gray-400 uppercase mb-4">
                  Tariff Settings
                </p>
                <input type="range" className="w-full accent-indigo-600" />
              </div>
            </div>
          </div>

          {/* BOTTOM ROW: Graph (Full Width) */}
          <div className="lg:col-span-2 bg-white p-8 rounded-[2.5rem] shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold text-xl">Energy Consumption</h3>
              <div className="bg-gray-100 p-1 rounded-xl flex gap-2">
                <button className="px-4 py-1 bg-white shadow-sm rounded-lg text-xs font-bold">
                  Yearly
                </button>
                <button className="px-4 py-1 text-xs font-bold text-gray-400">
                  Monthly
                </button>
              </div>
            </div>
            <div className="h-64 bg-gray-50 rounded-3xl border border-dashed border-gray-200 flex items-center justify-center text-gray-400 italic">
              {/* Sini tempat Recharts LineChart */}
              Interactive Chart Placeholder
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
