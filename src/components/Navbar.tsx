import React from 'react';
import { Link } from 'react-router-dom';
import { PenLine, LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <PenLine className="h-8 w-8" />
            <span className="text-xl font-bold">WriteRight</span>
          </Link>
          <div className="flex items-center space-x-4">
            <button className="hover:text-indigo-200 transition-colors flex items-center space-x-1">
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;