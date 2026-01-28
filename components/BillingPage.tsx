
import React from 'react';
import { CreditCard, Download, Plus, Star, CheckCircle2, ChevronRight, ShieldCheck, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const invoices = [
  { id: 'FERN-INV-990', date: 'Nov 01, 2023', amount: '$29.00', status: 'Paid', method: 'Visa ending 4242' },
  { id: 'FERN-INV-989', date: 'Oct 01, 2023', amount: '$29.00', status: 'Paid', method: 'Visa ending 4242' },
  { id: 'FERN-INV-988', date: 'Sep 01, 2023', amount: '$29.00', status: 'Paid', method: 'Apple Pay' },
  { id: 'FERN-INV-987', date: 'Aug 01, 2023', amount: '$29.00', status: 'Paid', method: 'Visa ending 4242' },
];

export const BillingPage: React.FC = () => {
  return (
    <div className="space-y-10 pb-16 font-['Roboto']">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-[#212934]">Ecosystem Subscriptions</h1>
          <p className="text-[#212934]/60 font-light mt-1 text-lg">Manage your Fern network fuel and transaction history.</p>
        </div>
        <button className="flex items-center justify-center space-x-3 bg-white border-2 border-[#212934]/5 hover:bg-[#212934]/5 text-[#212934]/60 px-8 py-4 rounded-[1.5rem] font-bold transition-all shadow-sm active:scale-95 group">
          <Download size={20} className="group-hover:-translate-y-0.5 transition-transform" />
          <span>Annual Report (2023)</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 space-y-10">
          <div className="bg-[#212934] p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#4d8b5f]/15 rounded-full blur-[80px] -mr-28 -mt-28 group-hover:bg-[#4d8b5f]/25 transition-all duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-10">
                <span className="px-5 py-2 bg-[#4d8b5f] text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg">Verdant Tier</span>
                <Star className="text-[#4d8b5f] fill-[#4d8b5f]" size={28} />
              </div>
              <h3 className="text-4xl font-bold mb-3 tracking-tight">Fern Pro</h3>
              <p className="text-white/40 text-sm font-light mb-12 max-w-[200px]">Full ecological data suite and unlimited node connections enabled.</p>
              
              <div className="flex items-baseline space-x-3 mb-12">
                <span className="text-6xl font-black">$29</span>
                <span className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">/ cycle</span>
              </div>

              <button className="w-full bg-white text-[#212934] py-5 rounded-[2rem] font-bold transition-all hover:bg-[#4d8b5f] hover:text-white shadow-xl active:scale-95 flex items-center justify-center space-x-2 group">
                <span>Manage Sub</span>
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-white p-10 rounded-[3rem] border border-[#212934]/5 shadow-[0_15px_50px_rgba(33,41,52,0.04)]">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-bold text-[#212934]">Payment Methods</h2>
              <button className="p-3 bg-[#4d8b5f]/10 text-[#4d8b5f] rounded-2xl hover:bg-[#4d8b5f] hover:text-white transition-all shadow-sm"><Plus size={22} /></button>
            </div>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-6 rounded-[2rem] border-2 border-[#4d8b5f] bg-[#4d8b5f]/5 relative group overflow-hidden">
                <div className="flex items-center space-x-5 relative z-10">
                  <div className="w-14 h-10 bg-[#212934] rounded-lg flex items-center justify-center text-white font-black text-[11px] shadow-lg">VISA</div>
                  <div>
                    <p className="text-base font-bold text-[#212934]">•••• 4242</p>
                    <p className="text-[10px] text-[#212934]/30 font-bold uppercase tracking-widest mt-1">Exp 12/25</p>
                  </div>
                </div>
                <CheckCircle2 className="text-[#4d8b5f] relative z-10" size={24} />
                <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </div>
            </div>
            <div className="mt-10 flex items-start space-x-4 p-5 bg-[#4d8b5f]/5 rounded-2xl border border-[#4d8b5f]/10">
              <ShieldCheck size={20} className="text-[#4d8b5f] shrink-0 mt-0.5" />
              <p className="text-[11px] font-medium text-[#212934]/60 leading-relaxed">Financial data is tokenized using Fern Secure protocols. PCI-DSS compliant.</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="bg-white p-12 rounded-[3.5rem] border border-[#212934]/5 shadow-[0_15px_60px_rgba(33,41,52,0.03)] h-full">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-2xl font-bold text-[#212934]">Record Vault</h2>
              <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">
                <DollarSign size={14} className="text-[#4d8b5f]" />
                <span>USD Currency</span>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#212934]/5">
                    <th className="pb-8 text-[11px] font-black uppercase tracking-[0.3em] text-[#212934]/20 px-4">Identifier</th>
                    <th className="pb-8 text-[11px] font-black uppercase tracking-[0.3em] text-[#212934]/20 px-4">Date</th>
                    <th className="pb-8 text-[11px] font-black uppercase tracking-[0.3em] text-[#212934]/20 px-4">Amount</th>
                    <th className="pb-8 text-[11px] font-black uppercase tracking-[0.3em] text-[#212934]/20 px-4 text-center">Status</th>
                    <th className="pb-8 text-[11px] font-black uppercase tracking-[0.3em] text-[#212934]/20 px-4 text-right">PDF</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#212934]/5">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="group hover:bg-[#4d8b5f]/5 transition-all duration-500">
                      <td className="py-8 px-4">
                        <span className="text-base font-bold text-[#212934] group-hover:text-[#4d8b5f] transition-colors">{inv.id}</span>
                        <p className="text-[10px] text-[#212934]/30 font-bold uppercase mt-1">{inv.method}</p>
                      </td>
                      <td className="py-8 px-4 text-sm font-medium text-[#212934]/50">{inv.date}</td>
                      <td className="py-8 px-4 text-lg font-black text-[#212934]">{inv.amount}</td>
                      <td className="py-8 px-4">
                        <div className="flex justify-center">
                          <span className="px-5 py-1.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-[0.15em] shadow-sm">
                            {inv.status}
                          </span>
                        </div>
                      </td>
                      <td className="py-8 px-4 text-right">
                        <button className="p-3 bg-white border border-[#212934]/5 hover:bg-[#4d8b5f] hover:text-white text-[#212934]/40 rounded-2xl transition-all shadow-sm hover:shadow-lg active:scale-90 group">
                          <Download size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
