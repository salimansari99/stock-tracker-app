"use client";

import Navbar from "@/app/components/Navbar";
import PortfolioChart from "@/app/components/PortfolioChart";
import { useEffect, useState } from "react";
import { PortfolioHistory } from "@/app/types/stock";

export default function PortfolioPage() {
  const [portfolioData, setPortfolioData] = useState<PortfolioHistory>({
    timestamps: [],
    values: [],
  });

  useEffect(() => {
    const timestamps = [
      "09:30",
      "10:00",
      "10:30",
      "11:00",
      "11:30",
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
    ];
    const values = [1000, 1015, 1022, 1030, 1025, 1040, 1055, 1060, 1075, 1080];
    setPortfolioData({ timestamps, values });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          Portfolio Overview
        </h1>
        <div className="w-96 h-1/2 m-auto mt-40">
          <PortfolioChart data={portfolioData} />
        </div>
      </main>
    </div>
  );
}
