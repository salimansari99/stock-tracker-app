'use client';
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <nav className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 shadow">
      <div className="text-xl font-bold text-gray-800 dark:text-white">Stock Tracker</div>
      <div className="flex gap-4">
        <Link href="/" className="text-gray-800 dark:text-gray-200">Dashboard</Link>
        <Link href="/portfolio" className="text-gray-800 dark:text-gray-200">Portfolio</Link>
        <Link href="/watchlist" className="text-gray-800 dark:text-gray-200">Watchlist</Link>
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button> */}
      </div>
    </nav>
  )
}
