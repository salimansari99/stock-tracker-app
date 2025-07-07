
// components/StockCard.tsx
import React from 'react'

type StockCardProps = {
  symbol: string
  price: number
  change: number
}

export default function StockCard({ symbol, price, change }: StockCardProps) {
  const changeColor = change >= 0 ? 'text-green-500' : 'text-red-500'

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md w-60">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{symbol}</h3>
      <p className="text-gray-600 dark:text-gray-300">${price.toFixed(2)}</p>
      <p className={`font-semibold ${changeColor}`}>{change.toFixed(2)}%</p>
    </div>
  )
}
