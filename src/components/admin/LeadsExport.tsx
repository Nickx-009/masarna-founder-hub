
import React, { useState, useEffect } from 'react';
import { getLeadsFromLocalStorage, downloadLeadsAsCSV, Lead } from '@/utils/leadUtils';
import { Button } from '@/components/ui/button';
import { Download, Trash2 } from 'lucide-react';
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

const LeadsExport = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);

  useEffect(() => {
    // Load leads from localStorage
    setLeads(getLeadsFromLocalStorage());
  }, []);

  const handleExportCSV = () => {
    downloadLeadsAsCSV();
  };

  const handleClearLeads = () => {
    localStorage.removeItem('masarna_leads');
    setLeads([]);
    setDeleteAlertOpen(false);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Lead Management</h2>
        <div className="space-x-2">
          <Button onClick={handleExportCSV} variant="outline" className="flex items-center gap-1">
            <Download className="h-4 w-4" /> Export CSV
          </Button>

          <AlertDialog open={deleteAlertOpen} onOpenChange={setDeleteAlertOpen}>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="flex items-center gap-1">
                <Trash2 className="h-4 w-4" /> Clear All
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

      {leads.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Company</th>
                <th className="px-4 py-2">Interest</th>
                <th className="px-4 py-2">Source</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{lead.name}</td>
                  <td className="px-4 py-2">{lead.email}</td>
                  <td className="px-4 py-2">{lead.company}</td>
                  <td className="px-4 py-2">{lead.interest}</td>
                  <td className="px-4 py-2">{lead.source || 'N/A'}</td>
                  <td className="px-4 py-2">
                    {lead.timestamp ? new Date(lead.timestamp).toLocaleDateString() : 'N/A'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          No leads captured yet. When users submit the lead form, they will appear here.
        </div>
      )}
    </div>
  );
};

export default LeadsExport;
