
import React from 'react';
import { Bell, TrendingUp, Users, Umbrella, ClipboardList, Briefcase, BarChart3, Wallet } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-4 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Section */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <img 
            src="https://picsum.photos/seed/sarah/100/100" 
            alt="User" 
            className="w-12 h-12 rounded-full object-cover ring-2 ring-blue-50"
          />
          <div>
            <p className="text-gray-500 text-sm">Good Morning,</p>
            <h2 className="text-xl font-bold text-gray-900">Sarah Jenkins</h2>
          </div>
        </div>
        <button className="w-10 h-10 bg-white shadow-sm border rounded-full flex items-center justify-center relative">
          <Bell className="w-5 h-5 text-gray-600" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>

      <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Monday, October 24</p>

      {/* Stats Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
        <div className="min-w-[160px] bg-white p-4 rounded-2xl border shadow-sm">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-gray-500 text-sm font-medium">Total Headcount</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">150</p>
          <div className="flex items-center gap-1 text-green-500 text-xs font-semibold mt-2">
            <TrendingUp className="w-3 h-3" />
            +2 this month
          </div>
        </div>

        <div className="min-w-[160px] bg-white p-4 rounded-2xl border shadow-sm">
          <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center mb-4">
            <Umbrella className="w-6 h-6 text-orange-500" />
          </div>
          <p className="text-gray-500 text-sm font-medium">On Leave</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
          <p className="text-gray-400 text-xs font-medium mt-2">Active today</p>
        </div>

        <div className="min-w-[160px] bg-white p-4 rounded-2xl border shadow-sm">
          <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-4">
            <ClipboardList className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-gray-500 text-sm font-medium">Pending Requests</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">12</p>
          <p className="text-red-400 text-xs font-medium mt-2">Requires Action</p>
        </div>
      </div>

      {/* Quick Actions */}
      <section>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { label: 'Employee Data', desc: 'Manage profiles', icon: Briefcase, color: 'bg-blue-50 text-blue-600' },
            { label: 'Positions', desc: 'Org charts & roles', icon: ClipboardList, color: 'bg-teal-50 text-teal-600' },
            { label: 'Payroll Cycle', desc: 'Process & review', icon: Wallet, color: 'bg-emerald-50 text-emerald-600' },
            { label: 'Reports', desc: 'Analytics & logs', icon: BarChart3, color: 'bg-indigo-50 text-indigo-600' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl border shadow-sm flex flex-col items-start gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">{item.label}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Activity */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
          <button className="text-blue-600 text-sm font-bold">View All</button>
        </div>
        <div className="bg-white rounded-2xl border divide-y overflow-hidden shadow-sm">
          {[
            { name: 'John Doe requested Annual Leave', time: '2 hours ago', date: 'Oct 24', icon: 'https://picsum.photos/seed/john/80/80', highlight: true },
            { name: 'Salary Slip generation complete', time: '5 hours ago', date: 'Oct 24', icon: <ClipboardList className="w-5 h-5 text-blue-600" />, type: 'icon' },
            { name: 'Alice Smith updated profile', time: '1 day ago', date: 'Oct 23', icon: 'https://picsum.photos/seed/alice/80/80' },
          ].map((activity, idx) => (
            <div key={idx} className="p-4 flex items-center gap-4 relative">
              {activity.type === 'icon' ? (
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {activity.icon as React.ReactNode}
                </div>
              ) : (
                <img src={activity.icon as string} alt="" className="w-12 h-12 rounded-full object-cover" />
              )}
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{activity.name}</h4>
                <p className="text-xs text-gray-500 mt-0.5">{activity.date} • {activity.time}</p>
              </div>
              {activity.highlight && (
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
