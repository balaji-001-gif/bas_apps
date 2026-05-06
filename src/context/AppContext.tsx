import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BASApp } from '../types';
import { mockApps } from '../data/mockApps';

interface AppContextType {
  apps: BASApp[];
  addApp: (app: BASApp) => void;
  updateApp: (app: BASApp) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [apps, setApps] = useState<BASApp[]>(mockApps);

  const addApp = (app: BASApp) => {
    setApps([...apps, app]);
  };

  const updateApp = (updatedApp: BASApp) => {
    setApps(apps.map((app) => (app.id === updatedApp.id ? updatedApp : app)));
  };

  return (
    <AppContext.Provider value={{ apps, addApp, updateApp }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApps() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApps must be used within an AppProvider');
  }
  return context;
}
