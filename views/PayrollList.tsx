
import React, { useState } from 'react';
import { Search, Filter, CheckCircle2, AlertCircle, ChevronRight, DollarSign, Download } from 'lucide-react';
import { Employee } from '../types';

interface PayrollListProps {
  employees: Employee[];
  onSelectEmployee: (id: string) => void;
}

const PayrollList: React.FC<PayrollListProps> = ({ employees, onSelectEmployee }) => {
  const [filter, setFilter] = useState<'All' | 'Paid' | 'Pending'>('All');

  // Simulated payroll data for the list
  const payrollData = employees.map(emp => ({
    ...emp,
    netPay: (Math.random() * 2000 + 3000).toFixed(2),
    status: Math.random() > 0.4 ? 'Paid' : 'Pending',
  }));

  const filteredData = payrollData.filter(p => filter === 'All' || p.status === filter);
  const totalNet = payrollData.reduce((acc, curr) => acc + parseFloat(curr.netPay), 0).toLocaleString();

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Summary Card */}
      <div className="p-4 bg-white border-b shadow-sm space-y-4">
        <div className="bg-blue-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-100 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Total Monthly Payroll (Oct)</p>
            <div className="flex items-baseline gap-2 mt-1">
              <h2 className="text-3xl font-black">${totalNet}</h2>
              <span className="text-blue-200 text-xs font-medium">USD</span>
            </div>
            <div className="flex gap-4 mt-6">
              <div className="flex-1 bg-white/10 rounded-2xl p-3">
                <p className="text-[10px] font-bold text-blue-100 uppercase">Gross</p>
                <p className="text-lg font-bold">$182,400</p>
              </div>
              <div className="flex-1 bg-white/10 rounded-2xl p-3">
                <p className="text-[10px] font-bold text-blue-100 uppercase">Headcount</p>
                <p className="text-lg font-bold">{employees.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Global Actions */}
        <div className="flex gap-3">
          <button className="flex-1 py-3 bg-gray-50 text-gray-700 font-bold text-sm rounded-xl border border-gray-200 flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Export
          </button>
          <button className="flex-1 py-3 bg-blue-50 text-blue-600 font-bold text-sm rounded-xl border border-blue-100 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Process All
          </button>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="px-4 py-3 flex items-center gap-2 overflow-x-auto scrollbar-hide">
        {['All', 'Paid', 'Pending'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f as any)}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${
              filter === f ? 'bg-gray-900 text-white border-gray-900' : 'bg-white text-gray-500 border-gray-200'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-3">
        {filteredData.map((item) => (
          <div 
            key={item.id}
            onClick={() => onSelectEmployee(item.id)}
            className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer"
          >
            <img 
              src={`https://picsum.photos/seed/${item.id}/80/80`} 
              className="w-12 h-12 rounded-full object-cover" 
              alt=""
            />
            <div className="flex-1">
              <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{item.role}</p>
            </div>
            <div className="text-right">
              <p className="font-black text-gray-900 text-sm">${item.netPay}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                {item.status === 'Paid' ? (
                  <>
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span className="text-[10px] font-bold text-green-600 uppercase">Paid</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3 h-3 text-orange-400" />
                    <span className="text-[10px] font-bold text-orange-500 uppercase">Pending</span>
                  </>
                )}
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-300 ml-1" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PayrollList;
