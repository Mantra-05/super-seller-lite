import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ProductsTable from './components/ProductsTable';
import Sales from './components/Sales';
import Customers from './components/Customers';
import Transactions from './components/Transactions';
import Users from './components/Users';
import Reviews from './components/Reviews'; 


function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('dashboard');
  const [userName] = useState('John Doe'); // You can replace this with actual user data from your authentication system

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    setSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard onNavigate={handleItemClick} userName={userName} />;
      case 'products':
        return <ProductsTable />;
      case 'sales':
        return <Sales />;
      case 'customers':
        return <Customers />;
      case 'transactions':
        return <Transactions />;
      case 'users':
        return <Users />;
      case 'reviews':
        return <Reviews/>;
      case 'settings':
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Settings</h2>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-600">Settings interface coming soon...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard onNavigate={handleItemClick} userName={userName} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        activeItem={activeItem} 
        onItemClick={handleItemClick} 
      />
      
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        <Header onMenuToggle={handleMenuToggle} />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;