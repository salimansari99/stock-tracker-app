import { PortfolioHistory } from "@/app/types/stock";

export const getPortfolio = () => JSON.parse(localStorage.getItem("portfolio") || "[]")
export const updatePortfolio = (portfolio: PortfolioHistory) => localStorage.setItem("portfolio", JSON.stringify(portfolio))