
import React from 'react';
import { Home, Users, DollarSign, FileText, User, ChevronLeft, Settings } from 'lucide-react';
import { TabType } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  showSettings?: boolean;
  onSettings?: () => void;
  headerAction?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeTab, 
  onTabChange, 
  title, 
  showBack, 
  onBack,
  showSettings,
  onSettings,
  headerAction 
}) => {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'employees', icon: Users, label: 'Employees' },
    { id: 'payroll', icon: DollarSign, label: 'Payroll' },
    { id: 'requests', icon: FileText, label: 'Requests' },
    { id: 'profile', icon: User, label: 'Profile' },
  ] as const;

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 overflow-hidden shadow-2xl relative">
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center justify-between border-b sticky top-0 z-10">
        <div className="flex items-center gap-4">
          {showBack && (
            <button onClick={onBack} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
          )}
          <h1 className="text-xl font-bold text-gray-900 truncate">{title}</h1>
        </div>
        <div className="flex items-center gap-2">
          {headerAction}
          {showSettings && (
            <button onClick={onSettings} className="p-1 hover:bg-gray-100 rounded-full transition-colors">
              <Settings className="w-6 h-6 text-gray-700" />
            </button>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-24">
        {children}
      </main>

      {/* Bottom Nav */}
      <nav className="bg-white border-t px-4 py-2 flex justify-between items-center fixed bottom-0 w-full max-w-md z-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id as TabType)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === tab.id ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? 'fill-blue-50' : ''}`} />
            <span className="text-[10px] font-medium">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Layout;
