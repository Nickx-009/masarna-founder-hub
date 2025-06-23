import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import AdminLogin from '@/components/admin/AdminLogin';
import { adminAuth } from '@/utils/adminAuth';
import { Home, Users, Settings as SettingsIcon, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const SettingsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

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

  // Handle save settings
  const handleSaveSettings = () => {
    toast({
      title: "Settings saved",
      description: "Your settings have been saved successfully.",
    });
  };

  // If not authenticated, show login
  if (!isAuthenticated) {
    return <AdminLogin onAuthenticated={handleAuthenticated} />;
  }

  return (
    <>
      <Head>
        <title>Settings | Masarna Admin</title>
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
                  className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors"
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
                  className="flex items-center p-3 rounded-lg bg-white/20 text-white"
                >
                  <SettingsIcon className="h-5 w-5 mr-3" />
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
              <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </header>
          
          <main className="p-6">
            <div className="bg-white rounded-lg shadow border border-gray-200 max-w-4xl mx-auto">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6">General Settings</h3>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="site-name">Site Name</Label>
                      <Input id="site-name" defaultValue="Masarna" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="site-url">Site URL</Label>
                      <Input id="site-url" defaultValue="https://masarna.co" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="site-description">Site Description</Label>
                    <Input id="site-description" defaultValue="Operations-as-a-Service for startups" />
                  </div>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-semibold">Email Settings</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Admin Email</Label>
                      <Input id="admin-email" type="email" defaultValue="admin@masarna.co" />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">Contact Form Email</Label>
                      <Input id="contact-email" type="email" defaultValue="hello@masarna.co" />
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <h3 className="text-lg font-semibold">Notification Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Email Notifications</p>
                        <p className="text-sm text-gray-500">Receive email notifications for new leads</p>
                      </div>
                      <Switch defaultChecked id="email-notifications" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Lead Alerts</p>
                        <p className="text-sm text-gray-500">Show browser notifications for new leads</p>
                      </div>
                      <Switch id="lead-alerts" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Weekly Reports</p>
                        <p className="text-sm text-gray-500">Receive weekly lead summary reports</p>
                      </div>
                      <Switch defaultChecked id="weekly-reports" />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <Button 
                    onClick={handleSaveSettings}
                    className="bg-masarna-orange hover:bg-masarna-orange/90"
                  >
                    Save Settings
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;