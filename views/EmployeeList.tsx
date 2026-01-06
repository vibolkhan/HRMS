
import React, { useState } from 'react';
import { Search, Plus, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Employee } from '../types';

interface EmployeeListProps {
  employees: Employee[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, selectedId, onSelect }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Active', 'On Leave', 'Terminated'];

  const filteredEmployees = employees.filter(emp => 
    activeFilter === 'All' || emp.status === activeFilter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'green-500';
      case 'On Leave': return 'orange-500';
      case 'Terminated': return 'red-500';
      default: return 'gray-500';
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      <div className="p-4 bg-white space-y-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Employees</h2>
          <button className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Search by name or code" 
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap border ${
                activeFilter === f 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-100' 
                  : 'bg-white text-gray-600 border-gray-100'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {filteredEmployees.map((emp) => (
          <div 
            key={emp.id} 
            onClick={() => onSelect(emp.id)}
            className={`bg-white p-4 rounded-2xl border transition-all cursor-pointer flex items-center gap-4 active:scale-95 ${
              selectedId === emp.id ? 'ring-2 ring-blue-500 border-transparent shadow-lg' : 'shadow-sm border-gray-100'
            }`}
          >
            <div className="relative">
              <img 
                src={`https://picsum.photos/seed/${emp.id}/100/100`} 
                alt="" 
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div className={`absolute bottom-0 right-0 w-3.5 h-3.5 bg-${getStatusColor(emp.status)} border-2 border-white rounded-full`}></div>
            </div>
            
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-gray-900">{emp.name}</h3>
                  {selectedId === emp.id && <CheckCircle2 className="w-4 h-4 text-blue-500" />}
                </div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border border-${getStatusColor(emp.status)} text-${getStatusColor(emp.status)}`}>
                  {emp.status}
                </span>
              </div>
              <p className="text-xs text-gray-500 font-medium">{emp.role}</p>
              <p className="text-xs text-gray-400 mt-0.5">#{emp.id}</p>
            </div>

            <ChevronRight className={`w-5 h-5 transition-colors ${selectedId === emp.id ? 'text-blue-500' : 'text-gray-300'}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
