"use client"

import React, { useState, useEffect } from 'react';

import { StockData } from '@/types/stock';
import StockChart from '@/components/StockChart';
import StockOverview from '@/components/StockOverview';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import StockList from '@/components/StockList';

// Mock API function
const fetchStockData = async (symbol: string): Promise<StockData> => {
    // In a real app, this would be an API call
    const basePrice = Math.random() * 1000 + 100;
    const data: StockData = {
      symbol,
      companyName: `${symbol} Inc.`,
      currentPrice: basePrice,
      change: parseFloat((Math.random() * 10 - 5).toFixed(2)),
      changePercent: parseFloat((Math.random() * 5 - 2.5).toFixed(2)),
      open: parseFloat((basePrice - Math.random() * 10).toFixed(2)),
      high: parseFloat((basePrice + Math.random() * 20).toFixed(2)),
      low: parseFloat((basePrice - Math.random() * 20).toFixed(2)),
      volume: Math.floor(Math.random() * 10000000),
      marketCap: parseFloat((basePrice * 1000000).toFixed(0)),
      peRatio: parseFloat((Math.random() * 30 + 10).toFixed(2)),
      dividend: parseFloat((Math.random() * 2).toFixed(2)),
      yield: parseFloat((Math.random() * 5).toFixed(2)),
      historicalData: Array.from({ length: 30 }, (_, i) => ({
        date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
        price: parseFloat((basePrice + Math.random() * 100 - 50).toFixed(2)),
      })),
    };
    return data;
  };

const Dashboard: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    const initialStocks = JSON.parse(localStorage.getItem('stocks') || '[]');
    if (initialStocks.length > 0) {
      setStocks(initialStocks);
    } else {
      const defaultStocks = ['AAPL', 'GOOGL', 'MSFT'];
      Promise.all(defaultStocks.map(fetchStockData)).then(setStocks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('stocks', JSON.stringify(stocks));
  }, [stocks]);

  const addStock = async () => {
    if (searchTerm && !stocks.find(stock => stock.symbol === searchTerm)) {
      const newStock = await fetchStockData(searchTerm);
      setStocks([...stocks, newStock]);
      setSearchTerm('');
    }
  };

  const removeStock = (symbol: string) => {
    setStocks(stocks.filter(stock => stock.symbol !== symbol));
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Stock Tracker</h1>
      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Search for a stock symbol"
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value.toUpperCase())}
        />
        <Button onClick={addStock}><SearchIcon className="mr-2" /> Search</Button>
      </div>
      <div className='border rounded-xl my-4'>
      <StockList stocks={stocks} onRemoveStock={removeStock} />
      </div>
      {stocks.map(stock => (
        <div key={stock.symbol} className='border rounded-xl p-4 my-4'>
          <StockOverview stock={stock} />
          <StockChart stock={stock} />
        </div>
      ))}
    </div>
  );
};

export default Dashboard;