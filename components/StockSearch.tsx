"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const StockSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/stock/${query.toUpperCase()}`);
    }
  };

  return (
    <>

      <div className='lg:hidden'>
        <Dialog>
          <DialogTrigger>
            <Search className="w-5 h-5 text-gray-500 cursor-pointer" />
          </DialogTrigger>
          <DialogContent className='p-4 rounded-lg'>
            <DialogHeader>
              <DialogTitle>
                Search Stocks
              </DialogTitle>
            </DialogHeader>
            <DialogDescription>
              <form onSubmit={handleSearch} className="flex justify-between">
                <Input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Enter stock symbol (e.g., AAPL)"
                  className="w-full mr-2"
                />
                <Button type="submit">Search</Button>
              </form>
            </DialogDescription>
          </DialogContent>
        </Dialog>
      </div>
      <div className='hidden lg:block'>
        <form onSubmit={handleSearch} className="flex">
          <Input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter stock symbol (e.g., AAPL)"
            className="w-64 mr-2"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>
    
    </>
  );
};

export default StockSearch;