
import React from 'react';
import { 
  DollarSign, 
  TrendingUp, 
  Users, 
  Star, 
  Plus, 
  Briefcase, 
  CheckCircle, 
  Clock, 
  ArrowRight, 
  AlertTriangle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const SectionHeader: React.FC<{ title: string }> = ({ title }) => (
  <div className="flex items-center space-x-4 mb-6">
    <h2 className="text-xl font-bold text-[#212934] whitespace-nowrap">{title}</h2>
    <div className="h-[1px] w-full bg-[#212934]/5"></div>
  </div>
);

const CardWrapper: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <motion.div 
    whileHover={{ y: -8 }}
    className={`bg-white rounded-2xl border border-[#212934]/5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] p-6 transition-all duration-300 hover:shadow-xl hover:border-[#59ab6e]/20 ${className}`}
  >
    {children}
  </motion.div>
);

export const CardGallery: React.FC = () => {
  return (
    <div className="space-y-12 pb-24">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#212934]">Component Showcase</h1>
        <p className="text-[#212934]/60">A curated collection of professional UI patterns and layouts.</p>
      </div>

      {/* Statistics Section */}
      <section>
        <SectionHeader title="Statistics & Metrics" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Variant A: Sparkline */}
          <CardWrapper className="relative overflow-hidden group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-[#59ab6e]/10 rounded-xl group-hover:bg-[#59ab6e] transition-colors duration-300">
                <DollarSign className="text-[#59ab6e] group-hover:text-white" size={24} />
              </div>
              <span className="text-xs font-bold text-[#59ab6e] bg-emerald-50 px-2 py-1 rounded-lg">+12.5%</span>
            </div>
            <p className="text-[#212934]/40 text-xs font-bold uppercase tracking-widest mb-1">Total Revenue</p>
            <h3 className="text-3xl font-bold text-[#212934] mb-4">$54,230.00</h3>
            <svg className="absolute bottom-0 left-0 w-full h-12 opacity-10" viewBox="0 0 100 20">
              <path d="M0 20 Q 25 5 50 15 T 100 10" fill="none" stroke="#59ab6e" strokeWidth="2" />
            </svg>
          </CardWrapper>

          {/* Variant B: Left Icon */}
          <CardWrapper className="flex items-center space-x-6">
            <div className="w-16 h-16 bg-[#212934] rounded-2xl flex items-center justify-center text-[#59ab6e]">
              <Users size={32} />
            </div>
            <div>
              <p className="text-[#212934]/40 text-xs font-bold uppercase tracking-widest mb-1">Active Users</p>
              <h3 className="text-2xl font-bold text-[#212934]">1,202</h3>
              <p className="text-[10px] text-[#59ab6e] font-bold mt-1">Real-time update</p>
            </div>
          </CardWrapper>

          {/* Variant C: Growth Badge */}
          <CardWrapper>
            <div className="flex justify-between items-center mb-6">
              <p className="text-[#212934]/40 text-xs font-bold uppercase tracking-widest">Conversion Rate</p>
              <TrendingUp className="text-[#59ab6e]" size={20} />
            </div>
            <div className="flex items-baseline space-x-2">
              <h3 className="text-4xl font-bold text-[#212934]">3.42%</h3>
              <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-1 rounded-lg">-0.2%</span>
            </div>
          </CardWrapper>
        </div>
      </section>

      {/* Profiles & Content Section */}
      <section>
        <SectionHeader title="Profiles & Visuals" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <CardWrapper className="text-center">
            <div className="relative inline-block mb-4">
              <img src="https://i.pravatar.cc/150?u=sophia" className="w-24 h-24 rounded-full border-4 border-[#59ab6e]/10 p-1" alt="Sophia" />
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#59ab6e] rounded-full border-2 border-white flex items-center justify-center">
                <CheckCircle className="text-white" size={12} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#212934]">Sophia Zay</h3>
            <p className="text-sm text-[#212934]/40 font-medium mb-6">Lead UI Designer</p>
            <div className="flex justify-center space-x-8 mb-8 border-y border-[#212934]/5 py-4">
              <div><p className="font-bold text-[#212934]">4.2k</p><p className="text-[10px] uppercase font-bold text-[#212934]/30">Posts</p></div>
              <div><p className="font-bold text-[#212934]">12k</p><p className="text-[10px] uppercase font-bold text-[#212934]/30">Followers</p></div>
              <div><p className="font-bold text-[#212934]">850</p><p className="text-[10px] uppercase font-bold text-[#212934]/30">Following</p></div>
            </div>
            <button className="w-full bg-[#59ab6e] hover:bg-[#4a8f5c] text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-[#59ab6e]/20">Follow Profile</button>
          </CardWrapper>

          {/* Product / Inventory Card */}
          <CardWrapper className="p-0 overflow-hidden group">
            <div className="relative h-48">
              <img src="https://picsum.photos/400/300?seed=watch" className="w-full h-full object-cover" alt="Product" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg shadow-sm">
                <span className="text-sm font-bold text-[#59ab6e]">$299.00</span>
              </div>
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute -bottom-6 right-6 w-12 h-12 bg-[#59ab6e] text-white rounded-full flex items-center justify-center shadow-lg group-hover:bottom-4 transition-all duration-300"
              >
                <Plus size={24} />
              </motion.button>
            </div>
            <div className="p-6">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className={i < 4 ? 'fill-[#59ab6e] text-[#59ab6e]' : 'text-[#212934]/10'} />
                ))}
                <span className="text-xs text-[#212934]/40 ml-2">(4.8)</span>
              </div>
              <h3 className="text-lg font-bold text-[#212934]">Luxury Leather Watch</h3>
              <p className="text-xs text-[#212934]/40 font-medium">Available in 3 color variants</p>
            </div>
          </CardWrapper>

          {/* Visual Content Card */}
          <CardWrapper className="p-0 overflow-hidden flex flex-col">
            <div className="relative h-48 flex-shrink-0">
              <img src="https://picsum.photos/400/300?seed=nature" className="w-full h-full object-cover" alt="Article" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4">
                <span className="text-[10px] font-bold text-white uppercase tracking-widest bg-[#59ab6e] px-2 py-1 rounded">24 Oct, 2023</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#212934] mb-2 leading-tight">Mastering Minimalist eCommerce Design</h3>
                <p className="text-sm text-[#212934]/60 line-clamp-2">Learn how simplicity can drive conversion and improve brand trust for boutique stores...</p>
              </div>
              <button className="flex items-center space-x-2 text-[#59ab6e] font-bold text-sm mt-4 group">
                <span>Read More</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </CardWrapper>
        </div>
      </section>

      {/* Management & Pricing Section */}
      <section>
        <SectionHeader title="Management & Systems" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Progress Card */}
          <CardWrapper>
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Briefcase size={20} /></div>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded uppercase">Marketing</span>
            </div>
            <h3 className="text-lg font-bold text-[#212934] mb-4">Website Redesign</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs font-bold uppercase">
                <span className="text-[#212934]/40">Progress</span>
                <span className="text-[#59ab6e]">75%</span>
              </div>
              <div className="w-full h-2 bg-[#212934]/5 rounded-full overflow-hidden">
                <div className="w-3/4 h-full bg-[#59ab6e] rounded-full"></div>
              </div>
              <div className="flex -space-x-2 mt-4">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/150?u=${i}`} className="w-8 h-8 rounded-full border-2 border-white" alt="Team" />
                ))}
                <div className="w-8 h-8 rounded-full bg-[#212934]/5 flex items-center justify-center text-[10px] font-bold text-[#212934]/40 border-2 border-white">+3</div>
              </div>
            </div>
          </CardWrapper>

          {/* Pricing Card */}
          <CardWrapper className="border-2 border-[#59ab6e]/20 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#59ab6e] text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">Current Plan</div>
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-[#212934] mb-2">Pro Plan</h3>
              <div className="flex items-baseline justify-center space-x-1">
                <span className="text-4xl font-bold text-[#212934]">$49</span>
                <span className="text-sm text-[#212934]/40">/month</span>
              </div>
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited Analytics', 'Custom Domains', 'Priority 24/7 Support', 'Advanced SEO Tools'].map((feat) => (
                <li key={feat} className="flex items-center space-x-3 text-sm text-[#212934]/60">
                  <CheckCircle size={16} className="text-[#59ab6e]" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#212934] hover:bg-black text-white py-3 rounded-xl font-bold transition-all">Manage Billing</button>
          </CardWrapper>

          {/* Action Needed Card */}
          <CardWrapper className="bg-[#212934] text-white border-transparent shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
             <div className="flex items-center space-x-3 mb-6">
               <div className="p-2 bg-red-500/20 text-red-400 rounded-lg">
                 <AlertTriangle size={20} />
               </div>
               <span className="text-xs font-bold uppercase tracking-widest text-red-400">Security Alert</span>
             </div>
             <h3 className="text-xl font-bold mb-2">Password Update Required</h3>
             <p className="text-sm text-white/50 mb-8 leading-relaxed">Your access token expires in 2 hours. Please re-authenticate your account to avoid disruption.</p>
             <div className="flex items-center justify-between">
               <div className="flex items-center space-x-2 text-white/30">
                 <Clock size={14} />
                 <span className="text-[10px] font-bold uppercase">Exp: 2h 15m</span>
               </div>
               <button className="bg-[#59ab6e] hover:bg-[#4a8f5c] px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-[#59ab6e]/20 transition-all">Fix Now</button>
             </div>
          </CardWrapper>
        </div>
      </section>
    </div>
  );
};
