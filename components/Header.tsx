
import React, { useState } from 'react';
import { Search, Bell, Menu, ChevronDown, User, Settings, CreditCard, LogOut } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onNavigate: (view: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick, onNavigate }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNav = (view: string) => {
    onNavigate(view);
    setIsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 h-16 glass-header border-b border-[#212934]/5 px-4 md:px-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button onClick={onMenuClick} className="md:hidden p-2 hover:bg-[#212934]/5 rounded-lg">
          <Menu size={20} />
        </button>
        <div className="relative group hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#212934]/40 group-focus-within:text-[#4d8b5f] transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search Fern commands or records..." 
            className="pl-10 pr-4 py-2 w-64 md:w-80 bg-[#212934]/5 border-transparent focus:bg-white focus:border-[#4d8b5f]/30 border rounded-xl outline-none transition-all ring-[#4d8b5f]/20 focus:ring-4"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 md:space-x-4">
        <button className="relative p-2 hover:bg-[#212934]/5 rounded-xl transition-colors">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>
        
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center space-x-2 p-1 md:p-1.5 hover:bg-[#212934]/5 rounded-xl transition-all"
          >
            <img 
              src="https://picsum.photos/32/32?seed=sophia" 
              alt="Avatar" 
              className="w-8 h-8 rounded-lg shadow-sm border border-[#4d8b5f]/30"
            />
            <div className="hidden md:block text-left">
              <p className="text-xs font-bold leading-tight">Sophia Fern</p>
              <p className="text-[10px] text-[#212934]/40 leading-tight">System Admin</p>
            </div>
            <ChevronDown size={14} className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#212934]/5 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 duration-200">
              <button 
                onClick={() => handleNav('profile')}
                className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-[#212934]/70 hover:bg-[#4d8b5f]/5 hover:text-[#4d8b5f] transition-colors"
              >
                <User size={16} />
                <span>My Profile</span>
              </button>
              <button 
                onClick={() => handleNav('settings')}
                className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-[#212934]/70 hover:bg-[#4d8b5f]/5 hover:text-[#4d8b5f] transition-colors"
              >
                <Settings size={16} />
                <span>Settings</span>
              </button>
              <button 
                onClick={() => handleNav('billing')}
                className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-[#212934]/70 hover:bg-[#4d8b5f]/5 hover:text-[#4d8b5f] transition-colors border-b border-[#212934]/5"
              >
                <CreditCard size={16} />
                <span>Billing</span>
              </button>
              <button 
                onClick={() => handleNav('login')}
                className="w-full flex items-center space-x-3 px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
                <LogOut size={16} />
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
