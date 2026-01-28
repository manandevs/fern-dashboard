
import React from 'react';
import { ShoppingBag, Heart, Star, MapPin, Calendar, Briefcase, ChevronRight, Activity, Camera, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const activities = [
  { id: 1, type: 'order', text: 'Confirmed batch #FERN-9921', time: '2 hours ago', icon: ShoppingBag, color: 'text-[#4d8b5f] bg-[#4d8b5f]/10' },
  { id: 2, type: 'review', text: 'Reviewed "Fern Signature Watch"', time: 'Yesterday', icon: Star, color: 'text-amber-500 bg-amber-500/10' },
  { id: 3, type: 'wishlist', text: 'Added 4 items to "Autumn Growth"', time: '3 days ago', icon: Heart, color: 'text-red-500 bg-red-500/10' },
  { id: 4, type: 'security', text: 'Fern Node login from Oslo', time: 'Oct 20, 2023', icon: BadgeCheck, color: 'text-blue-500 bg-blue-500/10' },
  { id: 5, type: 'system', text: 'Updated ecological policy data', time: 'Oct 15, 2023', icon: Activity, color: 'text-purple-500 bg-purple-500/10' },
];

export const ProfilePage: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-10 pb-16 font-['Roboto']"
    >
      <div className="bg-white rounded-[2.5rem] border border-[#212934]/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] overflow-hidden">
        <div className="h-56 bg-gradient-to-br from-[#4d8b5f] via-[#3a6b47] to-[#212934] relative">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
        </div>
        <div className="px-10 pb-10 flex flex-col lg:flex-row items-end lg:items-center justify-between -mt-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-end lg:items-center space-y-6 lg:space-y-0 lg:space-x-10">
            <div className="relative group">
              <img 
                src="https://i.pravatar.cc/150?u=sophia" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-[3rem] border-[10px] border-white shadow-2xl relative z-10 object-cover"
                alt="Profile"
              />
              <div className="absolute inset-0 bg-black/40 rounded-[3rem] border-[10px] border-white opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center cursor-pointer">
                <Camera className="text-white" size={28} />
              </div>
            </div>
            <div className="text-left pb-4">
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-4xl font-bold text-[#212934]">Sophia Fern</h1>
                <div className="p-1 bg-[#4d8b5f] text-white rounded-full"><BadgeCheck size={18} /></div>
              </div>
              <p className="text-[#212934]/40 font-medium text-lg italic">"Growth is found in the smallest details."</p>
              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#212934]/60 bg-[#212934]/5 px-4 py-2 rounded-full border border-[#212934]/5">
                  <MapPin size={14} className="text-[#4d8b5f]" /> <span>Oslo, NO</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-[#212934]/60 bg-[#212934]/5 px-4 py-2 rounded-full border border-[#212934]/5">
                  <Briefcase size={14} className="text-[#4d8b5f]" /> <span>System Architect</span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-bold text-[#212934]/60 bg-[#212934]/5 px-4 py-2 rounded-full border border-[#212934]/5">
                  <Calendar size={14} className="text-[#4d8b5f]" /> <span>Roots since '21</span>
                </div>
              </div>
            </div>
          </div>
          <button className="bg-[#4d8b5f] hover:bg-[#3a6b47] text-white px-8 py-4 rounded-2xl font-bold shadow-xl shadow-[#4d8b5f]/20 transition-all active:scale-95 mb-4 lg:mb-0">
            Edit Identity
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          <div className="bg-white p-10 rounded-[2.5rem] border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h2 className="text-2xl font-bold mb-8">Ecosystem Philosophy</h2>
            <p className="text-lg text-[#212934]/50 leading-relaxed font-light">
              I lead the strategic architectural direction of the Fern Ecosystem, focusing on organic scalability and performance. With a background in sustainable data modeling, I ensure our systems are as resilient and interconnected as the natural world.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[2.5rem] border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold">Recent Pulses</h2>
              <button className="text-[#4d8b5f] text-sm font-bold hover:underline px-4 py-2 bg-[#4d8b5f]/5 rounded-xl">Full Audit Log</button>
            </div>
            <div className="space-y-12 relative">
              <div className="absolute left-7 top-2 bottom-2 w-[2px] bg-[#212934]/5"></div>
              {activities.map((item) => (
                <div key={item.id} className="relative flex space-x-8 z-10 group">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg shadow-black/5 transition-transform group-hover:scale-110 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#212934]/5 pb-8">
                    <div>
                      <p className="text-base font-bold text-[#212934] group-hover:text-[#4d8b5f] transition-colors">{item.text}</p>
                      <p className="text-sm text-[#212934]/40 font-medium">{item.time}</p>
                    </div>
                    <button className="p-3 hover:bg-[#212934]/5 rounded-2xl text-[#212934]/20 hover:text-[#212934] transition-all">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-10">
          <div className="grid grid-cols-1 gap-6">
            {[
              { label: 'Active Records', value: '1,420', icon: ShoppingBag, color: 'bg-[#4d8b5f]' },
              { label: 'Saved Assets', value: '24', icon: Heart, color: 'bg-red-500' },
              { label: 'System Feedback', value: '89', icon: Star, color: 'bg-amber-500' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-8 rounded-[2rem] border border-[#212934]/5 shadow-sm hover:shadow-xl transition-all group">
                <div className="flex items-center space-x-6">
                  <div className={`w-16 h-16 ${stat.color} text-white rounded-3xl flex items-center justify-center shadow-2xl shadow-black/10 group-hover:rotate-6 transition-transform`}>
                    <stat.icon size={32} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-[#212934]">{stat.value}</h3>
                    <p className="text-[11px] font-bold text-[#212934]/30 uppercase tracking-[0.2em]">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#212934] p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-40 h-40 bg-[#4d8b5f]/20 rounded-full blur-3xl -mr-20 -mt-20 transition-all group-hover:bg-[#4d8b5f]/40"></div>
             <h3 className="text-xl font-bold mb-6">Fern Network</h3>
             <div className="flex items-center space-x-4 mb-10">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <Star className="text-[#4d8b5f] fill-[#4d8b5f]" size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold">Verdant Access</p>
                  <p className="text-sm text-white/40">Reputation: 12,450 XP</p>
                </div>
             </div>
             <div className="space-y-3">
                <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-white/60">
                  <span>Growth to Canopy</span>
                  <span className="text-[#4d8b5f]">85%</span>
                </div>
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-[#4d8b5f] rounded-full shadow-[0_0_15px_rgba(77,139,95,0.5)]" 
                  />
                </div>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
