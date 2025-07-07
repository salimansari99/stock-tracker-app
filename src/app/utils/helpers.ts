

export const getPortfolio = () => JSON.parse(localStorage.getItem("portfolio") || "[]")
export const updatePortfolio = (portfolio: any) => localStorage.setItem("portfolio", JSON.stringify(portfolio))