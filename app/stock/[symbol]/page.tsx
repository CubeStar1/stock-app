"use client";

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import StockHeader from '@/components/StockHeader';
import StockChart from '@/components/StockChart';
import News from '@/components/News';
// import StockInfo from '@/components/StockInfo';
// import CompanyProfile from './CompanyProfile';
// import FinancialStatements from './FinancialStatements';
// import NewsArticles from './NewsArticles';
import { StockData } from '@/types/stock';
import StockOverview from '@/components/StockOverview';
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

const StockDetailPage = ({
  params,
  searchParams,
}: {
  params: { symbol: string }
  searchParams: { [key: string]: string | string[] | undefined }
}) => { 
  const symbol = params.symbol;
  const [stockData, setStockData] = useState<StockData | null>(null);

  useEffect(() => {
    if (symbol) {
      // Fetch stock data from your API
      fetchStockData(symbol as string).then(setStockData);
    }
  }, [symbol]);

  if (!stockData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <StockHeader {...stockData} /> */}
      <Tabs defaultValue="overview" className="mt-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="news">News</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StockChart stock={stockData} />
            <StockOverview stock={stockData} />
          </div>
        </TabsContent>
        <TabsContent value="chart">
            <StockChart stock={stockData} />
        </TabsContent>
        <TabsContent value="statistics">
          {/* Implement Statistics component */}
        </TabsContent>
        <TabsContent value="financials">
          {/* <FinancialStatements symbol={stockData.symbol} /> */}
        </TabsContent>
        <TabsContent value="profile">
          {/* <CompanyProfile symbol={stockData.symbol} /> */}
        </TabsContent>
        <TabsContent value="news">
          <News symbol={stockData.symbol} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StockDetailPage;

// You'll need to implement these components:
// CompanyProfile, FinancialStatements, NewsArticles
// Also, implement the fetchStockData function to get data from your API