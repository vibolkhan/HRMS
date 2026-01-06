
import React from 'react';
import { HelpCircle, ChevronRight, Plus, Home, Bus, Utensils, Edit3, ShieldAlert } from 'lucide-react';
import { Employee } from '../types';

interface PayrollStructureProps {
  employee: Employee;
}

const PayrollStructure: React.FC<PayrollStructureProps> = ({ employee }) => {
  return (
    <div className="bg-gray-50 min-h-full pb-8">
      {/* Context Header */}
      <div className="bg-white p-4 flex items-center gap-3 border-b">
        <img 
          src={`https://picsum.photos/seed/${employee.id}/100/100`} 
          alt={employee.name} 
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-bold text-gray-900">{employee.name}</h3>
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Global Salary Structure</p>
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
            <span className="text-xl font-black text-gray-900">$5,250.00</span>
          </div>
          <div className="flex-1 bg-blue-600 p-4 rounded-2xl shadow-lg shadow-blue-100 flex flex-col gap-1 text-white">
            <span className="text-[10px] font-bold text-blue-100 uppercase tracking-widest">Net Pay</span>
            <span className="text-xl font-black">$4,360.00</span>
          </div>
        </div>
      </div>

      <div className="p-4 space-y-8">
        {/* Earnings */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-black text-gray-900">Earnings</h3>
            <span className="text-green-500 font-bold text-sm">+$5,250.00</span>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm divide-y">
            {[
              { label: 'Basic Salary', desc: 'Fixed monthly', amount: '$3,500.00', icon: '💳', color: 'bg-blue-50 text-blue-600' },
              { label: 'Housing Allowance', desc: 'Taxable benefit', amount: '$1,000.00', icon: <Home className="w-4 h-4"/>, color: 'bg-orange-50 text-orange-600' },
              { label: 'Transport', desc: 'Flat rate', amount: '$450.00', icon: <Bus className="w-4 h-4"/>, color: 'bg-purple-50 text-purple-600' },
              { label: 'Meal Allowance', desc: 'Daily calculation', amount: '$300.00', icon: <Utensils className="w-4 h-4"/>, color: 'bg-yellow-50 text-yellow-600' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 flex items-center justify-between group cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.color}`}>
                    {typeof item.icon === 'string' ? item.icon : item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                    <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900 text-sm">{item.amount}</span>
                  <ChevronRight className="w-4 h-4 text-gray-300" />
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-4 py-3 border-2 border-dashed border-gray-200 rounded-2xl flex items-center justify-center gap-2 text-blue-600 font-bold text-sm hover:bg-blue-50 transition-colors">
            <Plus className="w-4 h-4" /> Add Earning Component
          </button>
        </section>

        {/* Deductions */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-black text-gray-900">Deductions</h3>
            <span className="text-red-500 font-bold text-sm">-$890.00</span>
          </div>

          <div className="bg-white rounded-2xl border shadow-sm divide-y">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <Home className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Income Tax (PAYE)</h4>
                  <p className="text-xs text-gray-400 mt-0.5">15% bracket</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-red-500 text-sm">-$787.50</span>
                <Edit3 className="w-4 h-4 text-gray-300" />
              </div>
            </div>

            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">Social Security</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Mandatory</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-red-500 text-sm">-$102.50</span>
                <Edit3 className="w-4 h-4 text-gray-300" />
              </div>
            </div>
          </div>
        </section>

        {/* Final Calculation */}
        <section className="bg-white p-4 rounded-2xl border shadow-sm space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-medium">Total Earnings</span>
            <span className="text-gray-900 font-bold">$5,250.00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500 font-medium">Total Deductions</span>
            <span className="text-red-500 font-bold">-$890.00</span>
          </div>
          <div className="pt-4 border-t flex justify-between items-center">
            <span className="text-lg font-black text-gray-900">Net Pay</span>
            <span className="text-2xl font-black text-blue-600">$4,360.00</span>
          </div>
        </section>

        <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-colors">
          Save Configuration for {employee.name}
        </button>
      </div>
    </div>
  );
};

export default PayrollStructure;
