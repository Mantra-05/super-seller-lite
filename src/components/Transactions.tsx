import React, { useState } from 'react';
import { Search, Filter, CreditCard, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const Transactions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const transactions = [
    {
      id: '#TRX-001',
      type: 'Credit',
      amount: 82917,
      description: 'Payment for iPhone 15 Pro',
      date: '2024-01-15',
      status: 'Completed'
    },
    {
      id: '#TRX-002',
      type: 'Credit',
      amount: 99517,
      description: 'Payment for MacBook Air M2',
      date: '2024-01-14',
      status: 'Completed'
    },
    {
      id: '#TRX-003',
      type: 'Debit',
      amount: 20667,
      description: 'Refund for AirPods Pro',
      date: '2024-01-13',
      status: 'Completed'
    },
    {
      id: '#TRX-004',
      type: 'Credit',
      amount: 49717,
      description: 'Payment for iPad Air',
      date: '2024-01-12',
      status: 'Completed'
    },
    {
      id: '#TRX-005',
      type: 'Credit',
      amount: 33117,
      description: 'Payment for Apple Watch',
      date: '2024-01-11',
      status: 'Completed'
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Transactions</h2>
          <p className="text-sm text-gray-600 mt-1">View and manage your transactions</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search transactions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="">All Types</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Filter className="w-4 h-4 mr-2" />
          <span>More Filters</span>
        </button>
      </div>

      {/* Transactions List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Mobile View */}
        <div className="sm:hidden divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    transaction.type === 'Credit' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <CreditCard className={`w-5 h-5 ${
                      transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{transaction.description}</h3>
                    <p className="text-sm text-gray-500">{transaction.id}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {transaction.status}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>
                  <p className="text-gray-500">Amount</p>
                  <p className={`font-medium ${
                    transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {transaction.type === 'Credit' ? '+' : '-'}₹{transaction.amount.toLocaleString('en-IN')}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">Date</p>
                  <p className="font-medium text-gray-900">{transaction.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden sm:block overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transaction.type === 'Credit' ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                        <CreditCard className={`w-5 h-5 ${
                          transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                        }`} />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{transaction.description}</div>
                        <div className="text-sm text-gray-500">{transaction.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      transaction.type === 'Credit' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.type === 'Credit' ? (
                        <ArrowUpRight className="w-3 h-3 mr-1" />
                      ) : (
                        <ArrowDownRight className="w-3 h-3 mr-1" />
                      )}
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className={`text-sm font-medium ${
                      transaction.type === 'Credit' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {transaction.type === 'Credit' ? '+' : '-'}₹{transaction.amount.toLocaleString('en-IN')}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{transaction.date}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      transaction.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-4 sm:mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">5</span> of{' '}
          <span className="font-medium">20</span> results
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Previous
          </button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions; 