
import React, { useState, useMemo } from 'react';
import { TabType, Employee } from './types';
import Layout from './components/Layout';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import EmployeeList from './views/EmployeeList';
import EmployeeProfile from './views/EmployeeProfile';
import Contracts from './views/Contracts';
import PayrollList from './views/PayrollList';
import PayrollInputs from './views/PayrollInputs';
import PayrollStructure from './views/PayrollStructure';
import MyProfile from './views/MyProfile';

const MOCK_EMPLOYEES: Employee[] = [
  { id: 'DEV-001', name: 'John Doe', role: 'Software Engineer', status: 'Active', department: 'Engineering', email: 'john@company.com', phone: '555-0101' },
  { id: 'HR-023', name: 'Sarah Smith', role: 'HR Manager', status: 'On Leave', department: 'Human Resources', email: 'sarah.s@company.com', phone: '555-0123' },
  { id: 'ACC-104', name: 'Michael Brown', role: 'Junior Accountant', status: 'Active', department: 'Finance', email: 'michael@company.com', phone: '555-0144' },
  { id: 'DES-008', name: 'Emily Chen', role: 'UX Designer', status: 'Terminated', department: 'Design', email: 'emily@company.com', phone: '555-0108' },
  { id: 'PM-042', name: 'David Wilson', role: 'Project Manager', status: 'Active', department: 'Product', email: 'david@company.com', phone: '555-0142' },
];

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('home');
  const [subView, setSubView] = useState<string | null>(null);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string>(MOCK_EMPLOYEES[0].id);

  const selectedEmployee = useMemo(() => 
    MOCK_EMPLOYEES.find(e => e.id === selectedEmployeeId) || MOCK_EMPLOYEES[0]
  , [selectedEmployeeId]);

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  const handleSelectEmployee = (id: string, targetView: string = 'profile') => {
    setSelectedEmployeeId(id);
    setSubView(targetView);
  };

  const renderContent = () => {
    if (activeTab === 'requests') {
      return <Contracts employee={selectedEmployee} />;
    }

    if (activeTab === 'payroll') {
      if (!subView) {
        return <PayrollList 
          employees={MOCK_EMPLOYEES} 
          onSelectEmployee={(id) => handleSelectEmployee(id, 'inputs')} 
        />;
      }
      return subView === 'structure' 
        ? <PayrollStructure employee={selectedEmployee} /> 
        : <PayrollInputs employee={selectedEmployee} onToggleView={() => setSubView('structure')} />;
    }

    if (activeTab === 'employees') {
      return subView === 'profile' 
        ? <EmployeeProfile employee={selectedEmployee} /> 
        : <EmployeeList 
            employees={MOCK_EMPLOYEES} 
            selectedId={selectedEmployeeId} 
            onSelect={(id) => handleSelectEmployee(id, 'profile')} 
          />;
    }

    if (activeTab === 'profile') {
      return <MyProfile />;
    }

    return <Dashboard />;
  };

  const getTitle = () => {
    if (activeTab === 'home') return 'HR & Payroll Portal';
    if (activeTab === 'employees') return subView === 'profile' ? 'Employee Profile' : 'Employees';
    if (activeTab === 'payroll') {
      if (!subView) return 'Payroll Batch (Oct)';
      return subView === 'structure' ? 'Salary Structure' : 'Process Payroll';
    }
    if (activeTab === 'requests') return 'Contracts & Terms';
    if (activeTab === 'profile') return 'My Profile';
    return '';
  };

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    // Reset subview when moving to root tabs, except for payroll where we usually start at list
    if (tab === 'home' || tab === 'profile' || tab === 'payroll' || tab === 'employees') {
      setSubView(null);
    }
  };

  return (
    <Layout 
      activeTab={activeTab} 
      onTabChange={handleTabChange}
      title={getTitle()}
      showBack={subView !== null}
      onBack={() => setSubView(null)}
      showSettings={activeTab === 'profile' || subView === 'profile'}
      headerAction={
        (activeTab === 'payroll' && subView) || activeTab === 'requests' ? (
          <button className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-lg">Save</button>
        ) : null
      }
    >
      <div className="h-full">
        {renderContent()}
      </div>
    </Layout>
  );
};

export default App;
