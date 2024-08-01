'use client';

import React from 'react';
import { Bell, Menu, Search, User } from 'lucide-react';
import ModeToggle from "@/components/ThemeSwitcher";
import StockSearch from '@/components/StockSearch';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => (
  <header className="flex justify-between items-center p-4 border-b ">
    <div className="flex items-center">
      <button onClick={onMenuClick} className="mr-4 lg:hidden">
        <Menu className="w-6 h-6" />
      </button>
      <a href="/">
      <div className="text-2xl font-bold">
        StockTracker
      </div>
      </a>
    </div>
    <div className="flex items-center space-x-4 ">
      <StockSearch />
      <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
      <User className="w-5 h-5 text-gray-500 cursor-pointer" />
      <ModeToggle />
    </div>
  </header>
);

export default Header;