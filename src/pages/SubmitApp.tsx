import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { useApps } from '../context/AppContext';
import { BASApp } from '../types';

export function SubmitApp() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { apps, addApp, updateApp } = useApps();
  const isUpdate = Boolean(id);

  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    description: '',
    developer: '',
    version: '1.0.0',
    category: 'Productivity',
    iconUrl: '',
    featureString: '',
    githubUrl: '',
    websiteUrl: ''
  });

  useEffect(() => {
    if (isUpdate) {
      const existingApp = apps.find(a => a.id === id);
      if (existingApp) {
        setFormData({
          name: existingApp.name,
          shortDescription: existingApp.shortDescription,
          description: existingApp.description,
          developer: existingApp.developer,
          version: existingApp.version,
          category: existingApp.category,
          iconUrl: existingApp.iconUrl,
          featureString: existingApp.features.join(', '),
          githubUrl: existingApp.githubUrl || '',
          websiteUrl: existingApp.websiteUrl || ''
        });
      } else {
        navigate('/');
      }
    }
  }, [id, apps, isUpdate, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Parse features
    const features = formData.featureString.split(',').map(f => f.trim()).filter(f => f.length > 0);
    
    if (isUpdate && id) {
      const existingApp = apps.find(a => a.id === id);
      if (existingApp) {
        updateApp({
          ...existingApp,
          name: formData.name,
          shortDescription: formData.shortDescription,
          description: formData.description,
          developer: formData.developer,
          version: formData.version,
          category: formData.category,
          iconUrl: formData.iconUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=150&h=150',
          features,
          githubUrl: formData.githubUrl,
          websiteUrl: formData.websiteUrl,
          updatedAt: new Date().toISOString()
        });
      }
      navigate(`/app/${id}`);
    } else {
      const newId = `app-${Date.now()}`;
      const newApp: BASApp = {
        id: newId,
        name: formData.name,
        shortDescription: formData.shortDescription,
        description: formData.description,
        developer: formData.developer,
        version: formData.version,
        rating: 0,
        reviewsCount: 0,
        downloads: 0,
        category: formData.category,
        iconUrl: formData.iconUrl || 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=150&h=150',
        screenshots: [],
        features,
        githubUrl: formData.githubUrl,
        websiteUrl: formData.websiteUrl,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      addApp(newApp);
      navigate(`/app/${newId}`);
    }
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            {isUpdate ? 'Update Application' : 'Submit a new Application'}
          </h1>
          <p className="mt-2 text-gray-600">
            {isUpdate 
              ? 'Update the details of your application below.' 
              : 'Share your BAS Application with the community by filling out the details below.'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-900">Application Name *</label>
              <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" placeholder="e.g. Acme CRM" />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-900">Short Description *</label>
              <input required type="text" id="shortDescription" name="shortDescription" value={formData.shortDescription} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" placeholder="A one-sentence summary of your app." />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-900">Full Description *</label>
              <textarea required id="description" name="description" rows={5} value={formData.description} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" placeholder="Detailed description of what your app does..."></textarea>
            </div>

            <div>
              <label htmlFor="developer" className="block text-sm font-medium text-gray-900">Developer / Company *</label>
              <input required type="text" id="developer" name="developer" value={formData.developer} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-900">Category *</label>
              <select required id="category" name="category" value={formData.category} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border bg-white">
                <option value="Productivity">Productivity</option>
                <option value="Finance">Finance</option>
                <option value="HR">HR</option>
                <option value="CRM">CRM</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Retail">Retail</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="version" className="block text-sm font-medium text-gray-900">Version</label>
              <input type="text" id="version" name="version" value={formData.version} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" placeholder="1.0.0" />
            </div>
            
            <div>
              <label htmlFor="iconUrl" className="block text-sm font-medium text-gray-900">Icon URL</label>
              <input type="url" id="iconUrl" name="iconUrl" value={formData.iconUrl} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" placeholder="https://..." />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="featureString" className="block text-sm font-medium text-gray-900">Features (comma separated)</label>
              <input type="text" id="featureString" name="featureString" value={formData.featureString} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" placeholder="Real-time sync, Custom queries, Reporting" />
            </div>

            <div className="sm:col-span-2">
              <div className="relative">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-3 text-sm font-medium text-gray-900">Links (Optional)</span>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="websiteUrl" className="block text-sm font-medium text-gray-900">Website URL</label>
              <input type="url" id="websiteUrl" name="websiteUrl" value={formData.websiteUrl} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" placeholder="https://..." />
            </div>

            <div>
              <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-900">GitHub URL</label>
              <input type="url" id="githubUrl" name="githubUrl" value={formData.githubUrl} onChange={handleChange} className="mt-2 block w-full rounded-lg border-gray-300 py-2.5 px-3 text-gray-900 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm border" placeholder="https://github.com/..." />
            </div>

          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="flex w-full justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              {isUpdate ? 'Save Changes' : 'Publish Application'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
