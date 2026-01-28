
import React, { useState } from 'react';
// Add missing Activity and ArrowRight imports from lucide-react
import { User, Shield, Bell, Globe, Mail, Lock, Smartphone, CheckCircle2, ChevronRight, Palette, Fingerprint, Activity, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SettingsTab = 'account' | 'security' | 'notifications';

export const SettingsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingsTab>('account');
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(false);

  const tabs = [
    { id: 'account', label: 'Account', icon: User, desc: 'Public profile settings' },
    { id: 'security', label: 'Security', icon: Shield, desc: 'Vault and protection' },
    { id: 'notifications', label: 'Alerts', icon: Bell, desc: 'Communication logic' },
  ];

  const ZayToggle = ({ enabled, setEnabled }: { enabled: boolean, setEnabled: (v: boolean) => void }) => (
    <button 
      onClick={() => setEnabled(!enabled)}
      className={`w-14 h-8 rounded-full p-1 transition-all duration-300 ${enabled ? 'bg-[#59ab6e]' : 'bg-[#212934]/10'}`}
    >
      <motion.div animate={{ x: enabled ? 24 : 0 }} className="w-6 h-6 bg-white rounded-full shadow-lg" />
    </button>
  );

  return (
    <div className="space-y-10 pb-16 font-['Roboto']">
      <div>
        <h1 className="text-3xl font-bold text-[#212934]">Command Preferences</h1>
        <p className="text-[#212934]/60 font-light mt-1 text-lg">Configure your ZayFlow experience and security architecture.</p>
      </div>

      <div className="bg-white rounded-[3rem] border border-[#212934]/5 shadow-[0_25px_80px_-15px_rgba(33,41,52,0.06)] overflow-hidden flex flex-col lg:flex-row min-h-[700px]">
        {/* Sidebar Tabs */}
        <div className="lg:w-80 bg-[#f9fafb] border-r border-[#212934]/5 p-10 space-y-4">
          <SectionLabel label="Settings Modules" />
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as SettingsTab)}
              className={`w-full flex items-center space-x-4 px-6 py-5 rounded-[1.5rem] transition-all text-left ${
                activeTab === tab.id 
                  ? 'bg-white text-[#59ab6e] shadow-[0_15px_30px_rgba(0,0,0,0.04)] font-bold border border-[#59ab6e]/5' 
                  : 'text-[#212934]/40 hover:bg-[#212934]/5 font-medium'
              }`}
            >
              <div className={`p-2.5 rounded-xl ${activeTab === tab.id ? 'bg-[#59ab6e]/10' : 'bg-transparent'}`}>
                <tab.icon size={22} />
              </div>
              <div>
                <p className="text-sm leading-none">{tab.label}</p>
                <p className="text-[10px] mt-1 opacity-60 uppercase tracking-widest">{tab.desc}</p>
              </div>
            </button>
          ))}
          
          <div className="mt-24 p-8 bg-[#212934] rounded-[2rem] text-white relative overflow-hidden hidden lg:block">
            <div className="absolute top-0 right-0 w-28 h-28 bg-[#59ab6e]/20 rounded-full blur-2xl -mr-14 -mt-14"></div>
            <Fingerprint className="text-[#59ab6e] mb-5" size={32} />
            <p className="text-base font-bold leading-tight">Privacy Core v2.5</p>
            <p className="text-[10px] text-white/30 mt-2 uppercase tracking-[0.2em] font-medium leading-relaxed">Active encryption protocols protecting your records.</p>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-10 md:p-16 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {activeTab === 'account' && (
                <div className="space-y-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-[#212934]">Account Identity</h2>
                      <p className="text-[#212934]/40 font-light mt-1">Update your professional store persona.</p>
                    </div>
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-[#59ab6e] border border-emerald-100">
                      <User size={24} />
                    </div>
                  </div>

                  <div className="flex items-center space-x-10">
                    <img src="https://i.pravatar.cc/150?u=sophia" className="w-32 h-32 rounded-[2.5rem] shadow-2xl ring-8 ring-[#59ab6e]/5 object-cover" alt="Profile" />
                    <div className="space-y-3">
                      <button className="bg-[#212934] text-white px-8 py-3.5 rounded-2xl font-bold text-sm hover:bg-black transition-all shadow-lg active:scale-95">Change Avatar</button>
                      <p className="text-[10px] text-[#212934]/30 uppercase font-bold tracking-widest ml-1">PNG or JPG • Max 5MB</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1">Full Legal Name</label>
                      <input type="text" defaultValue="Sophia Zay" className="w-full bg-[#212934]/5 border-2 border-transparent rounded-[1.5rem] px-6 py-4 outline-none focus:bg-white focus:border-[#59ab6e]/30 focus:ring-8 focus:ring-[#59ab6e]/5 transition-all text-sm font-medium" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1">Work Email Address</label>
                      <input type="email" defaultValue="sophia@zayflow.com" className="w-full bg-[#212934]/5 border-2 border-transparent rounded-[1.5rem] px-6 py-4 outline-none focus:bg-white focus:border-[#59ab6e]/30 focus:ring-8 focus:ring-[#59ab6e]/5 transition-all text-sm font-medium" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1">Short Mission Statement</label>
                      <textarea rows={4} className="w-full bg-[#212934]/5 border-2 border-transparent rounded-[1.5rem] px-6 py-4 outline-none focus:bg-white focus:border-[#59ab6e]/30 focus:ring-8 focus:ring-[#59ab6e]/5 transition-all text-sm font-medium resize-none custom-textarea-scrollbar" defaultValue="Managing global logistics for curated boutiques."></textarea>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#212934]/5">
                    <button className="bg-[#59ab6e] text-white px-10 py-5 rounded-[2rem] font-bold shadow-2xl shadow-[#59ab6e]/30 transition-all flex items-center space-x-3 active:scale-[0.98] group">
                      <span>Synchronize Profile</span>
                      <CheckCircle2 size={20} className="group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="space-y-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-[#212934]">Security Architecture</h2>
                      <p className="text-[#212934]/40 font-light mt-1">Fortify your command access.</p>
                    </div>
                    <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center text-red-500 border border-red-100">
                      <Shield size={24} />
                    </div>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-amber-50 border-2 border-amber-100/50 flex items-start space-x-6">
                    <div className="p-3 bg-white rounded-2xl text-amber-600 shadow-sm"><Lock size={24} /></div>
                    <div>
                      <p className="text-base font-bold text-amber-900">Credential Refresh Suggested</p>
                      <p className="text-sm text-amber-800/60 font-medium mt-1">Your primary access token was generated 180 days ago. Rotating passwords enhances enterprise safety.</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="flex items-center justify-between p-10 rounded-[2.5rem] border-2 border-[#212934]/10 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.02)] group hover:border-[#59ab6e]/20 transition-all">
                      <div className="flex items-center space-x-6">
                        <div className="w-16 h-16 bg-[#59ab6e]/10 text-[#59ab6e] rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Smartphone size={32} />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-[#212934]">Two-Factor Authentication</p>
                          <p className="text-sm text-[#212934]/40 font-medium mt-1">Verify logins via your trusted mobile device.</p>
                        </div>
                      </div>
                      <ZayToggle enabled={twoFactor} setEnabled={setTwoFactor} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                       <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1">New Password</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-[#212934]/5 border-2 border-transparent rounded-[1.5rem] px-6 py-4 outline-none focus:border-[#59ab6e]/30 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-[#212934]/40 uppercase tracking-[0.2em] ml-1">Confirm Update</label>
                        <input type="password" placeholder="••••••••" className="w-full bg-[#212934]/5 border-2 border-transparent rounded-[1.5rem] px-6 py-4 outline-none focus:border-[#59ab6e]/30 transition-all" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#212934]/5">
                    <button className="bg-[#212934] text-white px-10 py-5 rounded-[2rem] font-bold shadow-2xl shadow-[#212934]/20 transition-all active:scale-[0.98] flex items-center space-x-3">
                      <Shield size={20} className="text-[#59ab6e]" />
                      <span>Apply Security Hardening</span>
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-12">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-[#212934]">Alert Logic</h2>
                      <p className="text-[#212934]/40 font-light mt-1">Determine how ZayFlow speaks to you.</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 border border-blue-100">
                      <Bell size={24} />
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      { state: emailAlerts, setState: setEmailAlerts, label: 'Email Intelligence', desc: 'Performance reports and growth insights delivered weekly.', icon: Mail },
                      { state: pushNotifs, setState: setPushNotifs, label: 'Real-time Pulsations', desc: 'Instant desktop alerts for inventory changes and order surges.', icon: Activity },
                    ].map((n, i) => (
                      <div key={i} className="flex items-center justify-between p-10 rounded-[2.5rem] bg-white border border-[#212934]/5 shadow-sm hover:shadow-lg transition-all group">
                        <div className="flex items-center space-x-8">
                          <div className="w-14 h-14 bg-[#212934]/5 text-[#212934]/20 group-hover:text-[#59ab6e] group-hover:bg-[#59ab6e]/5 rounded-2xl flex items-center justify-center transition-all">
                            <n.icon size={28} />
                          </div>
                          <div>
                            <p className="text-lg font-bold text-[#212934]">{n.label}</p>
                            <p className="text-sm text-[#212934]/40 font-medium mt-1">{n.desc}</p>
                          </div>
                        </div>
                        <ZayToggle enabled={n.state} setEnabled={n.setState} />
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-[#212934]/5">
                    <button className="bg-[#59ab6e] text-white px-10 py-5 rounded-[2rem] font-bold shadow-2xl shadow-[#59ab6e]/30 transition-all flex items-center space-x-3 active:scale-[0.98] group">
                      <span>Update Notification Engine</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const SectionLabel: React.FC<{ label: string }> = ({ label }) => (
  <p className="text-[11px] font-black text-[#212934]/20 uppercase tracking-[0.3em] mb-4 ml-2">{label}</p>
);
