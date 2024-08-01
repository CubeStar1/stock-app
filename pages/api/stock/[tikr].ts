import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { StockData } from '@/types/stock'

type PriceData = {
    date: string
    price: number
  }
type ApiResponse = {
  symbol: string
  data: PriceData[]
}

type ErrorResponse = {
  error: string
}

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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse | ErrorResponse>
) {
  const { symbol } = req.query

  if (typeof symbol !== 'string') {
    res.status(400).json({ error: 'Invalid symbol parameter' })
    return
  }

  try {
    const response = await axios.get<ApiResponse>(`http://127.0.0.1:8000/api-stock/stock/${symbol}`)
    console.log(response.data)
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
        historicalData: response.data.data.map(({ date, price }) => ({
            date,
            price: parseFloat(price.toFixed(2)),
            })),
      };
    res.status(200).json(response.data)
  } catch (error:any) {
    console.error('Error fetching stock data:', error)
    res.status(error.response?.status || 500).json({ error: error.message || 'An unexpected error occurred' })
  }
}