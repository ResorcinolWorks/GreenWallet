
export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  amount: number;
  category: string;
  ecoRating: "green" | "neutral" | "red";
  ecoPoints: number;
  description?: string;
  carbon: number; // carbon impact in kg
}

export interface User {
  id: string;
  name: string;
  email: string;
  ecoPoints: number;
  carboonFootprint: {
    current: number;
    previous: number;
    target: number;
  };
  stats: {
    totalTransactions: number;
    greenTransactions: number;
    neutralTransactions: number;
    redTransactions: number;
    carbonSaved: number;
  };
}

export const mockTransactions: Transaction[] = [
  {
    id: "tx1",
    date: "2025-04-15",
    merchant: "Metro Transit",
    amount: 50,
    category: "Transportation",
    ecoRating: "green",
    ecoPoints: 25,
    description: "Monthly metro pass",
    carbon: 5,
  },
  {
    id: "tx2",
    date: "2025-04-14",
    merchant: "Organic Grocery",
    amount: 120,
    category: "Groceries",
    ecoRating: "green",
    ecoPoints: 35,
    description: "Weekly grocery shopping",
    carbon: 8,
  },
  {
    id: "tx3",
    date: "2025-04-12",
    merchant: "Fast Fashion Store",
    amount: 499,
    category: "Shopping",
    ecoRating: "red",
    ecoPoints: 0,
    description: "New clothes",
    carbon: 75,
  },
  {
    id: "tx4",
    date: "2025-04-10",
    merchant: "Local Cafe",
    amount: 85,
    category: "Food & Drink",
    ecoRating: "neutral",
    ecoPoints: 10,
    description: "Coffee and sandwich",
    carbon: 15,
  },
  {
    id: "tx5",
    date: "2025-04-08",
    merchant: "Electric Bill",
    amount: 1200,
    category: "Utilities",
    ecoRating: "neutral",
    ecoPoints: 20,
    description: "Monthly electricity bill",
    carbon: 40,
  },
  {
    id: "tx6",
    date: "2025-04-05",
    merchant: "Sustainable Brand",
    amount: 850,
    category: "Shopping",
    ecoRating: "green",
    ecoPoints: 85,
    description: "Eco-friendly clothing",
    carbon: 20,
  },
  {
    id: "tx7",
    date: "2025-04-03",
    merchant: "Air India",
    amount: 5400,
    category: "Travel",
    ecoRating: "red",
    ecoPoints: 0,
    description: "Flight tickets",
    carbon: 300,
  },
  {
    id: "tx8",
    date: "2025-04-01",
    merchant: "Plant Nursery",
    amount: 350,
    category: "Home & Garden",
    ecoRating: "green",
    ecoPoints: 40,
    description: "Indoor plants",
    carbon: 5,
  },
];

export const mockUser: User = {
  id: "user1",
  name: "Rahul Sharma",
  email: "rahul.sharma@example.com",
  ecoPoints: 215,
  carboonFootprint: {
    current: 468,
    previous: 520,
    target: 400,
  },
  stats: {
    totalTransactions: 32,
    greenTransactions: 18,
    neutralTransactions: 9,
    redTransactions: 5,
    carbonSaved: 52,
  },
};

export const rewardCategories = [
  {
    id: "cashback",
    name: "Cashback Rewards",
    description: "Redeem your eco-points for cashback on future purchases",
    pointsRequired: 100,
    image: "💸",
  },
  {
    id: "plantTree",
    name: "Plant a Tree",
    description: "Contribute to reforestation efforts and reduce your carbon footprint",
    pointsRequired: 50,
    image: "🌳",
  },
  {
    id: "esgInvestment",
    name: "ESG Investments",
    description: "Invest your eco-points in environmentally sustainable funds",
    pointsRequired: 200,
    image: "📈",
  },
  {
    id: "ecoProducts",
    name: "Eco-friendly Products",
    description: "Get discounts on sustainable products from our partners",
    pointsRequired: 150,
    image: "🛍️",
  },
];

export const tipsData = [
  {
    id: "tip1",
    title: "Switch to public transport",
    description: "Save up to 30% carbon emissions by using public transport instead of personal vehicles.",
  },
  {
    id: "tip2",
    title: "Shop from local markets",
    description: "Buying locally reduces carbon footprint from transportation and supports local economy.",
  },
  {
    id: "tip3",
    title: "Choose sustainable brands",
    description: "Look for eco-certified products and brands committed to sustainability.",
  },
  {
    id: "tip4",
    title: "Reduce meat consumption",
    description: "Even reducing meat intake by one day a week can significantly lower your carbon footprint.",
  },
];
