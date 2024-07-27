'use client';

import React, { useState, useEffect } from 'react';
import StockSearch from '@/components/StockSearch';
import StockOverview from '@/components/StockOverview';
import StockChart from '@/components/StockChart';
import { StockData } from '../types/stock';

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

export default function YahooFinanceApp() {
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    const initializeStocks = async () => {
      const initialStocks = await Promise.all(['AAPL', 'GOOGL', 'MSFT'].map(fetchStockData));
      setStocks(initialStocks);
    };
    initializeStocks();
  }, []);

  const addStock = async (symbol: string) => {
    if (!stocks.find(stock => stock.symbol === symbol)) {
      const newStock = await fetchStockData(symbol);
      setStocks([...stocks, newStock]);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Stock Tracker</h1>
      <StockSearch onSearch={addStock} />
      {stocks.map(stock => (
        <div key={stock.symbol}>
          <StockOverview stock={stock} />
          <StockChart stock={stock} />
        </div>
      ))}
    </div>
  );
};

// export default YahooFinanceApp;