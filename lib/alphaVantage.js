import axios from 'axios';

const API_KEY = 'WJPG2NBFA8REAEFP';

export const fetchStockData = async (ticker) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query`,
      {
        params: {
          function: 'TIME_SERIES_INTRADAY',
          symbol: ticker,
          interval: '5min',
          apikey: API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return null;
  }
};

export const fetchCompanyOverview = async (ticker) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query`,
      {
        params: {
          function: 'OVERVIEW',
          symbol: ticker,
          apikey: API_KEY
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching company overview:', error);
    return null;
  }
};
