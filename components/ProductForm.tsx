
import React, { useState } from 'react';
import { Upload, ChevronRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProductForm: React.FC = () => {
  const [isPublic, setIsPublic] = useState(true);
  const [desc, setDesc] = useState('');
  const maxChars = 500;

  return (
    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
      <div className="space-y-1.5 group">
        <label className="block text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#4d8b5f] transition-colors">Asset Identity</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="e.g. Fern Signature Series"
            className="w-full px-5 py-3.5 rounded-2xl border border-[#212934]/10 bg-white shadow-[inset_0_1px_2px_rgba(33,41,52,0.03)] focus:border-[#4d8b5f] focus:ring-4 focus:ring-[#4d8b5f]/15 outline-none transition-all text-sm font-medium"
          />
          <CheckCircle2 className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4d8b5f]/40" size={18} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-1.5 group">
          <label className="block text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#4d8b5f] transition-colors">Category</label>
          <select className="w-full px-5 py-3.5 rounded-2xl border border-[#212934]/10 bg-white shadow-[inset_0_1px_2px_rgba(33,41,52,0.03)] focus:border-[#4d8b5f] focus:ring-4 focus:ring-[#4d8b5f]/15 outline-none transition-all text-sm font-medium appearance-none bg-no-repeat bg-[right_1.25rem_center] bg-[length:1em_1em]" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234d8b5f' stroke-width='3'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`}}>
            <option>Botanical Watches</option>
            <option>Organic Textiles</option>
            <option>Sustainable Goods</option>
          </select>
        </div>
        <div className="space-y-1.5 group">
          <label className="block text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#4d8b5f] transition-colors">Price</label>
          <div className="relative">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#212934]/30 font-bold">$</span>
            <input 
              type="number" 
              placeholder="0.00"
              className="w-full pl-10 pr-5 py-3.5 rounded-2xl border border-[#212934]/10 bg-white shadow-[inset_0_1px_2px_rgba(33,41,52,0.03)] focus:border-[#4d8b5f] focus:ring-4 focus:ring-[#4d8b5f]/15 outline-none transition-all text-sm font-medium"
            />
          </div>
        </div>
      </div>

      <div className="space-y-1.5 group relative">
        <label className="block text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1 group-focus-within:text-[#4d8b5f] transition-colors">Organic Narrative</label>
        <textarea 
          rows={5}
          value={desc}
          onChange={(e) => setDesc(e.target.value.slice(0, maxChars))}
          placeholder="Describe the craftsmanship and soul of this botanical piece..."
          className="w-full px-5 py-4 rounded-2xl border border-[#212934]/10 bg-white shadow-[inset_0_1px_2px_rgba(33,41,52,0.03)] focus:border-[#4d8b5f] focus:ring-4 focus:ring-[#4d8b5f]/15 outline-none transition-all text-sm font-medium resize-none custom-textarea-scrollbar"
        ></textarea>
        <div className="absolute bottom-4 right-4 text-[10px] font-bold text-[#212934]/20">
          {desc.length} / {maxChars}
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="block text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1">Ecosystem Imagery</label>
        <div className="w-full border-2 border-dashed border-[#4d8b5f]/20 rounded-2xl p-8 flex flex-col items-center justify-center hover:bg-[#4d8b5f]/5 hover:border-[#4d8b5f]/40 transition-all cursor-pointer group">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Upload className="text-[#4d8b5f] mb-3" size={36} />
          </motion.div>
          <p className="text-sm font-bold text-[#212934]">Upload Visual Nodes</p>
        </div>
      </div>

      <div className="flex items-center justify-between py-3 border-y border-[#212934]/5">
        <div className="space-y-0.5">
          <span className="text-sm font-bold text-[#212934]">Public Visibility</span>
        </div>
        <button 
          onClick={() => setIsPublic(!isPublic)}
          className={`w-14 h-7 rounded-full p-1 transition-all duration-300 ${isPublic ? 'bg-[#4d8b5f]' : 'bg-[#212934]/10'}`}
        >
          <motion.div 
            animate={{ x: isPublic ? 28 : 0 }}
            className="w-5 h-5 bg-white rounded-full shadow-lg"
          />
        </button>
      </div>

      <button className="w-full bg-[#212934] hover:bg-black text-white font-bold py-4 rounded-2xl transition-all shadow-xl shadow-[#212934]/10 active:scale-[0.98] mt-4 flex items-center justify-center space-x-2">
        <span>Publish to Network</span>
        <ChevronRight size={18} />
      </button>
    </form>
  );
};
