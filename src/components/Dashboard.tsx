import React from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  Users, 
  Package,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  MessageSquare,
  AlertTriangle,
  User,
  Share2,
  ShoppingBag,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

interface DashboardProps {
  onNavigate: (item: string) => void;
  userName: string;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate, userName }) => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '₹2,456,000',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'bg-green-100 text-green-600'
    },
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+8.2%',
      trend: 'up',
      icon: ShoppingBag,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      title: 'Total Customers',
      value: '856',
      change: '+5.3%',
      trend: 'up',
      icon: Users,
      color: 'bg-purple-100 text-purple-600'
    },
    {
      title: 'Average Order Value',
      value: '₹1,990',
      change: '-2.4%',
      trend: 'down',
      icon: TrendingUp,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      title: 'Visitors',
      value: '2,847',
      change: '+12.5%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Enquiries',
      value: '156',
      change: '+8.2%',
      trend: 'up',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Live Products',
      value: '456',
      change: '+5.1%',
      trend: 'up',
      icon: Package,
      color: 'from-orange-500 to-amber-500'
    },
    {
      title: 'Out of Stock',
      value: '23',
      change: '-2.1%',
      trend: 'down',
      icon: AlertTriangle,
      color: 'from-red-500 to-rose-500'
    },
    {
      title: 'Users',
      value: '892',
      change: '+7.8%',
      trend: 'up',
      icon: User,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Shares',
      value: '345',
      change: '+18.2%',
      trend: 'up',
      icon: Share2,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const recentSales = [
    {
      id: 1,
      customer: 'John Smith',
      product: 'iPhone 15 Pro',
      amount: 82917,
      date: '2024-01-15',
      status: 'Completed'
    },
    {
      id: 2,
      customer: 'Sarah Johnson',
      product: 'MacBook Air M2',
      amount: 99517,
      date: '2024-01-14',
      status: 'Completed'
    },
    {
      id: 3,
      customer: 'Mike Brown',
      product: 'AirPods Pro',
      amount: 20667,
      date: '2024-01-13',
      status: 'Completed'
    }
  ];

  const topProducts = [
    { name: 'iPhone 15 Pro', sales: 45, revenue: '₹37,31,265', change: '+15%' },
    { name: 'MacBook Air M2', sales: 23, revenue: '₹22,88,891', change: '+8%' },
    { name: 'AirPods Pro', sales: 67, revenue: '₹13,84,689', change: '+22%' },
    { name: 'iPad Air', sales: 34, revenue: '₹16,90,378', change: '+5%' },
    { name: 'Apple Watch', sales: 28, revenue: '₹9,27,276', change: '-3%' }
  ];

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-sm p-4 sm:p-6 text-white">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Welcome, {userName}</h2>
        <p className="text-sm sm:text-base text-blue-100">You have 200+ Orders, Today</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>
                <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="flex items-center mt-4">
              <span className={`inline-flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? (
                  <ArrowUp className="w-4 h-4 mr-1" />
                ) : (
                  <ArrowDown className="w-4 h-4 mr-1" />
                )}
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-2">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Sales Overview</h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Total sales: ₹24,589</p>
            </div>
            <select className="border border-gray-300 rounded-lg px-2 py-1 text-xs sm:text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <div className="h-48 sm:h-64 relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 grid grid-rows-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="border-b border-gray-100" />
              ))}
            </div>
            
            {/* Bars */}
            <div className="absolute inset-0 flex items-end justify-between px-2 sm:px-4">
              {[
                { value: 45, label: 'Mon', sales: '₹3,245' },
                { value: 65, label: 'Tue', sales: '₹4,123' },
                { value: 55, label: 'Wed', sales: '₹3,789' },
                { value: 80, label: 'Thu', sales: '₹5,234' },
                { value: 70, label: 'Fri', sales: '₹4,567' },
                { value: 85, label: 'Sat', sales: '₹5,890' },
                { value: 75, label: 'Sun', sales: '₹4,741' }
              ].map((day, index) => (
                <div key={index} className="flex flex-col items-center group">
                  <div className="relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                      {day.sales}
                    </div>
                    <div
                      className="w-6 sm:w-10 bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-sm transition-all duration-300 hover:from-blue-600 hover:to-blue-500 cursor-pointer"
                      style={{ height: `${day.value}%` }}
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs text-gray-500 mt-1 sm:mt-2">{day.label}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Legend */}
          <div className="mt-3 sm:mt-4 flex items-center justify-center space-x-3 sm:space-x-4">
            <div className="flex items-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-500 rounded-full mr-1 sm:mr-2"></div>
              <span className="text-xs sm:text-sm text-gray-600">Daily Sales</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-100 rounded-full mr-1 sm:mr-2"></div>
              <span className="text-xs sm:text-sm text-gray-600">Target</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 sm:p-6">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900">Top Products</h3>
            <button 
              onClick={() => onNavigate('products')}
              className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              View All
            </button>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <Package className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-medium text-gray-900">{product.name}</p>
                    <p className="text-xs sm:text-sm text-gray-500">{product.sales} sales</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm sm:text-base font-semibold text-gray-900">{product.revenue}</p>
                  <p className={`text-xs sm:text-sm ${
                    product.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {product.change}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Sales */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Recent Sales</h3>
        </div>
        <div className="divide-y divide-gray-200">
          {recentSales.map((sale) => (
            <div key={sale.id} className="p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">{sale.product}</p>
                  <p className="text-sm text-gray-500">{sale.customer}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">₹{sale.amount.toLocaleString('en-IN')}</p>
                  <p className="text-sm text-gray-500">{sale.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 sm:p-6 border-t border-gray-200">
          <button
            onClick={() => onNavigate('sales')}
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View all sales →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;