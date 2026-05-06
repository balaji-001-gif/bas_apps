import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'motion/react';
import { useApps } from '../context/AppContext';
import { Category } from '../types';
import { AppCard } from '../components/marketplace/AppCard';

const CATEGORIES: Category[] = [
  'All', 'Productivity', 'Finance', 'HR', 'CRM', 'Manufacturing', 'Retail', 'Education', 'Other'
];

export function Home() {
  const { apps } = useApps();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredApps = apps.filter(app => {
    const matchesSearch = 
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      app.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || app.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 mt-8 flex flex-col items-center text-center"
      >
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Discover BAS Applications
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-500">
          Find, share, and expand your business workflows with thousands of community-built modules and integrations.
        </p>

        {/* Search Bar */}
        <div className="mt-8 flex w-full max-w-xl items-center rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm transition-shadow focus-within:border-gray-300 focus-within:shadow-md focus-within:ring-1 focus-within:ring-gray-300">
          <Search className="h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search apps, integrations, or workflows..."
            className="ml-3 flex-1 border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Categories Filter */}
      <div className="mb-8 flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              activeCategory === category
                ? 'bg-gray-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* App Grid */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredApps.map((app) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              key={app.id}
            >
              <AppCard app={app} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50 text-center">
          <p className="text-gray-500">No applications found matching your criteria.</p>
          <button 
            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
            className="mt-4 font-medium text-gray-900 hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
