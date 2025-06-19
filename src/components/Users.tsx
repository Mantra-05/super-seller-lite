import React, { useState } from 'react';
import { Search, Filter, User, Globe, Clock, MapPin, ExternalLink } from 'lucide-react';

const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      location: 'New York, USA',
      device: 'iPhone 15 Pro',
      browser: 'Safari',
      lastActive: '2 minutes ago',
      status: 'Online',
      pages: [
        { name: 'Homepage', time: '2 minutes ago' },
        { name: 'Products', time: '5 minutes ago' },
        { name: 'Cart', time: '10 minutes ago' }
      ]
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@example.com',
      location: 'Los Angeles, USA',
      device: 'MacBook Pro',
      browser: 'Chrome',
      lastActive: '5 minutes ago',
      status: 'Online',
      pages: [
        { name: 'Products', time: '5 minutes ago' },
        { name: 'Product Details', time: '8 minutes ago' },
        { name: 'Checkout', time: '12 minutes ago' }
      ]
    },
    {
      id: 3,
      name: 'Mike Brown',
      email: 'mike.b@example.com',
      location: 'Chicago, USA',
      device: 'Samsung Galaxy S23',
      browser: 'Firefox',
      lastActive: '15 minutes ago',
      status: 'Offline',
      pages: [
        { name: 'Homepage', time: '15 minutes ago' },
        { name: 'About Us', time: '20 minutes ago' },
        { name: 'Contact', time: '25 minutes ago' }
      ]
    }
  ];

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-3 sm:space-y-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Website Visitors</h2>
          <p className="text-sm text-gray-600 mt-1">Track and monitor user activity</p>
        </div>
        <button className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200">
          <User className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
          <span className="text-sm sm:text-base">View Analytics</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search visitors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
          <option value="">All Status</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
        <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          <Filter className="w-4 h-4 mr-2" />
          <span>More Filters</span>
        </button>
      </div>

      {/* Users List */}
      <div className="space-y-4 sm:space-y-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* User Header */}
            <div className="p-4 sm:p-6 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-semibold text-lg sm:text-xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{user.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Globe className="w-4 h-4 mr-1" />
                        {user.browser}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <Clock className="w-4 h-4 mr-1" />
                        {user.lastActive}
                      </span>
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <MapPin className="w-4 h-4 mr-1" />
                        {user.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                    user.status === 'Online' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {user.status}
                  </span>
                </div>
              </div>
            </div>

            {/* User Details */}
            <div className="p-4 sm:p-6 bg-gray-50">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Device</p>
                  <p className="text-sm font-medium text-gray-900">{user.device}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-sm font-medium text-gray-900">{user.email}</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="p-4 sm:p-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Recent Activity</h4>
              <div className="space-y-3">
                {user.pages.map((page, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{page.name}</p>
                        <p className="text-xs text-gray-500">{page.time}</p>
                      </div>
                    </div>
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

export default Users; 