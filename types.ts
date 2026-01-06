
export type TabType = 'home' | 'employees' | 'payroll' | 'requests' | 'profile';

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  status: 'Active' | 'On Leave' | 'Terminated';
  avatar?: string;
  email: string;
  phone: string;
}

export interface Payslip {
  id: string;
  month: string;
  year: string;
  amount: number;
  status: 'Paid' | 'Pending';
}

export interface Position {
  id: string;
  title: string;
  grade: string;
  salaryRange: string;
  icon: string;
}
