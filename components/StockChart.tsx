'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { StockData } from '../types/stock';

interface StockChartProps {
  stock: StockData;
}

const StockChart: React.FC<StockChartProps> = ({ stock }) => (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>{stock.symbol} Stock Price Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={stock.historicalData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="price" stroke="hsl(var(--chart-1))" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );

export default StockChart;