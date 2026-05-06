import React from 'react';
import { Link } from 'react-router-dom';
import { Store, PlusSquare, Search } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="flex w-full items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
              <Store size={18} />
            </div>
            <span className="font-semibold tracking-tight text-gray-900">BAS Marketplace</span>
          </Link>

          <div className="flex w-full max-w-sm items-center space-x-2 px-4 ml-8 mr-auto">
            {/* We'll handle search in the home page for real filtering, 
                this is just a dummy visual search for the navbar if needed, 
                or we can just skip it here and put it in the Hero */}
          </div>

          <div className="flex items-center space-x-4">
            <Link 
              to="/submit" 
              className="group flex items-center space-x-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 transition-all hover:border-gray-900 hover:bg-gray-50"
            >
              <PlusSquare size={16} className="text-gray-500 group-hover:text-gray-900" />
              <span>Share Application</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
