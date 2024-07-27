'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';
import { StockData } from '../types/stock';

interface StockOverviewProps {
  stock: StockData;
}

const StockOverview: React.FC<StockOverviewProps> = ({ stock }) => (
  <Card className="mb-4">
    <CardHeader>
      <CardTitle className="text-xl lg:text-2xl">{stock.symbol} - {stock.companyName}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className="mb-4 lg:mb-0">
          <span className="text-2xl lg:text-3xl font-bold">${stock.currentPrice.toFixed(2)}</span>
          <span className={`ml-2 ${stock.change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {stock.change >= 0 ? <ArrowUpIcon className="inline" /> : <ArrowDownIcon className="inline" />}
            {stock.change} ({stock.changePercent}%)
          </span>
        </div>
        <div className="w-full lg:w-auto">
        <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Open</TableCell>
                  <TableCell>{stock.open}</TableCell>
                  <TableCell>Volume</TableCell>
                  <TableCell>{stock.volume.toLocaleString()}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>High</TableCell>
                  <TableCell>{stock.high}</TableCell>
                  <TableCell>Market Cap</TableCell>
                  <TableCell>${(stock.marketCap / 1000000000).toFixed(2)}B</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Low</TableCell>
                  <TableCell>{stock.low}</TableCell>
                  <TableCell>P/E Ratio</TableCell>
                  <TableCell>{stock.peRatio}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default StockOverview;