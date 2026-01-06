
import React from 'react';
import { Clock, Plane, DollarSign, Plus, Minus, TrendingUp, Settings2, ChevronLeft } from 'lucide-react';
import { Employee } from '../types';

interface PayrollInputsProps {
  employee: Employee;
  onToggleView: () => void;
}

const PayrollInputs: React.FC<PayrollInputsProps> = ({ employee, onToggleView }) => {
  return (
    <div className="bg-gray-50 min-h-full">
      {/* Employee Context Bar */}
      <div className="bg-white p-4 flex items-center justify-between border-b shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <img 
            src={`https://picsum.photos/seed/${employee.id}/100/100`} 
            alt={employee.name} 
            className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-50" 
          />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{employee.name}</h3>
            <p className="text-xs text-gray-400 font-medium">Monthly Adjustments • Oct</p>
          </div>
        </div>
        <button 
          onClick={onToggleView}
          className="w-10 h-10 bg-gray-50 text-gray-400 rounded-xl flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors"
          title="Configure Salary Structure"
        >
          <Settings2 className="w-5 h-5" />
        </button>
      </div>

      <div className="p-4">
        {/* Toggle Mode */}
        <div className="bg-gray-100 p-1.5 rounded-2xl flex gap-1 shadow-inner mb-6">
          <button className="flex-1 py-2.5 bg-white text-blue-600 font-bold text-sm rounded-xl shadow-sm">Monthly Inputs</button>
          <button className="flex-1 py-2.5 text-gray-500 font-bold text-sm">One-Time Bonus</button>
        </div>

        <div className="space-y-8">
          {/* Section: Time & Attendance */}
          <section>
            <div className="flex items-center gap-2 text-gray-900 font-black mb-6">
              <Clock className="w-5 h-5 text-blue-600" />
              Time & Attendance
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Days Worked</span>
                <div className="flex items-center gap-4">
                  <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100"><Minus className="w-4 h-4" /></button>
                  <span className="text-lg font-black text-gray-900">22</span>
                  <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-gray-700 font-semibold">Overtime Hours</span>
                  <span className="text-[10px] text-gray-400 font-bold">RATE: $25.00/HR</span>
                </div>
                <span className="text-lg font-black text-gray-900">4.5</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Lateness (mins)</span>
                <span className="text-lg font-black text-red-500">15</span>
              </div>
            </div>
          </section>

          {/* Section: Leaves */}
          <section>
            <div className="flex items-center gap-2 text-gray-900 font-black mb-6">
              <Plane className="w-5 h-5 text-blue-600" />
              Leave Adjustments
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Paid Leave</span>
                <div className="flex items-center gap-4">
                  <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100"><Minus className="w-4 h-4" /></button>
                  <span className="text-lg font-black text-gray-900">2.0</span>
                  <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">Unpaid Leave</span>
                <div className="flex items-center gap-4">
                  <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100"><Minus className="w-4 h-4" /></button>
                  <span className="text-lg font-black text-gray-900">0</span>
                  <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100"><Plus className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          </section>

          {/* Floating Summary Card */}
          <div className="pt-8 pb-12">
            <div className="bg-white p-6 rounded-3xl border shadow-xl space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-500"></div>
              <div className="flex items-center gap-2 text-green-600 font-bold">
                 <DollarSign className="w-5 h-5" />
                 Net Pay Breakdown
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">Estimated for {employee.name.split(' ')[0]}</span>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-gray-900">$4,250.00</span>
                  <div className="flex items-center gap-1 bg-green-50 text-green-500 text-[10px] font-bold px-2 py-1 rounded-full">
                    <TrendingUp className="w-3 h-3" /> +$250.00
                  </div>
                </div>
              </div>

              <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                Approve & Process Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayrollInputs;
