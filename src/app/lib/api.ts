// src/lib/api.ts
import axios from 'axios'

const API_KEY = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_KEY

export async function fetchStockData(symbol: string) {
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY}`
  const response = await axios.get(url)
  return response.data
}