
import React from 'react';
import { 
  Table, 
  BarChart2, 
  Settings, 
  LogOut,
  X,
  ChevronRight,
  Layout,
  CreditCard,
  List,
  Bell,
  Palette,
  User,
  ShieldAlert,
  ExternalLink
} from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
  currentView: string;
  onViewChange: (view: string) => void;
}

const FernLogo = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s-2-3-2-8 2-8 2-8 2 3 2 8-2 8-2 8z"/>
    <path d="M12 18c-2-1-4-1-4-1s1-1 4-2"/>
    <path d="M12 15c-3-1-5-1-5-1s2-1 5-2"/>
    <path d="M12 18c2-1 4-1 4-1s-1-1-4-2"/>
    <path d="M12 15c3-1 5-1 5-1s-2-1-4-2"/>
  </svg>
);

export const Sidebar: React.FC<SidebarProps> = ({ onClose, currentView, onViewChange }) => {
  const navItems = [
    { label: 'Intelligence', icon: BarChart2, view: 'analytics' },
    { label: 'Data Hub', icon: Table, view: 'tables' },
    { label: 'Components', icon: CreditCard, view: 'cards' },
    { label: 'Menus', icon: List, view: 'menus' },
    { label: 'Alerts', icon: Bell, view: 'notifications' },
    { label: 'Design System', icon: Palette, view: 'styles' },
    { label: 'Layouts', icon: Layout, view: 'forms' },
  ];

  const userItems = [
    { label: 'My Account', icon: User, view: 'profile' },
    { label: 'Billing', icon: CreditCard, view: 'billing' },
    { label: 'Preferences', icon: Settings, view: 'settings' },
    { label: 'Service Check', icon: ShieldAlert, view: '404' },
  ];

  return (
    <div className="w-[280px] h-screen overflow-y-hidden bg-[#212934] text-white flex flex-col shadow-2xl">
      <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onViewChange('analytics')}>
          <div className="w-8 h-8 bg-[#4d8b5f] rounded-lg flex items-center justify-center font-bold text-lg text-white">
            <FernLogo />
          </div>
          <span className="text-xl font-bold tracking-tight">Fern</span>
        </div>
        <button onClick={onClose} className="md:hidden text-white/60 hover:text-white">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 py-6 px-4 space-y-2 overflow-y-scroll custom-textarea-scrollbar">
        <div className="pb-2 px-4">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Management</p>
        </div>
        {navItems.map((item) => (
          <button
            key={item.view}
            onClick={() => {
              onViewChange(item.view);
              onClose();
            }}
            className={`
              w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
              ${currentView === item.view 
                ? 'bg-[#4d8b5f] text-white shadow-lg shadow-[#4d8b5f]/20' 
                : 'text-white/60 hover:bg-white/5 hover:text-white'}
            `}
          >
            <div className="flex items-center space-x-3">
              <item.icon size={20} className={currentView === item.view ? 'text-white' : 'text-white/60 group-hover:text-white'} />
              <span className="font-medium">{item.label}</span>
            </div>
            {currentView === item.view && <ChevronRight size={16} />}
          </button>
        ))}

        <div className="pt-4 px-4 pb-2">
          <button 
            onClick={() => onViewChange('storefront')}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl bg-[#4d8b5f]/10 text-[#4d8b5f] hover:bg-[#4d8b5f] hover:text-white transition-all font-bold group"
          >
            <ExternalLink size={20} />
            <span>Customer View</span>
          </button>
        </div>
        
        <div className="pt-6 pb-2 px-4">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">Account</p>
        </div>
        {userItems.map((item) => (
          <button
            key={item.view}
            onClick={() => {
              onViewChange(item.view);
              onClose();
            }}
            className={`
              w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group
              ${currentView === item.view 
                ? 'bg-[#4d8b5f] text-white shadow-lg shadow-[#4d8b5f]/20' 
                : 'text-white/60 hover:bg-white/5 hover:text-white'}
            `}
          >
            <div className="flex items-center space-x-3">
              <item.icon size={20} className={currentView === item.view ? 'text-white' : 'text-white/60 group-hover:text-white'} />
              <span className="font-medium">{item.label}</span>
            </div>
          </button>
        ))}
      </nav>

      <div className="p-6 border-t border-white/10">
        <button 
          onClick={() => onViewChange('login')}
          className="flex items-center space-x-2 text-white/60 hover:text-red-400 transition-colors w-full"
        >
          <LogOut size={18} />
          <span className="text-sm font-medium">Terminate Session</span>
        </button>
      </div>
    </div>
  );
};
