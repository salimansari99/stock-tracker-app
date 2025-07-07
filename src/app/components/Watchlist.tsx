import React from 'react'

type WatchlistProps = {
  symbols: string[]
  onRemove: (symbol: string) => void
}

export default function Watchlist({ symbols, onRemove }: WatchlistProps) {
  return (
    <div className="space-y-4">
      {symbols.map(symbol => (
        <div key={symbol} className="flex justify-between bg-white dark:bg-gray-900 p-4 rounded shadow">
          <span className="text-gray-800 dark:text-gray-100">{symbol}</span>
          <button
            onClick={() => onRemove(symbol)}
            className="text-sm text-red-600 hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  )
}
