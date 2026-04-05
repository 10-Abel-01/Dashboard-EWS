import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend 
} from 'recharts';
import { Activity, Zap } from 'lucide-react';

// data dummy untuk chart
const data = [
  { time: '09:00', actual: 40, forecast: 42 },
  { time: '10:00', actual: 55, forecast: 58 },
  { time: '11:00', actual: 85, forecast: 80 },
  { time: '12:00', actual: 95, forecast: 92 },
  { time: '13:00', actual: 80, forecast: 85 },
  { time: '14:00', actual: 65, forecast: 70 },
  { time: '15:00', actual: 45, forecast: 50 },
];

const PowerChart = () => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 h-[450px] flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="text-xl font-black text-gray-950 flex items-center gap-2">
            <Activity size={22} className="text-emerald-500" /> 
            Real-time Power Absorption
          </h3>
          <p className="text-gray-400 text-xs font-medium mt-1">
            Monitoring penyerapan daya (Watt) vs Prediksi AI
          </p>
        </div>
        <div className="flex gap-2">
           <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-emerald-700 uppercase tracking-tighter">Live Sensor</span>
           </div>
        </div>
      </div>

      <div className="flex-1 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorActual" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorForecast" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: 12}}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#9ca3af', fontSize: 12}}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
            />
            <Legend verticalAlign="top" align="right" iconType="circle" height={36}/>
            
            {/* Garis Prediksi AI (Putus-putus) */}
            <Area 
              type="monotone" 
              dataKey="forecast" 
              name="AI Prediction"
              stroke="#6366f1" 
              strokeWidth={3}
              strokeDasharray="5 5"
              fillOpacity={1} 
              fill="url(#colorForecast)" 
            />

            {/* Garis Data Asli Sensor (Tebal) */}
            <Area 
              type="monotone" 
              dataKey="actual" 
              name="Actual Power (W)"
              stroke="#10b981" 
              strokeWidth={4}
              fillOpacity={1} 
              fill="url(#colorActual)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-gray-50 pt-6">
        <div className="flex gap-6">
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Peak Today</p>
            <p className="text-lg font-black text-gray-950">95.4 W</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase">Average</p>
            <p className="text-lg font-black text-gray-950">62.1 W</p>
          </div>
        </div>
        <button className="bg-gray-950 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors flex items-center gap-2">
          <Zap size={14} /> View Detailed Log
        </button>
      </div>
    </div>
  );
};

export default PowerChart;