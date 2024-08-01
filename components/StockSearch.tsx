"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
  );
};

export default StockSearch;