
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
}

export const StatCard: React.FC<StatCardProps> = ({ name, value, change, isPositive, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:scale-[1.02] transition-transform duration-300 group cursor-default relative overflow-hidden">
      <svg className="absolute bottom-0 left-0 w-full h-12 opacity-5 transition-opacity group-hover:opacity-10" viewBox="0 0 100 20">
        <path 
          d="M0 20 Q 25 5 50 15 T 100 10" 
          fill="none" 
          stroke="#4d8b5f" 
          strokeWidth="2" 
        />
      </svg>

      <div className="flex items-center justify-between mb-4 relative">
        <div className="p-3 bg-[#4d8b5f]/10 rounded-xl group-hover:bg-[#4d8b5f] transition-colors duration-300">
          <Icon className="text-[#4d8b5f] group-hover:text-white transition-colors duration-300" size={24} />
        </div>
        <div className={`flex items-center space-x-1 text-xs font-bold ${isPositive ? 'text-[#4d8b5f]' : 'text-red-500'}`}>
          <span>{change}</span>
          <svg className={`w-3 h-3 ${!isPositive ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 15l7-7 7 7" />
          </svg>
        </div>
      </div>
      
      <div className="relative">
        <p className="text-[#212934]/40 text-sm font-medium uppercase tracking-wider mb-1">{name}</p>
        <h3 className="text-2xl font-bold text-[#212934] tracking-tight">{value}</h3>
      </div>
    </div>
  );
};
