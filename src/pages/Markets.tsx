
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

const ecoCompanies = [
  {
    name: "SolarTech Inc",
    ticker: "SLRT",
    price: 156.78,
    change: 2.45,
    marketCap: "4.5B",
    sustainabilityScore: 85,
  },
  {
    name: "WindPower Global",
    ticker: "WNDP",
    price: 89.32,
    change: -1.23,
    marketCap: "2.8B",
    sustainabilityScore: 82,
  },
  {
    name: "EcoMaterials Ltd",
    ticker: "ECOM",
    price: 45.67,
    change: 0.89,
    marketCap: "1.2B",
    sustainabilityScore: 78,
  },
  {
    name: "GreenEnergy Corp",
    ticker: "GRNE",
    price: 234.56,
    change: 5.67,
    marketCap: "8.1B",
    sustainabilityScore: 90,
  },
];

const Markets = () => {
  return (
    <div className="container py-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Eco Market Trends</h1>
        <p className="text-muted-foreground">Track sustainable companies performance</p>
      </div>

      <div className="grid gap-4">
        {ecoCompanies.map((company) => (
          <Card key={company.ticker}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{company.name}</h3>
                  <p className="text-sm text-muted-foreground">{company.ticker}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold">${company.price}</p>
                  <p className={`text-sm flex items-center gap-1 ${
                    company.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}>
                    {company.change >= 0 ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {company.change}%
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Market Cap</p>
                  <p className="font-medium">${company.marketCap}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Sustainability Score</p>
                  <p className="font-medium">{company.sustainabilityScore}/100</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Markets;
