import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useApps } from '../context/AppContext';
import { ArrowLeft, Download, ExternalLink, Github, CheckCircle2, Star } from 'lucide-react';

export function AppDetails() {
  const { id } = useParams<{ id: string }>();
  const { apps } = useApps();
  
  const app = apps.find(a => a.id === id);

  if (!app) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-900">App not found</h2>
        <Link to="/" className="mt-4 text-gray-500 hover:text-gray-900 hover:underline">
          Return to Marketplace
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/" className="mb-8 flex items-center text-sm font-medium text-gray-500 hover:text-gray-900">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Marketplace
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Header content */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="flex items-start gap-6">
            <img 
              src={app.iconUrl} 
              alt={app.name} 
              className="h-24 w-24 rounded-2xl border border-gray-100 object-cover shadow-sm sm:h-32 sm:w-32"
            />
            <div className="flex flex-col justify-center py-2">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{app.name}</h1>
              <p className="mt-2 text-lg text-gray-500">{app.developer}</p>
              
              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center rounded-full bg-amber-50 px-3 py-1 text-amber-700">
                  <Star className="mr-1.5 h-4 w-4 fill-amber-400 text-amber-400" />
                  {app.rating.toFixed(1)} ({app.reviewsCount} reviews)
                </span>
                <span className="flex items-center">
                  <Download className="mr-1.5 h-4 w-4" />
                  {app.downloads.toLocaleString()} installs
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                  {app.category}
                </span>
                <span>Version {app.version}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 sm:w-64">
            <button className="flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2">
              Install App
            </button>
            <Link 
              to={`/update/${app.id}`}
              className="flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
            >
              Update Details
            </Link>
          </div>
        </div>

        {/* Separator */}
        <div className="my-10 h-px w-full bg-gray-200" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Screenshots */}
            {app.screenshots && app.screenshots.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-gray-900">Screenshots</h2>
                <div className="mt-4 flex space-x-4 overflow-x-auto pb-4 snap-x">
                  {app.screenshots.map((src, i) => (
                    <img 
                      key={i} 
                      src={src} 
                      alt={`Screenshot ${i+1}`} 
                      className="h-64 w-[400px] shrink-0 snap-center rounded-xl border border-gray-200 object-cover shadow-sm bg-gray-50"
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Description */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900">About this App</h2>
              <p className="mt-4 leading-relaxed text-gray-600">
                {app.description}
              </p>
            </section>

            {/* Features */}
            {app.features && app.features.length > 0 && (
              <section>
                <h2 className="text-xl font-semibold text-gray-900">Features</h2>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {app.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-600">
                      <CheckCircle2 className="mr-2 h-5 w-5 shrink-0 text-gray-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8 rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
            <section>
              <h3 className="text-sm font-semibold uppercase text-gray-900">Information</h3>
              <dl className="mt-4 space-y-4 text-sm text-gray-600">
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <dt className="font-medium text-gray-900">Developer</dt>
                  <dd>{app.developer}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <dt className="font-medium text-gray-900">Updated</dt>
                  <dd>{new Date(app.updatedAt).toLocaleDateString()}</dd>
                </div>
                <div className="flex justify-between border-b border-gray-200 pb-2">
                  <dt className="font-medium text-gray-900">Published</dt>
                  <dd>{new Date(app.createdAt).toLocaleDateString()}</dd>
                </div>
                <div className="flex justify-between pb-2">
                  <dt className="font-medium text-gray-900">Size</dt>
                  <dd>Placeholder (2.4 MB)</dd>
                </div>
              </dl>
            </section>

            <section className="space-y-3">
              <h3 className="text-sm font-semibold uppercase text-gray-900">Links</h3>
              {app.websiteUrl && (
                <a href={app.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-gray-900 hover:underline">
                  <ExternalLink className="mr-2 h-4 w-4" /> Official Website
                </a>
              )}
              {app.githubUrl && (
                <a href={app.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm text-gray-600 hover:text-gray-900 hover:underline">
                  <Github className="mr-2 h-4 w-4" /> Source Code
                </a>
              )}
            </section>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
