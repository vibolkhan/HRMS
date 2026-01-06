
import React, { useState } from 'react';
import { HelpCircle, ChevronRight, Plus, Home, Bus, Utensils, Edit3, ShieldAlert, Scale, Receipt, HeartPulse, Wallet } from 'lucide-react';
import { Employee } from '../types';

interface PayrollStructureProps {
  employee: Employee;
}

const PayrollStructure: React.FC<PayrollStructureProps> = ({ employee }) => {
  // Mock state for interactive demonstration
  const [earnings, setEarnings] = useState([
    { label: 'Basic Salary', desc: 'Fixed monthly', amount: 3500.00, icon: '💳', color: 'bg-blue-50 text-blue-600' },
    { label: 'Housing Allowance', desc: 'Taxable benefit', amount: 1000.00, icon: <Home className="w-4 h-4"/>, color: 'bg-orange-50 text-orange-600' },
    { label: 'Transport', desc: 'Flat rate', amount: 450.00, icon: <Bus className="w-4 h-4"/>, color: 'bg-purple-50 text-purple-600' },
    { label: 'Meal Allowance', desc: 'Daily calculation', amount: 300.00, icon: <Utensils className="w-4 h-4"/>, color: 'bg-yellow-50 text-yellow-600' },
  ]);

  const [deductions, setDeductions] = useState([
    { label: 'Income Tax (PAYE)', desc: '15% Progressive bracket', amount: 787.50, icon: <Scale className="w-4 h-4"/>, color: 'bg-red-50 text-red-600', isTax: true },
    { label: 'Social Security', desc: 'Mandatory contribution', amount: 102.50, icon: <ShieldAlert className="w-4 h-4"/>, color: 'bg-rose-50 text-rose-600', isTax: true },
    { label: 'Health Insurance', desc: 'Premium Plan B', amount: 150.00, icon: <HeartPulse className="w-4 h-4"/>, color: 'bg-pink-50 text-pink-600', isTax: false },
  ]);

  const totalEarnings = earnings.reduce((sum, item) => sum + item.amount, 0);
  const totalDeductions = deductions.reduce((sum, item) => sum + item.amount, 0);
  const netPay = totalEarnings - totalDeductions;

  return (
    <div className="bg-gray-50 min-h-full pb-8 animate-in fade-in duration-300">
      {/* Context Header */}
      <div className="bg-white p-4 flex items-center gap-3 border-b sticky top-0 z-20">
        <img 
          src={`https://picsum.photos/seed/${employee.id}/100/100`} 
          alt={employee.name} 
          className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-50"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-900">{employee.name}</h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Configuring Salary Structure</p>
        </div>
      </div>

      {/* Header Summary Card */}
      <div className="bg-white p-4 space-y-4 border-b shadow-sm">
        <div className="flex gap-4">
          <div className="flex-1 bg-gray-50 p-4 rounded-2xl border flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Gross Pay</span>
              <HelpCircle className="w-3 h-3 text-gray-300" />
            </div>
            <span className="text-xl font-black text-gray-900">${totalEarnings.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
          <div className="flex-1 bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-100 flex flex-col gap-1 text-white">
            <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">Net Pay</span>
            <span className="text-xl font-black">${netPay.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-8">
        {/* Earnings */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center">
                <Wallet className="w-4 h-4 text-green-600" />
              </div>
              <h3 className="text-lg font-black text-gray-900">Earnings</h3>
            </div>
            <span className="text-green-500 font-bold text-sm">+${totalEarnings.toLocaleString()}</span>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm divide-y overflow-hidden">
            {earnings.map((item, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm">${item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  <Edit3 className="w-4 h-4 text-gray-300 group-hover:text-blue-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-blue-600 font-bold text-sm hover:bg-blue-50 hover:border-blue-200 transition-all">
            <Plus className="w-4 h-4" /> Add Earning Component
          </button>
        </section>

        {/* Deductions - Tax & Statutory */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center">
                <Receipt className="w-4 h-4 text-red-600" />
              </div>
              <h3 className="text-lg font-black text-gray-900">Tax & Deductions</h3>
            </div>
            <span className="text-red-500 font-bold text-sm">-${totalDeductions.toLocaleString()}</span>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm divide-y overflow-hidden">
            {deductions.map((item, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between group cursor-pointer hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                      {item.isTax && (
                        <span className="text-[8px] bg-red-100 text-red-600 px-1 py-0.5 rounded font-black uppercase tracking-tighter">Statutory</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-red-500 text-sm">-${item.amount.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                  <Edit3 className="w-4 h-4 text-gray-300 group-hover:text-red-500 transition-colors" />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-red-600 font-bold text-sm hover:bg-red-50 hover:border-red-200 transition-all">
            <Plus className="w-4 h-4" /> Add Deduction Component
          </button>
        </section>

        {/* Final Calculation */}
        <section className="bg-white p-6 rounded-3xl border shadow-lg space-y-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
          
          <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Total Monthly Earnings</span>
              <span className="text-gray-900 font-bold">${totalEarnings.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-500 font-medium">Total Statutory Deductions</span>
              <span className="text-red-500 font-bold">-${totalDeductions.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
            
            <div className="pt-4 border-t flex flex-col gap-1 items-end">
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Final Take-Home Pay</span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black text-blue-600">${netPay.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                <span className="text-xs text-blue-400 font-bold">USD</span>
              </div>
            </div>
          </div>
        </section>

        <div className="flex gap-3">
          <button className="flex-1 py-4 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 transition-colors">
            Cancel
          </button>
          <button className="flex-[2] py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
            Save Structure
          </button>
        </div>
      </div>
    </div>
  );
};

export default PayrollStructure;
