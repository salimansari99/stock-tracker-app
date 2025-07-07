'use client';
import Navbar from '@/app/components/Navbar'
import StockCard from '@/app/components/StockCard'
// import { useState } from 'react'
// import { fetchStockData } from '@/app/lib/api'
// import { StockData } from '@/app/types/stock'
import { stockData } from './constants';

export default function Home() {
  const stocks = stockData;
  // const [stocks, setStocks] = useState<StockData[]>(dummyStockData)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const symbols = ['AAPL', 'GOOGL', 'MSFT']
  //     const data = await Promise.all(
  //       symbols.map(async symbol => {
  //         const res = await fetchStockData(symbol)
  //         const timeSeries = res['Time Series (5min)']
  //         const times = Object.keys(timeSeries)
  //         const price = parseFloat(timeSeries[times[0]]['4. close'])
  //         const previous = parseFloat(timeSeries[times[1]]['4. close'])
  //         const change = ((price - previous) / previous) * 100
  //         return { symbol, price, change }
  //       })
  //     )
  //     setStocks(data)
  //   }
  //   fetchData()
  // }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <Navbar />
      <main className="p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
        {stocks.map(stock => (
          <StockCard key={stock.symbol} {...stock} />
        ))}
      </main>
    </div>
  )
}