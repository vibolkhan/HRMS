
import React from 'react';
import { Phone, Mail, Edit2, Download, AlertTriangle, ChevronDown, User, Briefcase, Shield, FolderOpen, ChevronRight, DollarSign } from 'lucide-react';
import { Employee } from '../types';

interface EmployeeProfileProps {
  employee: Employee;
  onShowHistory?: () => void;
}

const EmployeeProfile: React.FC<EmployeeProfileProps> = ({ employee, onShowHistory }) => {
  const sections = [
    { title: 'Personal Information', icon: User, isOpen: true },
    { title: 'Employment Details', icon: Briefcase, isOpen: false },
    { title: 'Legal & Identity', icon: Shield, isOpen: false },
    { title: 'Documents', icon: FolderOpen, isOpen: false },
  ];

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Profile Header Card */}
      <div className="bg-white pt-8 pb-6 px-4 flex flex-col items-center border-b shadow-sm">
        <div className="relative mb-6">
          <img 
            src={`https://picsum.photos/seed/${employee.id}/200/200`} 
            alt={employee.name} 
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
          />
          <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full shadow-sm"></div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900">{employee.name}</h2>
        <div className="flex items-center gap-2 text-gray-500 font-medium mt-1">
          <span>{employee.role}</span>
          <span className="text-gray-300">|</span>
          <span>{employee.department}</span>
        </div>
        
        <span className="mt-4 bg-green-50 text-green-600 text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
          {employee.status} Employee
        </span>

        {/* Action Buttons */}
        <div className="flex justify-between w-full mt-8 px-2 overflow-x-auto gap-4 scrollbar-hide">
          {[
            { icon: Phone, label: 'Call' },
            { icon: Mail, label: 'Email' },
            { icon: DollarSign, label: 'Payroll', onClick: onShowHistory },
            { icon: Edit2, label: 'Edit' },
            { icon: Download, label: 'CV' },
          ].map((action, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group shrink-0" onClick={action.onClick}>
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:text-white shadow-sm">
                <action.icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-gray-600">{action.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Alert Card */}
        <div className="bg-white border-l-4 border-orange-400 p-4 rounded-xl shadow-sm flex gap-4">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">Action Required</h4>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              Passport expires in 30 days. Please upload renewal document before next payroll cycle.
            </p>
            <button className="text-blue-600 text-xs font-bold mt-2 flex items-center gap-1">
              Renew Now <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Info Sections */}
        {sections.map((section, idx) => (
          <div key={idx} className="bg-white rounded-2xl border shadow-sm overflow-hidden">
            <button className="w-full p-4 flex items-center justify-between text-left">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                  <section.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900">{section.title}</h3>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${section.isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {section.isOpen && (
              <div className="px-4 pb-4 space-y-4 border-t pt-4">
                {[
                  { label: 'PHONE', value: employee.phone },
                  { label: 'EMAIL', value: employee.email },
                  { label: 'DATE OF BIRTH', value: 'Jan 15, 1990' },
                  { label: 'ADDRESS', value: '123 Maple Avenue, San Francisco, CA' },
                ].map((field, fIdx) => (
                  <div key={fIdx}>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{field.label}</p>
                    <p className="text-sm font-semibold text-gray-800 mt-1">{field.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-6 w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform">
        <FolderOpen className="w-6 h-6" />
      </button>
    </div>
  );
};

export default EmployeeProfile;
