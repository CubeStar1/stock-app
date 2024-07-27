import React from 'react';
import { StockData } from '../types/stock';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface StockListProps {
  stocks: StockData[];
  onRemoveStock: (symbol: string) => void;
}

const StockList: React.FC<StockListProps> = ({ stocks, onRemoveStock }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Symbol</TableHead>
          <TableHead>Company Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Change</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.symbol}>
            <TableCell>{stock.symbol}</TableCell>
            <TableCell>{stock.companyName}</TableCell>
            <TableCell>${stock.currentPrice.toFixed(2)}</TableCell>
            <TableCell className={stock.change >= 0 ? 'text-green-500' : 'text-red-500'}>
              {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
            </TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" onClick={() => onRemoveStock(stock.symbol)}>
                <X className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StockList;