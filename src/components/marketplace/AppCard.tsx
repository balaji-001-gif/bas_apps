import React from 'react';
import { Link } from 'react-router-dom';
import { Download, Star } from 'lucide-react';
import { BASApp } from '../../types';

export function AppCard({ app }: { app: BASApp }) {
  return (
    <Link 
      to={`/app/${app.id}`}
      className="group flex flex-col rounded-2xl border border-gray-100 bg-white p-5 transition-all hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100/50"
    >
      <div className="flex items-start space-x-4">
        <img 
          src={app.iconUrl} 
          alt={`${app.name} icon`} 
          className="h-16 w-16 rounded-xl object-cover ring-1 ring-gray-100 transition-transform group-hover:scale-105"
        />
        <div className="flex-1 space-y-1">
          <h3 className="font-semibold text-gray-900 line-clamp-1">{app.name}</h3>
          <p className="text-xs font-medium text-gray-500">{app.developer}</p>
          <div className="mt-2 flex items-center space-x-3 text-xs text-gray-500">
            <span className="flex items-center">
              <Star className="mr-1 h-3.5 w-3.5 fill-amber-400 text-amber-400" />
              {app.rating.toFixed(1)}
            </span>
            <span className="flex items-center">
              <Download className="mr-1 h-3.5 w-3.5" />
              {(app.downloads / 1000).toFixed(1)}k
            </span>
            <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-gray-600">
              {app.category}
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 line-clamp-2">
        {app.shortDescription}
      </p>
    </Link>
  );
}
