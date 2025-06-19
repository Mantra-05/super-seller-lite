import React from 'react';
import { 
  Home, 
  Package, 
  ShoppingCart, 
  Users,
  Reviews, 
  BarChart3, 
  Settings, 
  FileText,
  Truck,
  DollarSign,
  User,
  Bell,
  LogOut,
  LayoutDashboard,
  TrendingUp,
  CreditCard,
  Tags
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, activeItem, onItemClick }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'sales', label: 'Sales', icon: ShoppingCart },
    { id: 'customers', label: 'Customers', icon: Users },
    { id: 'transactions', label: 'Transactions', icon: CreditCard },
    { id: 'users', label: 'Users', icon: User },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'Reviews', label: 'Reviews', icon: User},
    { id: 'offers', label: 'Offers & Coupons', icon: Tags },
  ];

  return (
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 flex flex-col`}>
      <div className="flex-shrink-0 flex items-center justify-center h-16 bg-gradient-to-r from-blue-600 to-indigo-600">
        <h1 className="text-white text-xl font-bold">SuperSeller</h1>
      </div>
      
      <nav className="flex-1 overflow-y-auto mt-8">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-blue-50 transition-colors duration-200 ${
                activeItem === item.id ? 'bg-blue-50 border-r-4 border-blue-600 text-blue-600' : 'text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
      
      <div className="flex-shrink-0 p-4 border-t">
        <button className="w-full flex items-center px-2 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors duration-200">
          <LogOut className="w-5 h-5 mr-3" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
