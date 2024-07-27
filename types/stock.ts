export interface HistoricalDataPoint {
    date: string;
    price: number;
  }
  
  export interface StockData {
    symbol: string;
    companyName: string;
    currentPrice: number;
    change: number;
    changePercent: number;
    open: number;
    high: number;
    low: number;
    volume: number;
    marketCap: number;
    peRatio: number;
    dividend: number;
    yield: number;
    historicalData: HistoricalDataPoint[];
  }