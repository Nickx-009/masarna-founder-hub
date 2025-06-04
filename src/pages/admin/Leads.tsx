
import React, { useState, useEffect } from 'react';
import AdminLayout from './AdminLayout';
import AdminLogin from '@/components/admin/AdminLogin';
import { getSecureLeads, exportSecureLeadsToCSV, clearSecureLeads, type SecureLead } from '@/utils/secureLeadUtils';
import { adminAuth } from '@/utils/adminAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Download, Search, ArrowUpDown, Shield, LogOut } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';

const Leads = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [leads, setLeads] = useState<SecureLead[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<keyof SecureLead | ''>('timestamp');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const { toast } = useToast();

  // Check authentication on component mount
  useEffect(() => {
    const authStatus = adminAuth.isAuthenticated();
    setIsAuthenticated(authStatus);
    
    if (authStatus) {
      loadLeads();
      // Extend session on activity
      adminAuth.extendSession();
    }
  }, []);

  // Load leads from secure storage
  const loadLeads = () => {
    const storedLeads = getSecureLeads();
    setLeads(storedLeads);
  };

  // Handle authentication success
  const handleAuthenticated = () => {
    setIsAuthenticated(true);
    loadLeads();
  };

  // Handle logout
  const handleLogout = () => {
    adminAuth.logout();
    setIsAuthenticated(false);
    setLeads([]);
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
  };

  // Handle CSV download
  const handleDownloadCSV = () => {
    try {
      const csv = exportSecureLeadsToCSV();
      
      if (!csv) {
        toast({
          title: "No data to export",
          description: "There are no leads to export.",
          variant: "destructive",
        });
        return;
      }
      
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.setAttribute('href', url);
      link.setAttribute('download', `masarna-leads-${new Date().toISOString().split('T')[0]}.csv`);
      link.style.visibility = 'hidden';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Export successful",
        description: "Leads have been exported to CSV.",
      });
    } catch (error) {
      console.error('Export error:', error);
      toast({
        title: "Export failed",
        description: "Unable to export leads. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Handle clear all leads
  const handleClearLeads = () => {
    clearSecureLeads();
    setLeads([]);
    toast({
      title: "Leads cleared",
      description: "All leads have been permanently deleted.",
    });
  };

  // If not authenticated, show login
  if (!isAuthenticated) {
    return <AdminLogin onAuthenticated={handleAuthenticated} />;
  }

  // Handle search
  const filteredLeads = leads.filter(lead => {
    const searchable = `${lead.name} ${lead.email} ${lead.company} ${lead.phone || ''} ${lead.interest || ''}`.toLowerCase();
    return searchable.includes(searchTerm.toLowerCase());
  });

  // Handle sorting
  const handleSort = (field: keyof SecureLead) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedLeads = [...filteredLeads].sort((a, b) => {
    if (!sortField) return 0;
    
    const fieldA = a[sortField];
    const fieldB = b[sortField];
    
    if (fieldA === fieldB) return 0;
    
    const comparison = fieldA < fieldB ? -1 : 1;
    return sortDirection === 'asc' ? comparison : -comparison;
  });

  return (
    <AdminLayout title="Lead Management">
      <div className="bg-white rounded-lg shadow p-6">
        {/* Header with logout */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-masarna-orange" />
            <span className="text-sm text-gray-600">
              Authenticated as {adminAuth.getCurrentSession()?.username}
            </span>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>

        {/* Search and actions */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex space-x-2">
            <Button 
              onClick={handleDownloadCSV}
              className="bg-masarna-orange hover:bg-masarna-orange/90"
            >
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">
                  Clear All
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete all captured leads. This action cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleClearLeads}>Delete All</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
        
        {/* Leads table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('timestamp')}
                >
                  <div className="flex items-center">
                    Date
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('name')}
                >
                  <div className="flex items-center">
                    Name
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('email')}
                >
                  <div className="flex items-center">
                    Email
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('company')}
                >
                  <div className="flex items-center">
                    Company
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('interest')}
                >
                  <div className="flex items-center">
                    Interest
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  onClick={() => handleSort('source')}
                >
                  <div className="flex items-center">
                    Source
                    <ArrowUpDown className="ml-1 h-4 w-4" />
                  </div>
                </th>
                <th 
                  scope="col" 
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  CTA
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedLeads.length > 0 ? (
                sortedLeads.map((lead, index) => (
                  <tr key={lead.id || index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(lead.timestamp).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {lead.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.interest || '-'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.source.replace('/', '') || 'Homepage'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {lead.ctaText || '-'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">
                    No leads found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {leads.length > 0 && (
          <div className="mt-6 text-sm text-gray-500">
            Showing {filteredLeads.length} of {leads.length} leads
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Leads;
