// src/types/stock.d.ts

export interface StockData {
  symbol: string
  price: number
  change: number
}

export interface PortfolioHistory {
  timestamps: string[]
  values: number[]
}