import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AdminLogin from '@/components/admin/AdminLogin';
import LeadsExport from '@/components/admin/LeadsExport';
import { adminAuth } from '@/utils/adminAuth';
import { Home, Users, Settings, LogOut } from 'lucide-react';

const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  // Check authentication on component mount
  useEffect(() => {
    const authStatus = adminAuth.isAuthenticated();
    setIsAuthenticated(authStatus);
    
    if (authStatus) {
      // Extend session on activity
      adminAuth.extendSession();
    }
  }, []);

  // Handle authentication success
  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    adminAuth.logout();
    setIsAuthenticated(false);
  };

  // If not authenticated, show login
  if (!isAuthenticated) {
    return <AdminLogin onAuthenticated={handleAuthenticated} />;
  }

  return (
    <>
      <Head>
        <title>Admin Dashboard | Masarna</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-64 bg-masarna-orange text-white">
          <div className="p-4 flex items-center">
            <h1 className="text-xl font-bold">Masarna Admin</h1>
          </div>
          <nav className="mt-8">
            <ul className="space-y-2 px-2">
              <li>
                <a 
                  href="/admin" 
                  className="flex items-center p-3 rounded-lg bg-white/20 text-white"
                >
                  <Home className="h-5 w-5 mr-3" />
                  Dashboard
                </a>
              </li>
              <li>
                <a 
                  href="/admin/leads" 
                  className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Users className="h-5 w-5 mr-3" />
                  Leads
                </a>
              </li>
              <li>
                <a 
                  href="/admin/settings" 
                  className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Settings className="h-5 w-5 mr-3" />
                  Settings
                </a>
              </li>
            </ul>
          </nav>
          <div className="absolute bottom-0 left-0 w-64 p-4">
            <a 
              href="/" 
              className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Return to Site
            </a>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1">
          <header className="bg-white shadow">
            <div className="px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </header>
          
          <main className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-2">Total Leads</h3>
                <p className="text-3xl font-bold text-masarna-orange">0</p>
                <p className="text-sm text-gray-500 mt-2">Last 30 days</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-2">Conversion Rate</h3>
                <p className="text-3xl font-bold text-masarna-orange">0%</p>
                <p className="text-sm text-gray-500 mt-2">Leads to customers</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-medium mb-2">Active Users</h3>
                <p className="text-3xl font-bold text-masarna-orange">0</p>
                <p className="text-sm text-gray-500 mt-2">Currently online</p>
              </div>
            </div>
            
            <LeadsExport />
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;