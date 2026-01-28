
import React from 'react';
import { Map, Home } from 'lucide-react';
import { motion } from 'framer-motion';

export const NotFoundPage: React.FC<{ onReturn: () => void }> = ({ onReturn }) => {
  return (
    <div className="min-h-screen bg-[#e9eef5] flex flex-col items-center justify-center p-6 text-center font-['Roboto']">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-xl"
      >
        <div className="relative mb-16 inline-block">
          <motion.h1 
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="text-[14rem] font-black leading-none text-[#212934] select-none"
            style={{ filter: 'drop-shadow(15px 15px 0px #4d8b5f)' }}
          >
            404
          </motion.h1>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="p-10 bg-white/20 backdrop-blur-xl rounded-full border border-white/30 shadow-2xl animate-pulse">
              <Map size={64} className="text-[#4d8b5f]" />
            </div>
          </div>
        </div>

        <h2 className="text-4xl font-bold text-[#212934] mb-4">This branch of Fern doesn't exist.</h2>
        <p className="text-[#212934]/50 font-light text-lg mb-12 leading-relaxed">
          The requested coordinate or record could not be found in the Fern forest.<br />
          Our guides are rerouting you.
        </p>

        <div className="flex items-center justify-center">
          <button 
            onClick={onReturn}
            className="flex items-center space-x-3 bg-[#212934] hover:bg-[#4d8b5f] text-white px-10 py-5 rounded-[2rem] font-bold shadow-2xl shadow-[#212934]/20 transition-all group active:scale-95"
          >
            <Home size={20} className="group-hover:scale-110 transition-transform" />
            <span>Back to Root</span>
          </button>
        </div>

        <div className="mt-24">
          <p className="text-[10px] font-bold text-[#212934]/20 uppercase tracking-[0.4em]">Fern Node Terminal • Rev 3.0.0</p>
        </div>
      </motion.div>
    </div>
  );
};
