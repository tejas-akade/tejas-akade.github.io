
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-24">
        {children}
      </main>
      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-blue-200">© 2024 Research Lab. All rights reserved.</p>
            <p className="text-blue-300 text-sm mt-2">Advancing knowledge through innovative research</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
