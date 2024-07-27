'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';

interface StockSearchProps {
  onSearch: (symbol: string) => void;
}

const StockSearch: React.FC<StockSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = () => {
    if (searchTerm) {
      onSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <Input
        placeholder="Search for a stock symbol"
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value.toUpperCase())}
      />
      <Button onClick={handleSearch}><SearchIcon className="mr-2" /> Search</Button>
    </div>
  );
};

export default StockSearch;