
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
    { name: 'People', path: '/people' },
    { name: 'Publications', path: '/publications' },
    { name: 'About PI', path: '/about-pi' },
    { name: 'Outreach', path: '/outreach' },
    { name: 'Join Us', path: '/join-us' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="bg-white/90 backdrop-blur-md shadow-lg border border-black rounded-2xl">
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              {/* Logo space */}
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center border border-black">
                <div className="w-6 h-6 bg-blue-500 rounded"></div>
              </div>
              <Link to="/" className="text-xl font-bold text-blue-900">
                Research Lab
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 border border-transparent ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-900 border-black'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50 hover:border-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 hover:bg-blue-50 focus:outline-none border border-transparent hover:border-black"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 border-t border-black rounded-b-2xl">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 border border-transparent ${
                      isActive(item.path)
                        ? 'bg-blue-100 text-blue-900 border-black'
                        : 'text-gray-700 hover:text-blue-900 hover:bg-blue-50 hover:border-black'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
