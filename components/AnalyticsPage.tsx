
import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, Activity, MoreHorizontal, Download } from 'lucide-react';
import { StatCard } from './StatCard';
import { OrderTable } from './OrderTable';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { motion } from 'framer-motion';

const salesData = [
  { name: 'Mon', sales: 4000, growth: 2400 },
  { name: 'Tue', sales: 3000, growth: 1398 },
  { name: 'Wed', sales: 5000, growth: 9800 },
  { name: 'Thu', sales: 2780, growth: 3908 },
  { name: 'Fri', sales: 1890, growth: 4800 },
  { name: 'Sat', sales: 2390, growth: 3800 },
  { name: 'Sun', sales: 3490, growth: 4300 },
];

const categoryDistribution = [
  { name: 'Watches', value: 400 },
  { name: 'Shoes', value: 300 },
  { name: 'Accessories', value: 300 },
];

const COLORS = ['#4d8b5f', '#212934', '#a3cfbb'];

export const AnalyticsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Weekly');
  const tabs = ['Weekly', 'Monthly', 'Yearly'];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#212934]">Ecosystem Pulse</h1>
          <p className="text-[#212934]/60">Organic metrics for Fern brand performance.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center space-x-2 bg-white border border-[#212934]/10 hover:bg-[#212934]/5 px-4 py-2.5 rounded-xl transition-all font-bold text-sm">
            <Download size={18} />
            <span>Dataset Export</span>
          </button>
          <button className="flex items-center space-x-2 bg-[#4d8b5f] hover:bg-[#3a6b47] text-white px-6 py-2.5 rounded-xl transition-all shadow-lg shadow-[#4d8b5f]/20 font-bold text-sm">
            <span>Refresh Nodes</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard name="Gross Revenue" value="$128,430" change="+12.5%" isPositive={true} icon={DollarSign} />
        <StatCard name="Growth Velocity" value="4,320" change="+5.4%" isPositive={true} icon={TrendingUp} />
        <StatCard name="Total Members" value="1,202" change="-2.1%" isPositive={false} icon={Users} />
        <StatCard name="Root Success" value="3.42%" change="+0.2%" isPositive={true} icon={Activity} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">Revenue Flow</h2>
            <div className="relative flex bg-[#212934]/5 p-1 rounded-xl">
              {tabs.map((tab) => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 px-4 py-1.5 text-xs font-bold rounded-lg transition-colors duration-200 ${activeTab === tab ? 'text-white' : 'text-[#212934]/40 hover:text-[#212934]/60'}`}
                >
                  {activeTab === tab && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-[#4d8b5f] rounded-lg shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4d8b5f" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#4d8b5f" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#212934', opacity: 0.4, fontSize: 12}} dy={10} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{borderRadius: '16px', border: 'none', boxShadow: '0 20px 50px rgba(0,0,0,0.12)', padding: '12px'}}
                />
                <Area type="monotone" dataKey="sales" stroke="#4d8b5f" strokeWidth={4} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Canopy Split</h2>
            <button className="p-2 hover:bg-[#212934]/5 rounded-lg transition-colors">
              <MoreHorizontal size={20} className="text-[#212934]/40" />
            </button>
          </div>
          <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="text-2xl font-bold">1,000</p>
                <p className="text-[10px] text-[#212934]/40 uppercase font-bold tracking-widest">Total SKU</p>
              </div>
            </div>
          </div>
          <div className="mt-6 space-y-3">
            {categoryDistribution.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: COLORS[i] }}></div>
                  <span className="text-sm font-medium text-[#212934]/60">{item.name}</span>
                </div>
                <span className="text-sm font-bold">{((item.value/1000)*100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-x-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold">Recent Logistics</h2>
          <button className="text-[#4d8b5f] text-sm font-bold hover:underline">Full Transaction List</button>
        </div>
        <OrderTable />
      </div>
    </div>
  );
};
