
import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Edit, 
  Trash2, 
  MoreVertical, 
  Plus, 
  User, 
  ShoppingBag, 
  FolderTree, 
  History 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type TabType = 'users' | 'products' | 'categories' | 'orders';

const mockUsers = [
  { id: 1, name: 'Alexander Fern', email: 'alex@fern-ecosystems.com', role: 'Owner', status: 'Active', joined: 'Oct 12, 2021', avatar: 'https://i.pravatar.cc/150?u=alex' },
  { id: 2, name: 'Sarah Fern', email: 'sarah.f@fern-systems.net', role: 'Editor', status: 'Active', joined: 'Jan 05, 2022', avatar: 'https://i.pravatar.cc/150?u=sarah' },
  { id: 3, name: 'John Doe', email: 'john.d@gmail.com', role: 'Member', status: 'Inactive', joined: 'May 18, 2023', avatar: 'https://i.pravatar.cc/150?u=john' },
  { id: 4, name: 'Elena Belova', email: 'elena@fern.co', role: 'Editor', status: 'Pending', joined: 'Sep 21, 2023', avatar: 'https://i.pravatar.cc/150?u=elena' },
  { id: 5, name: 'David Ross', email: 'david.r@fern-network.com', role: 'Member', status: 'Active', joined: 'Dec 02, 2023', avatar: 'https://i.pravatar.cc/150?u=david' },
];

const mockProducts = [
  { id: 1, name: 'Signature Chronograph', category: 'Watches', price: '$299.00', stock: 45, status: 'In Stock', thumb: 'https://picsum.photos/40/40?seed=watch' },
  { id: 2, name: 'Organic Fiber Bag', category: 'Accessories', price: '$150.00', stock: 12, status: 'Low Stock', thumb: 'https://picsum.photos/40/40?seed=bag' },
  { id: 3, name: 'Midnight Root Sneakers', category: 'Shoes', price: '$85.00', stock: 0, status: 'Out of Stock', thumb: 'https://picsum.photos/40/40?seed=shoe' },
  { id: 4, name: 'Verdant Sport Watch', category: 'Watches', price: '$420.00', stock: 8, status: 'Low Stock', thumb: 'https://picsum.photos/40/40?seed=watch2' },
  { id: 5, name: 'Wild Silk Scarf', category: 'Accessories', price: '$55.00', stock: 120, status: 'In Stock', thumb: 'https://picsum.photos/40/40?seed=scarf' },
];

const mockCategories = [
  { id: 1, name: 'Botanicals', slug: '/shop/botanicals', count: 24, updated: '2 hours ago', icon: '🌿' },
  { id: 2, name: 'Footwear', slug: '/shop/footwear', count: 18, updated: '1 day ago', icon: '👟' },
  { id: 3, name: 'Utility', slug: '/shop/utility', count: 42, updated: '15 mins ago', icon: '🛠️' },
  { id: 4, name: 'Manifesto', slug: '/shop/manifesto', count: 31, updated: '3 days ago', icon: '📜' },
];

const mockOrders = [
  { id: 'FERN-7721', client: 'Alice Johnson', amount: '$1,250.00', status: 'Delivered', date: 'Oct 24, 2023' },
  { id: 'FERN-7722', client: 'Michael Chen', amount: '$480.00', status: 'Processing', date: 'Oct 24, 2023' },
  { id: 'FERN-7723', client: 'Sarah Fern', amount: '$320.00', status: 'Shipped', date: 'Oct 23, 2023' },
];

export const DataPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('users');

  const tabs: { id: TabType; label: string; icon: any }[] = [
    { id: 'users', label: 'Ecosystem Members', icon: User },
    { id: 'products', label: 'Asset Library', icon: ShoppingBag },
    { id: 'categories', label: 'Taxonomy', icon: FolderTree },
    { id: 'orders', label: 'Transaction History', icon: History },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#212934]">Ecosystem Records</h1>
          <p className="text-[#212934]/60">Manage your entire Fern database from this central node.</p>
        </div>
      </div>

      <div className="flex border-b border-[#212934]/10 space-x-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-4 px-1 flex items-center space-x-2 transition-all duration-300 whitespace-nowrap ${
              activeTab === tab.id ? 'text-[#4d8b5f] font-bold' : 'text-[#212934]/40 font-medium hover:text-[#212934]'
            }`}
          >
            <tab.icon size={18} className={activeTab === tab.id ? 'text-[#4d8b5f]' : 'text-inherit'} />
            <span className="text-sm">{tab.label}</span>
            {activeTab === tab.id && (
              <motion.div 
                layoutId="tableActiveTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4d8b5f]"
              />
            )}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-[#212934]/5 shadow-[0_8px_30px_rgba(0,0,0,0.04)] overflow-hidden">
        <div className="p-6 border-b border-[#212934]/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-96 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#212934]/30 group-focus-within:text-[#4d8b5f] transition-colors" size={18} />
            <input 
              type="text" 
              placeholder={`Search ${activeTab}...`}
              className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-[#212934]/10 bg-white shadow-[inset_0_1px_2px_rgba(33,41,52,0.03)] focus:border-[#4d8b5f] focus:ring-4 focus:ring-[#4d8b5f]/10 outline-none transition-all text-sm font-medium"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none flex items-center justify-center space-x-2 bg-white border border-[#212934]/10 hover:bg-[#212934]/5 px-4 py-2.5 rounded-xl transition-all font-bold text-xs uppercase tracking-widest text-[#212934]/60">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="flex-none w-10 h-10 flex items-center justify-center bg-[#4d8b5f] text-white rounded-xl shadow-lg shadow-[#4d8b5f]/20 hover:scale-105 transition-all">
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
            >
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#f9fafb]">
                  {activeTab === 'users' && (
                    <tr className="border-b border-[#212934]/5">
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">Member</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">Role</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">Status</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30 text-right">Actions</th>
                    </tr>
                  )}
                  {activeTab === 'products' && (
                    <tr className="border-b border-[#212934]/5">
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">Asset</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">Price</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">Status</th>
                      <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30 text-right">Actions</th>
                    </tr>
                  )}
                </thead>
                <tbody className="divide-y divide-[#212934]/5">
                  {activeTab === 'users' && mockUsers.map((user, idx) => (
                    <tr key={user.id} className={`group hover:bg-[#4d8b5f]/5 transition-all duration-300 ${idx % 2 === 1 ? 'bg-[#f9fafb]' : 'bg-white'}`}>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-3">
                          <img src={user.avatar} className="w-9 h-9 rounded-xl shadow-sm border border-transparent group-hover:border-[#4d8b5f]/20 transition-all" />
                          <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#212934]">{user.name}</span>
                            <span className="text-[11px] text-[#212934]/40 font-medium">{user.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs font-bold text-[#212934]/60 bg-[#212934]/5 px-2 py-1 rounded-lg">{user.role}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-[#4d8b5f] animate-pulse' : 'bg-red-500'}`} />
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${user.status === 'Active' ? 'text-[#4d8b5f]' : 'text-red-500'}`}>{user.status}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-2">
                          <button className="p-1.5 bg-[#212934]/5 text-[#212934]/40 hover:bg-[#4d8b5f]/10 hover:text-[#4d8b5f] rounded-lg transition-all"><Edit size={16} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
