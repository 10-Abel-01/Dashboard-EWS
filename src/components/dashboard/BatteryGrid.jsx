import React from 'react';
import { Battery } from 'lucide-react';

const BatteryGrid = () => {
  const batteries = [
    { id: 1, level: 85, status: "Standby", session: "Pagi", color: "bg-emerald-500" },
    { id: 2, level: 45, status: "Active Charging", session: "Siang", color: "bg-amber-500" },
    { id: 3, level: 15, status: "Low", session: "Sore", color: "bg-rose-500" },
  ];

  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
      <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
        <Battery size={20} className="text-emerald-600" /> Battery Management
      </h3>
      <div className="space-y-8">
        {batteries.map((bat) => (
          <div key={bat.id} className="relative">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-black text-gray-700">Unit {bat.id} <span className="text-[10px] text-gray-400 font-normal">({bat.session})</span></span>
              <span className="text-sm font-bold text-gray-500">{bat.level}%</span>
            </div>
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden border border-gray-50">
              <div 
                className={`h-full ${bat.color} transition-all duration-1000 shadow-inner`} 
                style={{ width: `${bat.level}%` }} 
              />
            </div>
            <p className="text-[10px] mt-2 font-bold uppercase text-gray-400 tracking-tighter">{bat.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BatteryGrid;