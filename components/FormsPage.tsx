
import React, { useState } from 'react';
import { ProductForm } from './ProductForm';
import { Mail, Lock, PlusCircle, CheckCircle2, FolderTree, ShoppingBag, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const mockUsers = [
  { id: 'USR001', name: 'John Fern', email: 'john@fern.com', role: 'Member', joined: 'Oct 12, 2023' },
  { id: 'USR002', name: 'Emma Fern', email: 'emma@fern-systems.com', role: 'Editor', joined: 'Sep 28, 2023' },
];

const mockProducts = [
  { id: 'PRD101', name: 'Fern Signature Series', category: 'Botanical', price: '$45.00', stock: 124 },
  { id: 'PRD102', name: 'Verdant Chrono', category: 'Time', price: '$299.00', stock: 12 },
];

export const FormsPage: React.FC = () => {
  const [activeTableTab, setActiveTableTab] = useState<'users' | 'products'>('users');

  return (
    <div className="space-y-8 pb-12 font-['Roboto']">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#212934]">Ecosystem Admin</h1>
          <p className="text-[#212934]/60">Configure your nodes and create new system entities.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        <div className="xl:col-span-7 space-y-8">
          <div className="bg-white p-8 rounded-2xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h2 className="text-xl font-bold mb-8 flex items-center gap-2">
              <PlusCircle className="text-[#4d8b5f]" size={20} />
              New Botanical Asset
            </h2>
            <ProductForm />
          </div>
        </div>

        <div className="xl:col-span-5 space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#212934] p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4d8b5f]/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <h2 className="text-2xl font-bold mb-2">Node Security</h2>
            <p className="text-white/40 text-sm mb-8">Re-authenticate to manage Fern core data.</p>
            
            <form className="space-y-4">
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#4d8b5f] transition-colors" size={18} />
                <input 
                  type="email" 
                  placeholder="admin@fern-systems.com"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:bg-white/10 focus:border-[#4d8b5f] transition-all text-sm"
                />
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-[#4d8b5f] transition-colors" size={18} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-3.5 outline-none focus:bg-white/10 focus:border-[#4d8b5f] transition-all text-sm"
                />
              </div>
              <button className="w-full bg-[#4d8b5f] hover:bg-[#3a6b47] text-white py-4 rounded-2xl font-bold shadow-lg shadow-[#4d8b5f]/20 transition-all flex items-center justify-center space-x-2 mt-4">
                <span>Access Node</span>
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}><CheckCircle2 size={18} /></motion.div>
              </button>
            </form>
          </motion.div>

          <div className="bg-white p-6 rounded-2xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <h2 className="text-xl font-bold mb-6">Directory Oversight</h2>
            <div className="flex bg-[#212934]/5 p-1 rounded-xl mb-6">
              {[
                { id: 'users', label: 'Members', icon: Users },
                { id: 'products', label: 'Assets', icon: ShoppingBag }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTableTab(tab.id as any)}
                  className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-bold rounded-lg transition-all ${
                    activeTableTab === tab.id 
                      ? 'bg-white text-[#4d8b5f] shadow-sm' 
                      : 'text-[#212934]/40 hover:text-[#212934]/60'
                  }`}
                >
                  <tab.icon size={14} />
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
            <div className="overflow-x-auto min-h-[200px]">
              {activeTableTab === 'users' ? mockUsers.map(u => (
                <div key={u.id} className="py-3 border-b border-[#212934]/5 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-[#212934]">{u.name}</p>
                    <p className="text-[10px] text-[#212934]/40 uppercase tracking-widest">{u.role}</p>
                  </div>
                </div>
              )) : mockProducts.map(p => (
                <div key={p.id} className="py-3 border-b border-[#212934]/5 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-[#212934]">{p.name}</p>
                    <p className="text-[10px] text-[#212934]/40 uppercase tracking-widest">{p.category}</p>
                  </div>
                  <span className="text-sm font-bold text-[#4d8b5f]">{p.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
