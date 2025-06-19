import React, { useState } from 'react';
import { Search, Filter, ShoppingBag, Mail, Phone, MapPin } from 'lucide-react';

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const customers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+1 234 567 890',
      location: 'New York, USA',
      totalOrders: 12,
      totalSpent: 194690.61,
      lastOrder: '2024-01-15',
      status: 'Active',
      recentPurchases: [
        { product: 'iPhone 15 Pro', amount: 82917, date: '2024-01-15' },
        { product: 'AirPods Pro', amount: 20667, date: '2024-01-10' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      phone: '+1 234 567 891',
      location: 'Los Angeles, USA',
      totalOrders: 8,
      totalSpent: 157699.17,
      lastOrder: '2024-01-14',
      status: 'Active',
      recentPurchases: [
        { product: 'MacBook Air M2', amount: 99517, date: '2024-01-14' },
        { product: 'iPad Air', amount: 49717, date: '2024-01-05' }
      ]
    },
    {
      id: 3,
      name: 'Mike Brown',
      email: 'mike.b@example.com',
      phone: '+1 234 567 892',
      location: 'Chicago, USA',
      totalOrders: 5,
      totalSpent: 103667,
      lastOrder: '2024-01-13',
      status: 'Active',
      recentPurchases: [
        { product: 'AirPods Pro', amount: 20667, date: '2024-01-13' },
        { product: 'Apple Watch', amount: 33117, date: '2024-01-01' }
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Customers</h2>
        <p className="text-sm text-gray-600 mt-1">Manage your customer base</p>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Filter className="w-4 h-4 mr-2" />
          <span>More Filters</span>
        </button>
      </div>

      {/* Customers List */}
      <div className="space-y-4 sm:space-y-6">
        {customers.map((customer) => (
          <div key={customer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Customer Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold text-lg sm:text-xl">
                    {customer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{customer.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Mail className="w-4 h-4 mr-1" />
                        {customer.email}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Phone className="w-4 h-4 mr-1" />
                        {customer.phone}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {customer.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    customer.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {customer.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Customer Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 sm:p-6 bg-gray-50">
              <div>
                <p className="text-sm text-gray-500">Total Orders</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">{customer.totalOrders}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Spent</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">₹{customer.totalSpent.toLocaleString('en-IN')}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Last Order</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">{customer.lastOrder}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Average Order</p>
                <p className="text-lg sm:text-xl font-semibold text-gray-900">
                  ₹{(customer.totalSpent / customer.totalOrders).toLocaleString('en-IN')}
                </p>
              </div>
            </div>

            {/* Recent Purchases */}
            <div className="p-4 sm:p-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Purchases</h4>
              <div className="space-y-3">
                {customer.recentPurchases.map((purchase, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{purchase.product}</p>
                        <p className="text-xs text-gray-500">{purchase.date}</p>
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">₹{purchase.amount.toLocaleString('en-IN')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-4 sm:mt-6 flex items-center justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">1</span> to <span className="font-medium">3</span> of{' '}
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

export default Customers; 