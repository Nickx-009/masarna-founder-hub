
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Users, Settings, LogOut } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-masarna-orange text-white">
        <div className="p-4 flex items-center">
          <h1 className="text-xl font-bold">Masarna Admin</h1>
        </div>
        <nav className="mt-8">
          <ul className="space-y-2 px-2">
            <li>
              <Link 
                to="/admin" 
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  isActive('/admin') 
                    ? 'bg-white/20 text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Home className="h-5 w-5 mr-3" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/leads" 
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  isActive('/admin/leads') 
                    ? 'bg-white/20 text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Users className="h-5 w-5 mr-3" />
                Leads
              </Link>
            </li>
            <li>
              <Link 
                to="/admin/settings" 
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  isActive('/admin/settings') 
                    ? 'bg-white/20 text-white' 
                    : 'hover:bg-white/10'
                }`}
              >
                <Settings className="h-5 w-5 mr-3" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 w-64 p-4">
          <Link 
            to="/" 
            className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Return to Site
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        <header className="bg-white shadow">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          </div>
        </header>
        
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
