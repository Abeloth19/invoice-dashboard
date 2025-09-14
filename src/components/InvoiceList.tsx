import { useState } from 'react';
import { DownIcon } from '../icons/DownIcon';
import StatusPill from './StatusPill';

interface Invoice {
  id: string;
  client: string;
  amount: string;
  status: 'update_status' | 'unpaid' | 'draft' | 'disputed' | 'overdue' | 'paid' | 'partially_paid' | 'awaited';
  date: string;
}

const InvoiceList = () => {
  const [isOpen, setIsOpen] = useState(true);
  
  const invoices: Invoice[] = [
    { id: 'INV-001', client: 'Client Name', amount: '₹1,25,000, Due: 2024-06-15', status: 'update_status', date: '' },
    { id: 'INV-002', client: 'Client Name', amount: '₹1,25,000, Due: 2024-06-15', status: 'unpaid', date: '' },
    { id: 'INV-003', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'disputed', date: '' },
    { id: 'INV-004', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'paid', date: '' },
    { id: 'INV-005', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'paid', date: '' },
    { id: 'INV-006', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'partially_paid', date: '' },
    { id: 'INV-007', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'paid', date: '' },
    { id: 'INV-008', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'overdue', date: '' },
    { id: 'INV-009', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'awaited', date: '' },
    { id: 'INV-010', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'draft', date: '' },
    { id: 'INV-011', client: 'Income Trend', amount: '₹1,25,000, Due: 2024-06-15', status: 'paid', date: '' }
  ];


  return (
    <div className="px-4 md:px-8 mt-6">
      <div className="space-y-4">
        <div 
          className="flex items-center justify-between cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="text-base font-roboto font-semibold leading-none text-[#999999]">Your Invoices</h3>
          <DownIcon className="w-3 h-3 text-black" isOpen={isOpen} />
        </div>
        
        {isOpen && (
          <div className="space-y-1">
            {invoices.map((invoice) => (
              <div 
                key={invoice.id} 
                className="container-card"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-roboto font-medium leading-none text-[#6B7280] mb-1">
                      {invoice.client}
                    </p>
                    <p className="text-xs font-roboto font-normal leading-none text-[#999999]">
                      {invoice.amount}
                    </p>
                  </div>
                  
                  <StatusPill status={invoice.status} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InvoiceList;