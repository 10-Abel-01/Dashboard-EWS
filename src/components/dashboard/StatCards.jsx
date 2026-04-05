import React from 'react';
import { Zap, Activity, Sun, Thermometer } from 'lucide-react';

const StatCards = () => {
  const stats = [
    { label: "Total Power", value: "45.2 W", icon: <Zap className="text-yellow-500" />, bg: "bg-yellow-50" },
    { label: "Voltage", value: "12.8 V", icon: <Activity className="text-blue-500" />, bg: "bg-blue-50" },
    { label: "Current", value: "3.5 A", icon: <Sun className="text-orange-500" />, bg: "bg-orange-50" },
    { label: "Temp Panel", value: "32°C", icon: <Thermometer className="text-rose-500" />, bg: "bg-rose-50" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-4`}>
            {stat.icon}
          </div>
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{stat.label}</p>
          <h3 className="text-2xl font-black text-gray-950 mt-1">{stat.value}</h3>
        </div>
      ))}
    </div>
  );
};

export default StatCards;