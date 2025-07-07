'use client';
import Navbar from '@/app/components/Navbar'
import Watchlist from '@/app/components/Watchlist'
import { useEffect, useState } from 'react'
import { watchList } from '../constants';

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<string[]>(watchList)

  useEffect(() => {
    const saved = localStorage.getItem('watchlist')
    if (saved) setWatchlist(JSON.parse(saved))
  }, [])

  const handleRemove = (symbol: string) => {
    const updated = watchlist.filter(s => s !== symbol)
    setWatchlist(updated)
    localStorage.setItem('watchlist', JSON.stringify(updated))
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">My Watchlist</h1>
        <Watchlist symbols={watchlist} onRemove={handleRemove} />
      </main>
    </div>
  )
}