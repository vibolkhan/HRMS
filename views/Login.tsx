
import React from 'react';
import { Hexagon, Mail, Lock, Eye, Smile, HelpCircle, ChevronLeft } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-white p-6 relative">
      <button className="mb-8 p-1">
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <div className="flex flex-col items-center mb-12">
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
          <Hexagon className="w-10 h-10 text-white fill-white/20" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">HR & Payroll Portal</h1>
        <p className="text-center text-gray-500 max-w-xs">
          Sign in to access your pay slips, benefits, and manage your profile.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Work Email or ID</label>
          <div className="relative">
            <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="e.g. employee@company.com" 
              className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
          <div className="relative">
            <Lock className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="password" 
              placeholder="Enter your password" 
              className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Eye className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-2 text-right">
            <button className="text-blue-600 text-sm font-medium">Forgot Password?</button>
          </div>
        </div>

        <button 
          onClick={onLogin}
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors"
        >
          Log In
        </button>

        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Or login with</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button className="w-full py-4 border border-gray-200 rounded-xl flex items-center justify-center gap-3 font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
          <Smile className="w-6 h-6 text-blue-500" />
          Face ID
        </button>
      </div>

      <div className="mt-auto pt-8 flex flex-col items-center gap-2">
        <button className="flex items-center gap-2 text-gray-500 font-medium">
          <HelpCircle className="w-5 h-5" />
          Need Help?
        </button>
        <span className="text-gray-300 text-xs">Version 2.0.1</span>
      </div>
    </div>
  );
};

export default Login;
