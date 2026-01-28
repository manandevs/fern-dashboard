
import React from 'react';
import { Order } from '../types';

const mockOrders: Order[] = [
  { id: 'ORD001', name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/150?u=alice', product: 'Zay Sport Watch', amount: '$250', status: 'Delivered', date: '20 Oct, 2023' },
  { id: 'ORD002', name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?u=mike', product: 'Leather Urban Boots', amount: '$480', status: 'Processing', date: '21 Oct, 2023' },
  { id: 'ORD003', name: 'Sarah Miller', avatar: 'https://i.pravatar.cc/150?u=sarah', product: 'Neo Gym Weights', amount: '$120', status: 'Shipped', date: '22 Oct, 2023' },
  { id: 'ORD004', name: 'David Ross', avatar: 'https://i.pravatar.cc/150?u=david', product: 'Elite Activewear', amount: '$95', status: 'Delivered', date: '22 Oct, 2023' },
  { id: 'ORD005', name: 'Elena Belova', avatar: 'https://i.pravatar.cc/150?u=elena', product: 'Pro Wireless Pods', amount: '$150', status: 'Processing', date: '23 Oct, 2023' },
];

export const OrderTable: React.FC = () => {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-100 text-emerald-700';
      case 'Processing': return 'bg-blue-100 text-blue-700';
      case 'Shipped': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <table className="w-full text-left border-collapse min-w-[600px]">
      <thead>
        <tr className="border-b border-[#212934]/5">
          <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">ID</th>
          <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">Customer</th>
          <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30">Product</th>
          <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30 text-right">Amount</th>
          <th className="pb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#212934]/30 text-center">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-[#212934]/5">
        {mockOrders.map((order) => (
          <tr key={order.id} className="group hover:bg-[#59ab6e]/5 transition-all duration-300 ease-in-out">
            <td className="py-5 text-sm font-medium text-[#212934]/40 transition-colors group-hover:text-[#212934]">{order.id}</td>
            <td className="py-5">
              <div className="flex items-center space-x-3">
                <img src={order.avatar} alt={order.name} className="w-9 h-9 rounded-xl shadow-sm border border-transparent group-hover:border-[#59ab6e]/20 transition-all" />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#212934]">{order.name}</span>
                  <span className="text-[10px] text-[#212934]/30 font-bold uppercase">{order.date}</span>
                </div>
              </div>
            </td>
            <td className="py-5 text-sm text-[#212934]/60">{order.product}</td>
            <td className="py-5 text-sm font-bold text-[#212934] text-right">{order.amount}</td>
            <td className="py-5">
              <div className="flex justify-center">
                <span className={`px-4 py-1.5 rounded-xl text-[10px] font-bold uppercase tracking-wider ${getStatusStyles(order.status)}`}>
                  {order.status}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
