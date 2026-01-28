
import React from 'react';
import { DollarSign, Users, TrendingUp, Activity, Plus } from 'lucide-react';
import { StatCard } from './StatCard';
import { OrderTable } from './OrderTable';
import { ProductForm } from './ProductForm';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const salesData = [
  { name: 'Mon', sales: 4000 },
  { name: 'Tue', sales: 3000 },
  { name: 'Wed', sales: 5000 },
  { name: 'Thu', sales: 2780 },
  { name: 'Fri', sales: 1890 },
  { name: 'Sat', sales: 2390 },
  { name: 'Sun', sales: 3490 },
];

export const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#212934]">Fern Root</h1>
          <p className="text-[#212934]/60">Nurture your ecosystem with real-time insights.</p>
        </div>
        <button className="flex items-center justify-center space-x-2 bg-[#4d8b5f] hover:bg-[#3a6b47] text-white px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#4d8b5f]/30 font-bold active:scale-95">
          <Plus size={20} />
          <span>New Botanical Asset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard name="Total Growth" value="$128,430" change="+12.5%" isPositive={true} icon={DollarSign} />
        <StatCard name="Cycle Velocity" value="4,320" change="+5.4%" isPositive={true} icon={TrendingUp} />
        <StatCard name="Active Roots" value="1,202" change="-2.1%" isPositive={false} icon={Users} />
        <StatCard name="Success Rate" value="3.42%" change="+0.2%" isPositive={true} icon={Activity} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white p-6 rounded-xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h2 className="text-xl font-bold mb-8">Ecosystem Flow</h2>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={salesData}>
                  <defs>
                    <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#4d8b5f" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#4d8b5f" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#212934', opacity: 0.4, fontSize: 12}} dy={10} />
                  <YAxis hide />
                  <Tooltip contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 40px rgba(0,0,0,0.1)'}} />
                  <Area type="monotone" dataKey="sales" stroke="#4d8b5f" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-x-auto">
            <h2 className="text-xl font-bold mb-6">Recent Logistics</h2>
            <OrderTable />
          </div>
        </div>

        <div className="lg:col-span-4 space-y-8">
          <div className="bg-white p-6 rounded-xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h2 className="text-xl font-bold mb-6">Asset Curator</h2>
            <ProductForm />
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h2 className="text-xl font-bold mb-6">Fern Stream</h2>
            <div className="space-y-6">
              {[
                { time: '2m ago', title: 'New Member Registered', desc: 'Alice Fern joined the network.' },
                { time: '15m ago', title: 'Restock Alert', desc: 'Botanical watch reached threshold.' },
              ].map((activity, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="relative">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#4d8b5f] mt-1.5 shadow-[0_0_10px_#4d8b5f]"></div>
                    {i !== 1 && <div className="absolute top-4 left-1 w-[1px] h-full bg-[#212934]/10"></div>}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{activity.title}</h4>
                    <p className="text-xs text-[#212934]/50 mt-1">{activity.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
