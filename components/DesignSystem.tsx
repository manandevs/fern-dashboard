
import React from 'react';
import { 
  Plus, Send, Trash2, ChevronRight, Loader2, Search, Settings, ArrowRight, RefreshCw, Palette, Layers, Box
} from 'lucide-react';
import { motion } from 'framer-motion';

const SectionHeader: React.FC<{ title: string; description: string; icon: any }> = ({ title, description, icon: Icon }) => (
  <div className="mb-10 flex items-start space-x-6">
    <div className="p-4 bg-[#212934] text-[#4d8b5f] rounded-[1.5rem] shadow-xl shadow-[#212934]/20"><Icon size={28} /></div>
    <div>
      <h2 className="text-3xl font-bold text-[#212934] tracking-tight">{title}</h2>
      <p className="text-base text-[#212934]/40 font-light mt-1">{description}</p>
    </div>
  </div>
);

const ComponentGroup: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white/60 border border-[#212934]/5 p-12 rounded-[3rem] mb-16 shadow-[0_15px_50px_rgba(0,0,0,0.02)]">
    <h3 className="text-[11px] font-black text-[#212934]/20 uppercase tracking-[0.4em] mb-10 border-l-4 border-[#4d8b5f] pl-4">{title}</h3>
    <div className="flex flex-wrap gap-10 items-center">
      {children}
    </div>
  </div>
);

const Label: React.FC<{ text: string }> = ({ text }) => (
  <span className="block mt-4 text-[10px] font-black text-[#212934]/30 uppercase text-center tracking-[0.2em]">{text}</span>
);

const FernButton: React.FC<{ 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  iconLeft?: any;
  iconRight?: any;
}> = ({ variant = 'primary', size = 'md', loading, disabled, children, iconLeft: IconLeft, iconRight: IconRight }) => {
  const base = "font-black rounded-2xl transition-all flex items-center justify-center space-x-3 active:scale-95 disabled:opacity-50 disabled:pointer-events-none uppercase tracking-widest";
  const variants = {
    primary: "bg-[#4d8b5f] text-white hover:bg-[#3a6b47] shadow-[0_15px_30px_rgba(77,139,95,0.3)]",
    secondary: "bg-[#212934] text-white hover:bg-black shadow-[0_15px_30px_rgba(33,41,52,0.3)]",
    outline: "bg-transparent border-2 border-[#4d8b5f] text-[#4d8b5f] hover:bg-[#4d8b5f]/5",
    ghost: "bg-transparent text-[#212934]/60 hover:bg-[#4d8b5f]/10 hover:text-[#4d8b5f]",
    danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-100"
  };
  const sizes = {
    sm: "px-6 py-3 text-[10px]",
    md: "px-8 py-4.5 text-xs",
    lg: "px-12 py-6 text-sm"
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      disabled={disabled || loading}
    >
      {loading ? <Loader2 size={18} className="animate-spin" /> : IconLeft && <IconLeft size={18} />}
      <span>{children}</span>
      {!loading && IconRight && <IconRight size={18} />}
    </motion.button>
  );
};

export const DesignSystem: React.FC = () => {
  return (
    <div className="space-y-24 pb-24 font-['Roboto']">
      <div className="max-w-3xl">
        <h1 className="text-5xl font-black text-[#212934] tracking-tight">Fern Visual Language</h1>
        <p className="text-xl text-[#212934]/40 font-light mt-4 leading-relaxed">The atomic components that define the Fern Ecosystem. Built for organic growth and high-end consistency.</p>
      </div>

      <section>
        <SectionHeader icon={Box} title="Interactions" description="Natural triggers for your management workflows." />
        <ComponentGroup title="Semantic Variants">
          <div className="flex flex-col items-center"><FernButton variant="primary">Root Action</FernButton><Label text="Primary" /></div>
          <div className="flex flex-col items-center"><FernButton variant="secondary">Dark Node</FernButton><Label text="Secondary" /></div>
          <div className="flex flex-col items-center"><FernButton variant="outline">Outline</FernButton><Label text="Ghost Outline" /></div>
        </ComponentGroup>
      </section>

      <section>
        <SectionHeader icon={RefreshCw} title="Temporal Cycles" description="Visual feedback during data synchronization." />
        <ComponentGroup title="Fern Pulsar">
          <div className="flex flex-col items-center">
            <Loader2 className="animate-spin text-[#4d8b5f]" size={48} strokeWidth={3} />
            <Label text="Cycle Indicator" />
          </div>
        </ComponentGroup>
      </section>

      <div className="mt-32 p-16 bg-[#212934] rounded-[4rem] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#4d8b5f]/15 rounded-full blur-[100px] -ml-48 -mt-48"></div>
        <div className="relative z-10">
          <Palette className="mx-auto text-[#4d8b5f] mb-8" size={64} />
          <h2 className="text-4xl font-black mb-6 tracking-tight">Rooted in Quality</h2>
          <p className="max-w-2xl mx-auto text-lg text-white/40 font-light leading-relaxed">
            Every pixel in Fern is governed by these primitives. We ensure every interaction feels like a premium extension of the brand's organic soul.
          </p>
        </div>
      </div>
    </div>
  );
};
