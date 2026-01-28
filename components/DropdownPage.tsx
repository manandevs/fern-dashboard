
import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Search, 
  X, 
  Filter, 
  User, 
  Settings, 
  History, 
  LogOut, 
  MoreVertical, 
  Edit, 
  Copy, 
  Archive, 
  Check, 
  ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95, y: -10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95, y: -10 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="absolute mt-2 z-50 bg-white rounded-2xl border border-[#212934]/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden"
  >
    {children}
  </motion.div>
);

const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <p className="text-[10px] font-bold text-[#212934]/30 uppercase tracking-[0.2em] mb-3 ml-1">{label}</p>
);

export const DropdownPage: React.FC = () => {
  // State for all dropdowns
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  
  // State for Multi-select
  const [selectedTags, setSelectedTags] = useState<string[]>(['Organic', 'Trending']);
  const [tagSearch, setTagSearch] = useState('');
  const allTags = ['Organic', 'Trending', 'Discount', 'Featured', 'New Arrival', 'Eco-friendly', 'Limited Edition'];
  const filteredTags = allTags.filter(t => t.toLowerCase().includes(tagSearch.toLowerCase()) && !selectedTags.includes(t));

  // State for Filter Popover
  const [filters, setFilters] = useState<Record<string, boolean>>({
    'Watches': true,
    'Shoes': false,
    'Accessories': true,
    'Apparel': false
  });

  // State for Status Selector
  const [status, setStatus] = useState<'Active' | 'Inactive' | 'Pending'>('Active');

  // State for Nested Menu
  const [nestedLevel, setNestedLevel] = useState<number>(0);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(openDropdown === id ? null : id);
    setNestedLevel(0); // Reset nested level on close/reopen
  };

  const closeAll = () => setOpenDropdown(null);

  return (
    <div className="space-y-12 pb-24">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#212934]">Interactive Menus</h1>
        <p className="text-[#212934]/60">Sophisticated selection patterns and contextual navigation.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
        
        {/* Pattern A: Profile Header Dropdown */}
        <div className="relative">
          <SectionLabel label="Profile Header Dropdown" />
          <button 
            onClick={() => toggleDropdown('profile')}
            className="flex items-center space-x-3 p-1.5 pl-3 bg-white border border-[#212934]/5 rounded-xl hover:shadow-md transition-all group"
          >
            <div className="text-left hidden sm:block">
              <p className="text-xs font-bold text-[#212934]">Sophia Zay</p>
              <p className="text-[10px] text-[#212934]/40 font-bold uppercase tracking-widest">Admin</p>
            </div>
            <img src="https://i.pravatar.cc/150?u=sophia" className="w-8 h-8 rounded-lg shadow-sm" alt="Profile" />
            <ChevronDown size={14} className={`text-[#212934]/30 group-hover:text-[#59ab6e] transition-all ${openDropdown === 'profile' ? 'rotate-180' : ''}`} />
          </button>
          
          <AnimatePresence>
            {openDropdown === 'profile' && (
              <DropdownContainer>
                <div className="w-56">
                  <div className="p-4 bg-[#212934]/5 border-b border-[#212934]/5">
                    <p className="text-xs font-bold text-[#212934]">sophia@zayflow.com</p>
                    <p className="text-[10px] text-[#212934]/40 font-medium mt-0.5">Enterprise Store Owner</p>
                  </div>
                  <div className="p-2">
                    {[
                      { icon: User, label: 'Profile' },
                      { icon: Settings, label: 'Settings' },
                      { icon: History, label: 'My Orders' }
                    ].map((item) => (
                      <button key={item.label} className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-[#212934]/70 hover:bg-[#59ab6e]/10 hover:text-[#59ab6e] transition-colors">
                        <item.icon size={16} />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                  <div className="p-2 pt-0 border-t border-[#212934]/5">
                    <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-bold text-red-500 hover:bg-red-50 transition-colors">
                      <LogOut size={16} />
                      <span>Log Out</span>
                    </button>
                  </div>
                </div>
              </DropdownContainer>
            )}
          </AnimatePresence>
        </div>

        {/* Pattern B: Searchable Multi-Select */}
        <div className="relative">
          <SectionLabel label="Searchable Multi-Select" />
          <div className="w-full bg-white border border-[#212934]/10 rounded-xl p-1.5 flex flex-wrap gap-1.5 items-center shadow-sm focus-within:ring-4 focus-within:ring-[#59ab6e]/10 focus-within:border-[#59ab6e] transition-all">
            {selectedTags.map(tag => (
              <span key={tag} className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#59ab6e]/10 text-[#59ab6e] rounded-lg text-xs font-bold animate-in zoom-in-95 duration-200">
                <span>{tag}</span>
                <button onClick={() => setSelectedTags(selectedTags.filter(t => t !== tag))} className="hover:text-red-500"><X size={12} /></button>
              </span>
            ))}
            <input 
              type="text" 
              placeholder={selectedTags.length === 0 ? "Select tags..." : ""}
              value={tagSearch}
              onFocus={() => setOpenDropdown('tags')}
              onChange={(e) => setTagSearch(e.target.value)}
              className="flex-1 min-w-[120px] bg-transparent outline-none text-sm px-2 py-1"
            />
          </div>
          
          <AnimatePresence>
            {openDropdown === 'tags' && filteredTags.length > 0 && (
              <DropdownContainer>
                <div className="w-64 max-h-48 overflow-y-auto custom-textarea-scrollbar p-1">
                  {filteredTags.map(tag => (
                    <button 
                      key={tag}
                      onClick={() => {
                        setSelectedTags([...selectedTags, tag]);
                        setTagSearch('');
                      }}
                      className="w-full text-left px-4 py-2 text-sm font-medium text-[#212934]/70 hover:bg-[#59ab6e]/10 hover:text-[#59ab6e] rounded-lg transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </DropdownContainer>
            )}
          </AnimatePresence>
        </div>

        {/* Pattern C: Filter Popover */}
        <div className="relative">
          <SectionLabel label="Filter Popover" />
          <button 
            onClick={() => toggleDropdown('filter')}
            className="flex items-center space-x-2 px-4 py-2.5 bg-white border border-[#212934]/10 rounded-xl font-bold text-xs uppercase tracking-widest text-[#212934]/60 hover:bg-[#212934]/5 transition-all"
          >
            <Filter size={16} />
            <span>Filter Categories</span>
            <span className="w-5 h-5 flex items-center justify-center bg-[#59ab6e] text-white rounded-full text-[10px] ml-1">
              {Object.values(filters).filter(Boolean).length}
            </span>
          </button>

          <AnimatePresence>
            {openDropdown === 'filter' && (
              <DropdownContainer>
                <div className="w-64 p-5">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-xs font-bold text-[#212934] uppercase tracking-wider">Select Categories</p>
                    <button 
                      onClick={() => setFilters({ 'Watches': false, 'Shoes': false, 'Accessories': false, 'Apparel': false })}
                      className="text-[10px] font-bold text-[#59ab6e] hover:underline"
                    >
                      Clear All
                    </button>
                  </div>
                  <div className="space-y-3">
                    {Object.entries(filters).map(([cat, checked]) => (
                      <label key={cat} className="flex items-center space-x-3 cursor-pointer group">
                        <div 
                          onClick={() => setFilters({ ...filters, [cat]: !checked })}
                          className={`w-5 h-5 rounded-md border-2 transition-all flex items-center justify-center ${
                            checked ? 'bg-[#59ab6e] border-[#59ab6e]' : 'border-[#212934]/10 group-hover:border-[#59ab6e]/40'
                          }`}
                        >
                          {checked && <Check size={12} className="text-white" />}
                        </div>
                        <span className={`text-sm font-medium transition-colors ${checked ? 'text-[#212934]' : 'text-[#212934]/40'}`}>
                          {cat}
                        </span>
                      </label>
                    ))}
                  </div>
                  <button onClick={closeAll} className="w-full bg-[#212934] text-white py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest mt-6 hover:bg-black transition-all">
                    Apply Filters
                  </button>
                </div>
              </DropdownContainer>
            )}
          </AnimatePresence>
        </div>

        {/* Pattern D: Action Menu */}
        <div className="relative">
          <SectionLabel label="Contextual Action Menu" />
          <div className="p-6 bg-white border border-[#212934]/5 rounded-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#59ab6e]/10 rounded-xl flex items-center justify-center text-[#59ab6e]">
                <Archive size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#212934]">Inventory_Backup_01</p>
                <p className="text-[10px] text-[#212934]/40 font-bold uppercase tracking-widest">CSV • 2.4 MB</p>
              </div>
            </div>
            <button 
              onClick={() => toggleDropdown('actions')}
              className="p-2 hover:bg-[#212934]/5 rounded-lg transition-colors text-[#212934]/30 hover:text-[#212934]"
            >
              <MoreVertical size={20} />
            </button>
          </div>

          <AnimatePresence>
            {openDropdown === 'actions' && (
              <DropdownContainer>
                <div className="w-40 p-1">
                  {[
                    { icon: Edit, label: 'Edit' },
                    { icon: Copy, label: 'Duplicate' },
                    { icon: Archive, label: 'Archive', color: 'text-amber-600' },
                    { icon: Trash2, label: 'Delete', color: 'text-red-500' }
                  ].map((action) => (
                    <button 
                      key={action.label} 
                      onClick={closeAll}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#212934]/5 transition-colors ${action.color || 'text-[#212934]/70'}`}
                    >
                      <action.icon size={16} />
                      <span>{action.label}</span>
                    </button>
                  ))}
                </div>
              </DropdownContainer>
            )}
          </AnimatePresence>
        </div>

        {/* Pattern E: Status Selector */}
        <div className="relative">
          <SectionLabel label="Dynamic Status Selector" />
          <button 
            onClick={() => toggleDropdown('status')}
            className={`flex items-center space-x-2 px-4 py-2.5 border rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${
              status === 'Active' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
              status === 'Inactive' ? 'bg-red-50 border-red-200 text-red-700' :
              'bg-amber-50 border-amber-200 text-amber-700'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${status === 'Active' ? 'bg-emerald-500 animate-pulse' : status === 'Inactive' ? 'bg-red-500' : 'bg-amber-500'}`} />
            <span>{status} Status</span>
            <ChevronDown size={14} className={`opacity-40 transition-transform ${openDropdown === 'status' ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {openDropdown === 'status' && (
              <DropdownContainer>
                <div className="w-48 p-1">
                  {(['Active', 'Pending', 'Inactive'] as const).map(s => (
                    <button 
                      key={s} 
                      onClick={() => { setStatus(s); closeAll(); }}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-[#212934]/60 hover:bg-[#59ab6e]/5 hover:text-[#59ab6e] transition-all"
                    >
                      <div className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${s === 'Active' ? 'bg-emerald-500' : s === 'Inactive' ? 'bg-red-500' : 'bg-amber-500'}`} />
                        <span>{s}</span>
                      </div>
                      {status === s && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </DropdownContainer>
            )}
          </AnimatePresence>
        </div>

        {/* Pattern F: Nested / Sub-menu */}
        <div className="relative">
          <SectionLabel label="Nested / Sub-menu" />
          <button 
            onClick={() => toggleDropdown('nested')}
            className="flex items-center space-x-2 px-4 py-2.5 bg-[#212934] text-white rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-black shadow-lg shadow-[#212934]/20 transition-all"
          >
            <History size={16} className="text-[#59ab6e]" />
            <span>Sort Records By</span>
            <ChevronDown size={14} className={`opacity-40 transition-transform ${openDropdown === 'nested' ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {openDropdown === 'nested' && (
              <DropdownContainer>
                <div className="w-56 p-1 relative flex">
                  {/* Level 0 */}
                  <div className={`w-full transition-transform duration-300 ${nestedLevel === 1 ? '-translate-x-full opacity-0' : 'translate-x-0'}`}>
                    {[
                      { label: 'Recently Updated', hasSub: false },
                      { label: 'Date Created', hasSub: false },
                      { label: 'Price Range', hasSub: true },
                      { label: 'Inventory Level', hasSub: true }
                    ].map((item) => (
                      <button 
                        key={item.label}
                        onClick={() => item.hasSub ? setNestedLevel(1) : closeAll()}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#212934]/70 hover:bg-[#59ab6e]/10 hover:text-[#59ab6e] transition-colors"
                      >
                        <span>{item.label}</span>
                        {item.hasSub && <ArrowRight size={14} className="opacity-40" />}
                      </button>
                    ))}
                  </div>

                  {/* Level 1 (The Submenu) */}
                  <div className={`absolute top-1 left-0 w-full h-full bg-white transition-transform duration-300 ${nestedLevel === 1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
                    <button 
                      onClick={() => setNestedLevel(0)}
                      className="w-full flex items-center space-x-2 px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-[#212934]/40 hover:text-[#212934] transition-colors"
                    >
                      <ChevronDown size={12} className="rotate-90" />
                      <span>Back</span>
                    </button>
                    <div className="p-1">
                      {['Highest to Lowest', 'Lowest to Highest', 'Most Popular'].map(sub => (
                        <button key={sub} onClick={closeAll} className="w-full text-left px-3 py-2 text-sm font-medium text-[#212934]/70 hover:bg-[#59ab6e]/10 hover:text-[#59ab6e] rounded-lg transition-colors">
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </DropdownContainer>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Decorative / Informational Footer */}
      <div className="mt-20 p-8 bg-[#212934]/5 rounded-3xl border border-[#212934]/5 text-center">
        <SectionLabel label="Design Philosophy" />
        <h3 className="text-xl font-bold text-[#212934] mb-4">Selection is an Experience</h3>
        <p className="max-w-2xl mx-auto text-sm text-[#212934]/50 leading-relaxed">
          ZayFlow menus are designed to minimize cognitive load while maximizing functional depth. 
          By using soft shadows, high-contrast active states, and framer-motion animations, 
          we transform simple choices into delightful interactions.
        </p>
      </div>
    </div>
  );
};

// Internal icons helper for Action Menu since Trash2 wasn't imported in this local scope
const Trash2 = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>
  </svg>
);
