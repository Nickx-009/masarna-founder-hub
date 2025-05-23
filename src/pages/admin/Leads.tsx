
import React from 'react';
import AdminLayout from './AdminLayout';
import LeadsExport from '@/components/admin/LeadsExport';

const Leads = () => {
  return (
    <AdminLayout title="Lead Management">
      <LeadsExport />
    </AdminLayout>
  );
};

export default Leads;
