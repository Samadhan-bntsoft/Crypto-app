import millify from "millify";

export const GlobalStat = (globalStats) => 
  [
    {
      title: "Total Cryptocurrencies",
      value: `${millify(globalStats.total)}`,
    },
    {
      title: "Total Exchanges",
      value: `${millify(globalStats.totalExchanges)}`,
    },
    {
      title: "Total Market Cap",
      value: `${millify(globalStats.totalMarketCap)}`,
    },
    {
      title: "Total 24h Volume",
      value: `${millify(globalStats.total24hVolume)}`,
    },
    {
      title: "Total Markets",
      value: `${millify(globalStats.totalMarkets)}`,
    },
  ];
