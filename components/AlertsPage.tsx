
import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, 
  AlertTriangle, 
  AlertCircle, 
  Info, 
  X, 
  Trash2, 
  Bell, 
  ChevronRight,
  CreditCard,
  Gift,
  PartyPopper
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type AlertType = 'success' | 'warning' | 'error' | 'info';

interface BannerProps {
  type: AlertType;
  message: string;
  onClose?: () => void;
}

const Banner: React.FC<BannerProps> = ({ type, message, onClose }) => {
  const styles = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-800 icon-emerald-500',
    warning: 'bg-amber-50 border-amber-200 text-amber-800 icon-amber-500',
    error: 'bg-red-50 border-red-200 text-red-800 icon-red-500',
    info: 'bg-blue-50 border-blue-200 text-blue-800 icon-blue-500'
  };

  const icons = {
    success: CheckCircle,
    warning: AlertTriangle,
    error: AlertCircle,
    info: Info
  };

  const Icon = icons[type];

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex items-center justify-between p-4 rounded-xl border ${styles[type]} shadow-sm`}
    >
      <div className="flex items-center space-x-3">
        <Icon size={20} className="shrink-0" />
        <span className="text-sm font-medium">{message}</span>
      </div>
      {onClose && (
        <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-lg transition-colors">
          <X size={16} />
        </button>
      )}
    </motion.div>
  );
};

interface Toast {
  id: number;
  message: string;
  type: AlertType;
}

export const AlertsPage: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: AlertType, message: string) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const renderModal = () => (
    <AnimatePresence>
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModal(null)}
            className="absolute inset-0 bg-[#212934]/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.2)] overflow-hidden"
          >
            {activeModal === 'confirm' && (
              <div className="p-8">
                <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-500 mb-6">
                  <Trash2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-[#212934] mb-2">Delete Product?</h3>
                <p className="text-[#212934]/60 font-light mb-8">Are you sure you want to remove this item? This action is permanent and cannot be reversed.</p>
                <div className="flex space-x-3">
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="flex-1 px-6 py-3.5 bg-[#212934]/5 text-[#212934]/60 font-bold rounded-2xl hover:bg-[#212934]/10 transition-all"
                  >
                    Cancel
                  </button>
                  <button className="flex-1 px-6 py-3.5 bg-red-500 text-white font-bold rounded-2xl hover:bg-red-600 shadow-lg shadow-red-500/20 transition-all">
                    Delete
                  </button>
                </div>
              </div>
            )}

            {activeModal === 'success' && (
              <div className="p-8 text-center">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-[#59ab6e] mx-auto mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    <PartyPopper size={40} />
                  </motion.div>
                </div>
                <h3 className="text-2xl font-bold text-[#212934] mb-2">Payment Received</h3>
                <p className="text-[#212934]/60 font-light mb-8">Order #ZAY-9921 has been successfully processed and added to your shipments.</p>
                <button 
                  onClick={() => setActiveModal(null)}
                  className="w-full px-6 py-3.5 bg-[#59ab6e] text-white font-bold rounded-2xl hover:bg-[#4a8f5c] shadow-lg shadow-[#59ab6e]/20 transition-all"
                >
                  Back to Dashboard
                </button>
              </div>
            )}

            {activeModal === 'promo' && (
              <div>
                <div className="relative h-48 bg-[#212934]">
                  <img src="https://picsum.photos/600/400?seed=promo" className="w-full h-full object-cover opacity-60" alt="Promo" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#212934] to-transparent" />
                  <button 
                    onClick={() => setActiveModal(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all"
                  >
                    <X size={18} />
                  </button>
                  <div className="absolute bottom-4 left-6">
                    <span className="px-3 py-1 bg-[#59ab6e] text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-lg">Limited Time</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#212934] mb-2">ZayFlow Premium 50% Off</h3>
                  <p className="text-[#212934]/60 font-light mb-8">Unlock advanced AI analytics and unlimited store integrations today. Only for loyal owners.</p>
                  <button className="w-full px-6 py-4 bg-[#212934] text-white font-bold rounded-2xl hover:bg-black transition-all flex items-center justify-center space-x-2">
                    <span>Claim Discount</span>
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="space-y-12 pb-24">
      {renderModal()}
      
      {/* Toast Stack */}
      <div className="fixed top-8 right-8 z-[110] flex flex-col space-y-3 w-80">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: 50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.9 }}
              className={`p-4 bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-[#212934]/5 flex items-center space-x-3 overflow-hidden relative group`}
            >
              <div className={`w-1.5 absolute left-0 top-0 bottom-0 ${
                toast.type === 'success' ? 'bg-emerald-500' : 
                toast.type === 'warning' ? 'bg-amber-500' : 
                toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
              }`} />
              <div className={`p-2 rounded-xl ${
                toast.type === 'success' ? 'bg-emerald-50 text-emerald-600' : 
                toast.type === 'warning' ? 'bg-amber-50 text-amber-600' : 
                toast.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
              }`}>
                {toast.type === 'success' ? <CheckCircle size={18} /> : 
                 toast.type === 'warning' ? <AlertTriangle size={18} /> : 
                 toast.type === 'error' ? <AlertCircle size={18} /> : <Info size={18} />}
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold text-[#212934]">{toast.message}</p>
                <p className="text-[10px] text-[#212934]/40 font-medium">Just now</p>
              </div>
              <div className="absolute bottom-0 left-0 h-1 bg-[#212934]/5 w-full">
                <motion.div 
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 4, ease: "linear" }}
                  className={`h-full ${
                    toast.type === 'success' ? 'bg-emerald-500' : 
                    toast.type === 'warning' ? 'bg-amber-500' : 
                    toast.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#212934]">Feedback & Notifications</h1>
        <p className="text-[#212934]/60 font-light">Sophisticated mechanisms to keep users informed and engaged.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Inline Banners Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-xl font-bold text-[#212934]">Inline Banners</h2>
            <div className="h-[1px] flex-1 bg-[#212934]/5" />
          </div>
          <Banner type="success" message="Profile updated successfully. Your changes are live." onClose={() => {}} />
          <Banner type="warning" message="Subscription expiring in 3 days. Please update billing info." />
          <Banner type="error" message="Failed to sync inventory data. Connection timed out." />
          <Banner type="info" message="New system update available. Version 2.5 is ready for install." />
        </div>

        {/* Modal Triggers Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 mb-2">
            <h2 className="text-xl font-bold text-[#212934]">Triggerable Modals</h2>
            <div className="h-[1px] flex-1 bg-[#212934]/5" />
          </div>
          <div className="bg-white p-8 rounded-3xl border border-[#212934]/5 shadow-[0_10px_40px_rgba(0,0,0,0.03)] space-y-4">
            <button 
              onClick={() => setActiveModal('confirm')}
              className="w-full flex items-center justify-between p-4 bg-red-50 hover:bg-red-100/80 rounded-2xl transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-red-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20">
                  <Trash2 size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-red-700">Dangerous Action</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-red-500/60">Requires Confirmation</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-red-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => setActiveModal('success')}
              className="w-full flex items-center justify-between p-4 bg-emerald-50 hover:bg-emerald-100/80 rounded-2xl transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#59ab6e] text-white rounded-xl flex items-center justify-center shadow-lg shadow-[#59ab6e]/20">
                  <CheckCircle size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-emerald-700">Success Feedback</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500/60">Celebration State</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-emerald-300 group-hover:translate-x-1 transition-transform" />
            </button>

            <button 
              onClick={() => setActiveModal('promo')}
              className="w-full flex items-center justify-between p-4 bg-[#212934]/5 hover:bg-[#212934]/10 rounded-2xl transition-all group"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-[#212934] text-white rounded-xl flex items-center justify-center shadow-lg">
                  <Gift size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-[#212934]">Promotional Popover</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#212934]/40">Upsell Pattern</p>
                </div>
              </div>
              <ChevronRight size={20} className="text-[#212934]/20 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Toasts Section */}
      <section className="bg-white p-12 rounded-[2rem] border border-[#212934]/5 shadow-[0_20px_60px_rgba(0,0,0,0.05)] text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#59ab6e]/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="relative z-10">
          <Bell size={48} className="mx-auto text-[#59ab6e] mb-6 animate-bounce" />
          <h2 className="text-2xl font-bold text-[#212934] mb-4">Toast Notification System</h2>
          <p className="max-w-xl mx-auto text-[#212934]/50 font-light mb-10 leading-relaxed">
            Test the real-time feedback system. These notifications appear anchored to the viewport 
            and dismiss themselves automatically using a smooth progress timer.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => addToast('success', 'New order confirmed!')}
              className="px-6 py-3 bg-white border border-emerald-200 text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-sm"
            >
              Trigger Success
            </button>
            <button 
              onClick={() => addToast('warning', 'Low stock detected.')}
              className="px-6 py-3 bg-white border border-amber-200 text-amber-700 font-bold rounded-2xl hover:bg-amber-50 transition-all shadow-sm"
            >
              Trigger Warning
            </button>
            <button 
              onClick={() => addToast('error', 'API Connection Error.')}
              className="px-6 py-3 bg-white border border-red-200 text-red-700 font-bold rounded-2xl hover:bg-red-50 transition-all shadow-sm"
            >
              Trigger Error
            </button>
            <button 
              onClick={() => addToast('info', 'System maintenance tonight.')}
              className="px-6 py-3 bg-white border border-blue-200 text-blue-700 font-bold rounded-2xl hover:bg-blue-50 transition-all shadow-sm"
            >
              Trigger Info
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
