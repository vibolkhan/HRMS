
import React from 'react';
import { Calendar, FileText, ClipboardList, CreditCard, ChevronRight, Mail, Phone, MapPin, EyeOff, Download, UserPlus } from 'lucide-react';

const MyProfile: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-full pb-20">
      {/* Profile Info Header */}
      <div className="bg-white px-4 pt-8 pb-6 flex flex-col items-center border-b">
        <div className="relative mb-4 group cursor-pointer">
          <img 
            src="https://picsum.photos/seed/alex-johnson/200/200" 
            alt="Alex" 
            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl transition-transform group-hover:scale-105"
          />
          <button className="absolute bottom-1 right-1 w-8 h-8 bg-blue-600 border-4 border-white rounded-full flex items-center justify-center shadow-md">
            <FileText className="w-3 h-3 text-white" />
          </button>
          <div className="absolute bottom-1 right-8 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
        </div>

        <h2 className="text-2xl font-black text-gray-900">Alex Johnson</h2>
        <p className="text-gray-500 font-semibold mt-0.5">Senior Software Engineer</p>
        
        <span className="mt-4 bg-green-50 text-green-600 text-[10px] font-bold px-4 py-1.5 rounded-full tracking-widest uppercase">
          Active Employee
        </span>

        {/* Quick Tabs */}
        <div className="flex justify-between w-full mt-8 px-2">
          {[
            { icon: ClipboardList, label: 'Payslips' },
            { icon: Calendar, label: 'Leave' },
            { icon: FileText, label: 'Edit' },
            { icon: CreditCard, label: 'ID Card' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 cursor-pointer group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center transition-all group-hover:bg-blue-600 group-hover:text-white shadow-sm border border-blue-100">
                <item.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Latest Payslip Summary */}
        <div className="bg-blue-600 p-6 rounded-3xl shadow-xl shadow-blue-100 space-y-6 text-white relative overflow-hidden">
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-blue-100 uppercase tracking-widest flex items-center gap-1.5">
                Latest Payslip
              </p>
              <h3 className="text-2xl font-black">Oct 2023</h3>
            </div>
            <span className="bg-white/20 px-3 py-1 rounded-lg text-[10px] font-bold tracking-widest uppercase">Paid</span>
          </div>

          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest">Net Pay</p>
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black">****.00</span>
                <EyeOff className="w-5 h-5 text-blue-200 opacity-80" />
              </div>
            </div>
            <button className="bg-white text-blue-600 px-5 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg hover:bg-blue-50 transition-colors">
              <Download className="w-4 h-4" /> PDF
            </button>
          </div>
        </div>

        {/* Personal Information List */}
        <section>
          <h4 className="text-lg font-black text-gray-900 mb-4">Personal Information</h4>
          <div className="bg-white rounded-3xl border shadow-sm divide-y">
             {[
               { label: 'EMAIL', value: 'alex.j@company.com', icon: Mail, color: 'text-blue-500 bg-blue-50' },
               { label: 'PHONE', value: '+1 555-0123', icon: Phone, color: 'text-blue-500 bg-blue-50' },
               { label: 'ADDRESS', value: '123 Tech Lane, CA', icon: MapPin, color: 'text-blue-500 bg-blue-50' },
             ].map((field, idx) => (
               <div key={idx} className="p-4 flex items-center gap-4">
                 <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${field.color}`}>
                   <field.icon className="w-5 h-5" />
                 </div>
                 <div>
                   <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{field.label}</p>
                   <p className="text-sm font-semibold text-gray-800">{field.value}</p>
                 </div>
               </div>
             ))}
          </div>
        </section>

        {/* Employment Details Grid */}
        <section>
          <h4 className="text-lg font-black text-gray-900 mb-4">Employment Details</h4>
          <div className="bg-white p-6 rounded-3xl border shadow-sm grid grid-cols-2 gap-y-6 gap-x-4">
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Employee ID</p>
              <p className="font-bold text-gray-900 text-sm mt-1">EMP-4921</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Department</p>
              <p className="font-bold text-gray-900 text-sm mt-1">Engineering</p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Manager</p>
              <div className="flex items-center gap-2 mt-1">
                <img src="https://picsum.photos/seed/manager/40/40" alt="" className="w-6 h-6 rounded-full" />
                <span className="font-bold text-gray-900 text-sm">Sarah Connor</span>
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Joined</p>
              <p className="font-bold text-gray-900 text-sm mt-1">Mar 12, 2021</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyProfile;
