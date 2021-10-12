import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import millify from "millify";
import StatsComponent from "../CryptoObject/StatsComponent";
import GenericStatObject from "../CryptoObject/GenericStatObject";

const stat = (cryptoDetails) => [
  {
    title: "Price to USD",
    value: `$ ${cryptoDetails.price && millify(cryptoDetails.price)}`,
    icon: <DollarCircleOutlined />,
  },
  { title: "Rank", value: cryptoDetails.rank, icon: <NumberOutlined /> },
  {
    title: "24h Volume",
    value: `$ ${cryptoDetails.volume && millify(cryptoDetails.volume)}`,
    icon: <ThunderboltOutlined />,
  },
  {
    title: "Market Cap",
    value: `$ ${cryptoDetails.marketCap && millify(cryptoDetails.marketCap)}`,
    icon: <DollarCircleOutlined />,
  },
  {
    title: "All-time-high(daily avg.)",
    value: `$ ${millify(cryptoDetails.allTimeHigh.price)}`,
    icon: <TrophyOutlined />,
  },
];



 const genericStat = (cryptoDetails) => [
   {
     title: "Number Of Markets",
     value: cryptoDetails.numberOfMarkets,
     icon: <FundOutlined />,
   },
   {
     title: "Number Of Exchanges",
     value: cryptoDetails.numberOfExchanges,
     icon: <MoneyCollectOutlined />,
   },
   {
     title: "Aprroved Supply",
     value: cryptoDetails.approvedSupply ? <CheckOutlined /> : <StopOutlined />,
     icon: <ExclamationCircleOutlined />,
   },
   {
     title: "Total Supply",
     value: `$ ${millify(cryptoDetails.totalSupply)}`,
     icon: <ExclamationCircleOutlined />,
   },
   {
     title: "Circulating Supply",
     value: `$ ${millify(cryptoDetails.circulatingSupply)}`,
     icon: <ExclamationCircleOutlined />,
   },
];
 
 const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];


 export { stat, genericStat, time, StatsComponent, GenericStatObject } 