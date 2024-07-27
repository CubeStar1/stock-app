import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import StockOverview from './StockOverview';
import StockChart from './StockChart';
import { StockData } from '../types/stock';

interface StockCardProps {
  stock: StockData;
  onRemove: (symbol: string) => void;
}

const StockCard: React.FC<StockCardProps> = ({ stock, onRemove }) => {
  return (
    <Card className="relative overflow-hidden backdrop-blur-md bg-white/30 border border-gray-200 rounded-lg shadow-lg">
      <CardContent className="p-6">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2"
          onClick={() => onRemove(stock.symbol)}
        >
          <X className="h-4 w-4" />
        </Button>
        <StockOverview stock={stock} />
        <StockChart stock={stock} />
      </CardContent>
    </Card>
  );
};

export default StockCard;