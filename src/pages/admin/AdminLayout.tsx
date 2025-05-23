
import React from 'react';
import { Link } from 'react-router-dom';

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AdminLayout = ({ children, title }: AdminLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-masarna-orange shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-white">Masarna Admin</h1>
          <Link to="/" className="text-white hover:underline">
            Return to Site
          </Link>
        </div>
      </header>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
