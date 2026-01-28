
import React from 'react';
import { Search, ShoppingCart, User, Star, ArrowUpRight, ShieldCheck, Zap, Instagram, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const FernLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-2-3-2-8 2-8 2-8 2 3 2 8-2 8-2 8z"/>
    <path d="M12 18c-2-1-4-1-4-1s1-1 4-2"/>
    <path d="M12 15c-3-1-5-1-5-1s2-1 5-2"/>
    <path d="M12 18c2-1 4-1 4-1s-1-1-4-2"/>
    <path d="M12 15c3-1 5-1 5-1s-2-1-4-2"/>
  </svg>
);

export const StorefrontPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  return (
    <div className="bg-[#fcfcfd] font-['Roboto'] text-[#212934] overflow-x-hidden">
      
      {/* 1. Global Glass Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-[100] bg-white/70 backdrop-blur-xl border border-white/20 rounded-[2rem] px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-1 cursor-pointer group">
            <div className="w-8 h-8 bg-[#4d8b5f] rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-12">
              <FernLogo />
            </div>
            <span className="text-2xl font-black tracking-tighter ml-2">Fern<span className="text-[#4d8b5f]">.</span></span>
          </div>
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.2em] text-[#212934]/40">
            <button className="hover:text-[#4d8b5f] transition-colors relative group">Archive</button>
            <button className="hover:text-[#4d8b5f] transition-colors relative group">Botanical</button>
            <button className="hover:text-[#4d8b5f] transition-colors relative group">Manifesto</button>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 mr-4">
             <button className="p-2.5 hover:bg-[#212934]/5 rounded-full transition-all text-[#212934]/40 hover:text-[#212934]"><Search size={18} /></button>
             <button className="p-2.5 hover:bg-[#212934]/5 rounded-full transition-all text-[#212934]/40 hover:text-[#212934] relative">
               <ShoppingCart size={18} />
               <span className="absolute top-2 right-2 w-2 h-2 bg-[#4d8b5f] rounded-full"></span>
             </button>
          </div>
          <button 
            onClick={onLogin}
            className="flex items-center space-x-3 px-8 py-3 bg-[#212934] text-white rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-[#4d8b5f] transition-all shadow-xl shadow-black/10 active:scale-95"
          >
            <User size={14} />
            <span>Dashboard</span>
          </button>
        </div>
      </nav>

      {/* 2. Editorial Hero Section */}
      <section className="relative min-h-screen pt-40 pb-20 px-6 md:px-12 flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#4d8b5f]/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-[#212934]/5 rounded-full blur-[150px]"></div>
        
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4d8b5f] mb-4 block">Organic Origins • 2024</span>
              <h1 className="text-7xl md:text-9xl font-black text-[#212934] leading-[0.9] tracking-tighter">
                Evolved <br />
                <span className="text-[#4d8b5f] italic">Botanical</span> <br />
                Utility.
              </h1>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#212934]/40 font-light max-w-md leading-relaxed"
            >
              Fern is a clean, organic ecosystem for the conscious curator. Perfected utility for those who value longevity over excess.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 pt-6"
            >
              <button className="group relative px-12 py-6 bg-[#212934] text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl hover:bg-[#4d8b5f] transition-all flex items-center space-x-4 active:scale-95">
                <span>View Collection</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] group"
            >
              <img 
                src="/Fern-Editorial.png" 
                className="w-full h-full object-cover group-hover:scale-110 transition-all duration-[3s]" 
                alt="Fern Editorial"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#212934]/40 to-transparent"></div>
              
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-1 opacity-60">Signature Piece</p>
                <h3 className="text-3xl font-black">Forest Chrono</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Bento Grid Section */}
      <section className="py-32 px-6 md:px-12 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#4d8b5f]">Ecosystem Pillars</span>
              <h2 className="text-5xl font-black text-[#212934] tracking-tight">The Fern Series</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:h-[700px]">
            <motion.div className="md:col-span-7 relative rounded-[3.5rem] overflow-hidden group shadow-xl">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s]" alt="Footwear" />
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-12 left-12 text-white">
                <h3 className="text-5xl font-black mb-6">Signature Footwear</h3>
                <button className="px-10 py-4 bg-white text-[#212934] rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-[#4d8b5f] hover:text-white transition-all">Shop Steps</button>
              </div>
            </motion.div>

            <div className="md:col-span-5 grid grid-rows-2 gap-8 h-full">
              <motion.div className="relative rounded-[3.5rem] overflow-hidden group shadow-xl">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s]" alt="Watches" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-black mb-4">Precision Time</h3>
                </div>
              </motion.div>
              <motion.div className="relative rounded-[3.5rem] overflow-hidden group shadow-xl">
                <img src="https://images.unsplash.com/photo-1526170315870-ef6846055a8d?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s]" alt="Optics" />
                <div className="absolute bottom-10 left-10 text-white">
                  <h3 className="text-3xl font-black mb-4">Optics</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. High-Contrast Community Section */}
      <section className="py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-[#212934] rounded-[4rem] p-12 md:p-24 relative overflow-hidden shadow-2xl text-white">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#4d8b5f]/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-black leading-none tracking-tighter">
                Enter the <br />
                <span className="text-[#4d8b5f]">Canopy.</span>
              </h2>
              <p className="text-white/40 text-lg font-light leading-relaxed max-w-md">
                Get first access to limited Fern drops and botanical insights. Zero noise, purely organic updates.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 space-y-6">
              <input 
                type="email" 
                placeholder="Secure Email Address" 
                className="w-full bg-white/10 border-2 border-transparent px-8 py-5 rounded-3xl outline-none text-white focus:bg-white/20 focus:border-[#4d8b5f] transition-all font-medium text-sm"
              />
              <button className="w-full py-5 bg-[#4d8b5f] text-white rounded-3xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-[#4d8b5f]/20 hover:bg-[#3a6b47] transition-all active:scale-95">
                Join the Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-white pt-32 pb-16 px-6 md:px-12 border-t border-[#212934]/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 pb-24">
            <div className="md:col-span-5 space-y-10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#212934] rounded-xl flex items-center justify-center text-white">
                  <FernLogo />
                </div>
                <span className="text-4xl font-black tracking-tighter">Fern</span>
              </div>
              <p className="text-lg text-[#212934]/40 font-light max-w-sm leading-relaxed">
                Clean. Organic. High-Performance. We create the foundations for a modern sustainable lifestyle.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#212934]">Ecosystem</h4>
                <ul className="space-y-4 text-sm font-medium text-[#212934]/50">
                  {['Collection', 'Roots', 'Forestry', 'Sustainable'].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
              <div className="space-y-8">
                <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#212934]">Network</h4>
                <ul className="space-y-4 text-sm font-medium text-[#212934]/50">
                  {['Account', 'Orders', 'Tracking', 'Support'].map(l => <li key={l}>{l}</li>)}
                </ul>
              </div>
              <div className="space-y-8">
                 <h4 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#212934]">Studio</h4>
                 <p className="text-xs text-[#212934]/40">Oslo Office<br />Karl Johans Gate 22<br />Norway</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-[#212934]/5 flex justify-between items-center">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#212934]/20">© 2024 Fern Ecosystems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
