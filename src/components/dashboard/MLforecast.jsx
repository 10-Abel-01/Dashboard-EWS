import React from 'react';
import { BrainCircuit, TrendingUp } from 'lucide-react';

const MLforecast = () => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <BrainCircuit size={20} className="text-indigo-600" /> AI Traffic Forecast
        </h3>
        <span className="text-[10px] bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-black">LSTM MODEL ACTIVE</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <p className="text-sm text-gray-500 leading-relaxed">
            Berdasarkan data cuaca dan produksi 7 hari terakhir, sistem memprediksi lonjakan daya pada pukul 11:30 Besok.
          </p>
          <div className="p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
            <p className="text-[10px] font-black text-indigo-400 uppercase">Estimated Yield</p>
            <p className="text-xl font-black text-indigo-900">14.2 KWh <span className="text-xs font-normal text-emerald-500">+5.2%</span></p>
          </div>
        </div>
        
        {/* Placeholder untuk Mini Chart */}
        <div className="h-32 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center">
          <TrendingUp className="text-gray-300 animate-pulse" size={32} />
        </div>
      </div>
    </div>
  );
};

export default MLforecast;