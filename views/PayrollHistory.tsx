
import React, { useState, useMemo } from 'react';
import { Download, CreditCard, Calendar, TrendingUp, Loader2, CheckCircle, Filter } from 'lucide-react';
import { Employee, Payslip } from '../types';

interface PayrollHistoryProps {
  employee: Employee;
}

const MOCK_PAYSLIPS: Payslip[] = [
  { id: 'PS-010', month: 'October', year: '2023', amount: 4250.00, status: 'Paid' },
  { id: 'PS-009', month: 'September', year: '2023', amount: 4250.00, status: 'Paid' },
  { id: 'PS-008', month: 'August', year: '2023', amount: 4100.00, status: 'Paid' },
  { id: 'PS-007', month: 'July', year: '2023', amount: 4100.00, status: 'Paid' },
  { id: 'PS-006', month: 'June', year: '2023', amount: 4100.00, status: 'Paid' },
  { id: 'PS-005', month: 'May', year: '2023', amount: 3950.00, status: 'Paid' },
  { id: 'PS-004', month: 'April', year: '2023', amount: 3950.00, status: 'Paid' },
];

const PayrollHistory: React.FC<PayrollHistoryProps> = ({ employee }) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedIds, setDownloadedIds] = useState<Set<string>>(new Set());
  const [activeMonthFilter, setActiveMonthFilter] = useState<string>('All');
  
  const ytdEarnings = MOCK_PAYSLIPS.reduce((sum, p) => sum + p.amount, 0);

  // Extract unique months for the filter
  const uniqueMonths = useMemo(() => {
    const months = MOCK_PAYSLIPS.map(p => p.month);
    return ['All', ...Array.from(new Set(months))];
  }, []);

  const filteredSlips = useMemo(() => {
    if (activeMonthFilter === 'All') return MOCK_PAYSLIPS;
    return MOCK_PAYSLIPS.filter(slip => slip.month === activeMonthFilter);
  }, [activeMonthFilter]);

  const handleDownload = (slip: Payslip) => {
    setDownloadingId(slip.id);
    
    // Simulate PDF Generation Delay
    setTimeout(() => {
      // Create a dummy blob to simulate a PDF download
      const dummyContent = `
        PAYSLIP - ${slip.month} ${slip.year}
        Employee: ${employee.name}
        ID: ${employee.id}
        Net Amount: $${slip.amount.toLocaleString()}
        Status: ${slip.status}
        Reference: ${slip.id}
      `;
      const blob = new Blob([dummyContent], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `Payslip_${employee.name.replace(/\s/g, '_')}_${slip.month}_${slip.year}.pdf`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setDownloadingId(null);
      setDownloadedIds(prev => new Set(prev).add(slip.id));
      
      // Reset the "Checkmark" after 3 seconds
      setTimeout(() => {
        setDownloadedIds(prev => {
          const next = new Set(prev);
          next.delete(slip.id);
          return next;
        });
      }, 3000);
    }, 1200);
  };

  return (
    <div className="bg-gray-50 min-h-full">
      {/* Overview Card */}
      <div className="p-4 bg-white border-b shadow-sm">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <TrendingUp className="w-32 h-32" />
          </div>
          
          <div className="relative z-10">
            <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest">Year-to-Date Earnings</p>
            <h2 className="text-3xl font-black mt-1">${ytdEarnings.toLocaleString()}</h2>
            
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-sm">
                <p className="text-[10px] font-bold text-blue-100 uppercase">Avg. Monthly</p>
                <p className="text-lg font-bold">${(ytdEarnings / MOCK_PAYSLIPS.length).toFixed(0)}</p>
              </div>
              <div className="bg-white/10 rounded-2xl p-3 backdrop-blur-sm">
                <p className="text-[10px] font-bold text-blue-100 uppercase">Paid Months</p>
                <p className="text-lg font-bold">{MOCK_PAYSLIPS.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History List Header with Filter */}
      <div className="p-4 space-y-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Payment History</h3>
          <Filter className="w-4 h-4 text-gray-300" />
        </div>

        {/* Horizontal Month Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
          {uniqueMonths.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonthFilter(month)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all border whitespace-nowrap ${
                activeMonthFilter === month 
                  ? 'bg-gray-900 text-white border-gray-900 shadow-md' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-blue-200'
              }`}
            >
              {month}
            </button>
          ))}
        </div>
        
        <div className="space-y-3 pt-2">
          {filteredSlips.length > 0 ? (
            filteredSlips.map((slip) => (
              <div 
                key={slip.id}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-blue-200 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{slip.month} {slip.year}</h4>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded uppercase">
                        {slip.status}
                      </span>
                      <span className="text-xs text-gray-400 font-medium">Ref: {slip.id}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right flex items-center gap-4">
                  <div>
                    <p className="font-black text-gray-900 text-sm">${slip.amount.toLocaleString()}</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase">Net Amount</p>
                  </div>
                  <button 
                    onClick={() => handleDownload(slip)}
                    disabled={downloadingId !== null}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all shadow-sm ${
                      downloadingId === slip.id 
                        ? 'bg-blue-100 text-blue-600' 
                        : downloadedIds.has(slip.id)
                          ? 'bg-green-100 text-green-600'
                          : 'bg-gray-50 text-gray-400 group-hover:bg-blue-600 group-hover:text-white'
                    }`}
                  >
                    {downloadingId === slip.id ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : downloadedIds.has(slip.id) ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <Download className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white py-12 rounded-3xl border border-dashed border-gray-200 flex flex-col items-center justify-center text-center px-6">
              <Calendar className="w-10 h-10 text-gray-200 mb-4" />
              <p className="text-gray-500 font-bold">No payslips found</p>
              <p className="text-xs text-gray-400 mt-1">There are no records matching your filter for {activeMonthFilter}.</p>
              <button 
                onClick={() => setActiveMonthFilter('All')}
                className="mt-4 text-blue-600 text-sm font-bold"
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>

        {/* Action Note */}
        <div className="bg-blue-50 p-4 rounded-2xl flex items-start gap-3 border border-blue-100 mt-6">
          <CreditCard className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs text-blue-700 leading-relaxed font-medium">
            All payments are processed via the company's central banking system. Historical data prior to 2023 is archived and available upon request.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PayrollHistory;
