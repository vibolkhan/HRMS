
import React, { useState } from 'react';
import { Briefcase, Calendar, Wallet, ChevronDown, CalendarDays, WalletCards, ArrowRight } from 'lucide-react';
import { Employee } from '../types';

interface ContractsProps {
  employee: Employee;
}

const Contracts: React.FC<ContractsProps> = ({ employee }) => {
  const [activeTab, setActiveTab] = useState('Contract Details');

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Mini Profile Header */}
      <div className="bg-white p-4 flex items-center justify-between border-b">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center overflow-hidden">
            <img 
              src={`https://picsum.photos/seed/${employee.id}/100/100`} 
              alt={employee.name} 
              className="w-full h-full object-cover" 
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{employee.name}</h3>
            <p className="text-xs text-gray-500 font-medium">{employee.role} • ID: #{employee.id}</p>
          </div>
        </div>
        <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase ${
          employee.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
        }`}>
          {employee.status}
        </span>
      </div>

      {/* Tabs */}
      <div className="bg-white flex border-b">
        {['Contract Details', 'Financials'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-4 text-sm font-bold transition-all relative ${
              activeTab === tab ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-600 rounded-t-full mx-4"></div>
            )}
          </button>
        ))}
      </div>

      <div className="p-4 space-y-6">
        {/* General Info */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            General Info
          </div>

          <div className="bg-white p-4 rounded-2xl border shadow-sm space-y-4">
            <div>
              <label className="text-xs font-bold text-gray-500 block mb-1">Job Title</label>
              <div className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl text-sm font-semibold text-gray-800">
                {employee.role}
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 block mb-1">Contract Type</label>
              <div className="w-full p-3 bg-white border border-gray-200 rounded-xl flex items-center justify-between text-sm font-semibold text-gray-800">
                Full-Time Permanent
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 block mb-1">Department</label>
              <div className="w-full p-3 bg-white border border-gray-200 rounded-xl flex items-center justify-between text-sm font-semibold text-gray-800">
                {employee.department}
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline & Schedule */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            Timeline & Schedule
          </div>

          <div className="bg-white p-4 rounded-2xl border shadow-sm space-y-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="text-xs font-bold text-gray-500 block mb-1">Start Date</label>
                <div className="w-full p-3 bg-white border border-gray-200 rounded-xl flex items-center justify-between text-sm font-semibold text-gray-800">
                  01/15/2023
                  <CalendarDays className="w-4 h-4 text-gray-400" />
                </div>
              </div>
              <div className="flex-1">
                <label className="text-xs font-bold text-gray-500 block mb-1">End Date</label>
                <div className="w-full p-3 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-between text-sm font-semibold text-gray-300">
                  mm/dd/yyyy
                  <CalendarDays className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-bold text-gray-800">Probation Period</p>
                <p className="text-xs text-gray-400 mt-0.5">Is this employee currently on probation?</p>
              </div>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative p-1 cursor-pointer">
                <div className="absolute right-1 top-1 bottom-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation Preview */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-gray-900 font-bold">
            <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
              <Wallet className="w-4 h-4" />
            </div>
            Compensation Preview
          </div>

          <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">Base Salary</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-2xl font-black text-gray-900">$120,000</span>
                  <span className="text-gray-400 text-sm font-medium">/ yr</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                <WalletCards className="w-6 h-6" />
              </div>
            </div>
            <button className="w-full py-4 border-t flex items-center justify-center gap-2 text-blue-600 text-sm font-bold hover:bg-gray-50 transition-colors">
              Edit Financial Details <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contracts;
