import React from 'react';
import { Store } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-900 text-white">
              <Store size={14} />
            </div>
            <span className="text-sm font-semibold tracking-tight text-gray-900">BAS Marketplace</span>
          </div>
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} BAS Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
