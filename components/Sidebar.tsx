'use client';

import React, { useState } from 'react';
import { Home, TrendingUp, PieChart, Settings, X } from 'lucide-react';
import Header from "@/components/Header";
import { ThemeProvider } from './themeprovider';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
  }

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => (
<aside className={`
    fixed inset-y-0 left-0 z-50 w-64 bg-gray-100 dark:bg-[#09090b] border transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    lg:relative lg:translate-x-0
  `}>
    <div className="flex justify-between items-center p-4 lg:hidden">
      <h2 className="text-xl font-bold">Menu</h2>
      <button onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
    </div>    
    <nav className='p-4'>
      <ul className="space-y-2">
        <li>
          <a href="/" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            <Home className="w-5 h-5" />
            <span>Dashboard</span>
          </a>
        </li>
        <li>
          <a href="/watchlist" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            <TrendingUp className="w-5 h-5" />
            <span>Watchlist</span>
          </a>
        </li>

        <li>
          <a href="/portfolio" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            <PieChart className="w-5 h-5" />
            <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            <PieChart className="w-5 h-5" />
            <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center space-x-2 p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
);



const SidebarComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
      <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
        <div className="flex h-screen overflow-hidden">
          <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
          <div className="flex flex-col flex-1 overflow-hidden">
            
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 pt-0">
            <Header onMenuClick={toggleSidebar} />
              {children}
            </main>
          </div>
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" 
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
        </div>
      </ThemeProvider>
  );
}

export default SidebarComponent;
