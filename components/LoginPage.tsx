
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Chrome, Github, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const FernLogo = () => (
  <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-2-3-2-8 2-8 2-8 2 3 2 8-2 8-2 8z"/>
    <path d="M12 18c-2-1-4-1-4-1s1-1 4-2"/>
    <path d="M12 15c-3-1-5-1-5-1s2-1 5-2"/>
    <path d="M12 18c2-1 4-1 4-1s-1-1-4-2"/>
    <path d="M12 15c3-1 5-1 5-1s-2-1-4-2"/>
  </svg>
);

export const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [showPass, setShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onLogin();
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#e9eef5] flex items-center justify-center p-6 font-['Roboto']">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[480px] bg-white rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(33,41,52,0.15)] overflow-hidden"
      >
        <div className="p-10 md:p-12">
          {/* Brand Identity */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-[#4d8b5f] rounded-2xl flex items-center justify-center text-white shadow-xl shadow-[#4d8b5f]/30 mb-4">
              <FernLogo />
            </div>
            <h1 className="text-3xl font-bold text-[#212934] tracking-tight">Welcome to Fern</h1>
            <p className="text-[#212934]/40 font-light mt-1 text-center">Your sustainable management hub</p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1">Access Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#212934]/20 group-focus-within:text-[#4d8b5f] transition-colors" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="admin@fern-systems.com"
                  className="w-full bg-[#212934]/5 border border-transparent rounded-2xl pl-12 pr-4 py-4 outline-none focus:bg-white focus:border-[#4d8b5f] focus:ring-4 focus:ring-[#4d8b5f]/10 transition-all text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1">Keyphrase</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#212934]/20 group-focus-within:text-[#4d8b5f] transition-colors" size={18} />
                <input 
                  type={showPass ? "text" : "password"} 
                  required
                  placeholder="••••••••"
                  className="w-full bg-[#212934]/5 border border-transparent rounded-2xl pl-12 pr-12 py-4 outline-none focus:bg-white focus:border-[#4d8b5f] focus:ring-4 focus:ring-[#4d8b5f]/10 transition-all text-sm font-medium"
                />
                <button 
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#212934]/20 hover:text-[#212934] transition-colors"
                >
                  {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#212934] hover:bg-[#4d8b5f] text-white py-4 rounded-2xl font-bold shadow-xl shadow-[#212934]/10 transition-all flex items-center justify-center space-x-2 active:scale-[0.98] disabled:opacity-70 group"
            >
              {isLoading ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                  <CheckCircle2 size={20} />
                </motion.div>
              ) : (
                <>
                  <span>Initialize Dashboard</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#212934]/5"></div></div>
            <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-[0.3em] text-[#212934]/20 bg-white px-4">Cloud Auth</div>
          </div>

          <button className="w-full flex items-center justify-center space-x-3 border-2 border-[#212934]/5 rounded-2xl py-4 hover:bg-[#212934]/5 transition-all font-bold text-sm text-[#212934]/60 active:scale-[0.98]">
            <Chrome size={20} className="text-red-500" />
            <span>Continue with Google</span>
          </button>
        </div>
        <div className="bg-[#212934]/5 py-6 text-center border-t border-[#212934]/5">
          <p className="text-xs text-[#212934]/40 font-medium">New to Fern? <button className="text-[#4d8b5f] font-bold hover:underline">Apply for Account</button></p>
        </div>
      </motion.div>
    </div>
  );
};
