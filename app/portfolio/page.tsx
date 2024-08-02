"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchStockData, fetchCompanyOverview } from '@/lib/alphaVantage';

const initialPortfolioStocks: PortfolioStock[] = [
    { logo: "/apple-logo.png", name: "Apple", totalShares: "310.40", totalReturn: "-1.10%", returnColor: "text-destructive" },
    { logo: "/meta-logo.png", name: "Meta", totalShares: "140.45", totalReturn: "-0.10%", returnColor: "text-destructive" },
    { logo: "/microsoft-logo.png", name: "Microsoft", totalShares: "240.98", totalReturn: "+0.85%", returnColor: "text-green-500" },
    { logo: "/google-logo.png", name: "Google", totalShares: "99.12", totalReturn: "-0.04%", returnColor: "text-destructive" },
    { logo: "/amazon-logo.png", name: "Amazon", totalShares: "150.30", totalReturn: "+1.20%", returnColor: "text-green-500" },
    { logo: "/tesla-logo.png", name: "Tesla", totalShares: "80.75", totalReturn: "-2.30%", returnColor: "text-destructive" },
  ];

// Types
interface PortfolioStock {
  logo: string;
  name: string;
  totalShares: string;
  totalReturn: string;
  returnColor: string;
}

interface WatchlistStock {
  logo: string;
  name: string;
  ticker: string;
  price: string;
  change: string;
  changeColor: string;
}

interface ChartData {
  date: string;
  price: number;
}

// Components
const PortfolioItem: React.FC<PortfolioStock> = ({ logo, name, totalShares, totalReturn, returnColor }) => (
  <Card className="w-[200px] sm:w-[150px] flex-shrink-0">
    <CardContent className="flex flex-col items-center p-4">
      <Avatar className="w-12 h-12 mb-2">
        <AvatarImage src={logo} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <CardTitle className="text-sm font-semibold">{name}</CardTitle>
      <div className="text-xs text-muted-foreground">Total Shares</div>
      <div className="font-bold">${totalShares}</div>
      <div className={`text-xs ${returnColor}`}>
        Total Return {totalReturn}
      </div>
    </CardContent>
  </Card>
);

const WatchlistItem: React.FC<WatchlistStock & { onRemove: () => void; onClick: () => void }> = ({ logo, name, ticker, price, change, changeColor, onRemove, onClick }) => (
  <div className="flex items-center justify-between py-2 cursor-pointer" onClick={onClick}>
    <div className="flex items-center">
      <Avatar className="w-8 h-8 mr-2">
        <AvatarImage src={logo} alt={name} />
        <AvatarFallback>{name[0]}</AvatarFallback>
      </Avatar>
      <div>
        <div className="font-semibold">{ticker}</div>
        <div className="text-xs text-muted-foreground">{name}</div>
      </div>
    </div>
    <div className="text-right">
      <div className="font-semibold">${price}</div>
      <div className={`text-xs ${changeColor}`}>{change}</div>
    </div>
    <Button variant="ghost" size="icon" onClick={(e) => { e.stopPropagation(); onRemove(); }} className="ml-2 text-destructive hover:text-destructive">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </Button>
  </div>
);

const StockPortfolioDashboard = () => {
  const [watchlist, setWatchlist] = useState<WatchlistStock[]>([]);
  const [newStock, setNewStock] = useState<{ ticker: string; name: string }>({ ticker: '', name: '' });
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [selectedStock, setSelectedStock] = useState<WatchlistStock | null>(
    {
        logo: "/apple-logo.png",
        name: "Apple",
        ticker: "AAPL",
        price: "0.00",
        change: "0.00%",
        changeColor: "text-muted-foreground"
    }
  );

  useEffect(() => {
    if (selectedStock) {
      fetchStockData(selectedStock.ticker).then(data => {
        if (data && data['Time Series (5min)']) {
          const chartData = Object.entries(data['Time Series (5min)']).map(([date, values]: any) => ({
            date,
            price: parseFloat(values['1. open'])
          }));
          setChartData(chartData);
        }
      });
    }
  }, [selectedStock]);

  const addToWatchlist = async () => {
    if (newStock.ticker && newStock.name) {
      const companyData = await fetchCompanyOverview(newStock.ticker);
      if (companyData) {
        const { Name, Symbol } = companyData;
        setWatchlist([...watchlist, {
          logo: `/placeholder-logo.png`,
          name: Name,
          ticker: Symbol,
          price: '0.00',
          change: '0.00%',
          changeColor: 'text-muted-foreground'
        }]);
        setNewStock({ ticker: '', name: '' });
      }
    }
  };

  const removeFromWatchlist = (index: number) => {
    setWatchlist(watchlist.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-background p-4 sm:p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
          <div>
            <h1 className="text-2xl font-bold">My Portfolio</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Input
              type="text"
              placeholder="Search stocks"
              className="w-full sm:w-64"
            />
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/6.x/initials/svg?seed=AM" alt="User" />
              <AvatarFallback>AM</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <ScrollArea className="mb-6 w-full whitespace-nowrap rounded-md border">
          <div className="flex w-max space-x-4 p-4">
            {initialPortfolioStocks.map((stock, index) => (
              <PortfolioItem key={index} {...stock} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <div>
                  <CardTitle>{selectedStock ? selectedStock.name : "Select a stock"}</CardTitle>
                  <p className="text-sm text-muted-foreground">{selectedStock ? selectedStock.ticker : ""}</p>
                </div>
                <div className="mt-2 sm:mt-0">
                  <p className="text-2xl font-bold">{selectedStock ? `$${selectedStock.price}` : ""}</p>
                  <p className={`text-sm ${selectedStock ? selectedStock.changeColor : ""}`}>{selectedStock ? selectedStock.change : ""}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ScrollArea className="w-full whitespace-nowrap mb-4">
                <div className="flex space-x-2">
                  <Button variant="secondary" size="sm">1 Week</Button>
                  <Button variant="ghost" size="sm">1 Month</Button>
                  <Button variant="ghost" size="sm">3 Month</Button>
                  <Button variant="ghost" size="sm">1 Year</Button>
                </div>
              </ScrollArea>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Watchlist</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[300px]">
                <div className="space-y-4">
                  {watchlist.map((stock, index) => (
                    <WatchlistItem
                      key={index}
                      {...stock}
                      onRemove={() => removeFromWatchlist(index)}
                      onClick={() => setSelectedStock(stock)}
                    />
                  ))}
                </div>
                <ScrollBar orientation="vertical" />
              </ScrollArea>
 
              <div className="flex mt-4">
                <Input
                  type="text"
                  placeholder="Ticker"
                  value={newStock.ticker}
                  onChange={(e) => setNewStock({ ...newStock, ticker: e.target.value })}
                  className="mr-2"
                />
                <Input
                  type="text"
                  placeholder="Name"
                  value={newStock.name}
                  onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
                  className="mr-2"
                />
                <Button onClick={addToWatchlist}>Add</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StockPortfolioDashboard;
