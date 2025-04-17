
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ProgressCircle } from "@/components/progress-circle";
import { EcoRating } from "@/components/eco-rating";
import { ArrowUp, ArrowDown, Leaf, Info, TrendingDown } from "lucide-react";
import { mockUser, mockTransactions, tipsData } from "@/lib/data";

const Dashboard = () => {
  const recentTransactions = mockTransactions.slice(0, 4);
  
  // Calculate percentages for eco stats
  const greenPercentage = (mockUser.stats.greenTransactions / mockUser.stats.totalTransactions) * 100;
  const neutralPercentage = (mockUser.stats.neutralTransactions / mockUser.stats.totalTransactions) * 100;
  const redPercentage = (mockUser.stats.redTransactions / mockUser.stats.totalTransactions) * 100;
  
  // Carbon reduction percentage
  const carbonReductionPercentage = (mockUser.stats.carbonSaved / mockUser.carboonFootprint.previous) * 100;

  return (
    <div className="dashboard-bg container py-6 space-y-6 max-w-6xl">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your spending impact and eco-rewards
          </p>
        </div>
        <div className="bg-card rounded-lg p-3 flex flex-col items-center">
          <span className="text-sm text-muted-foreground">Eco-Points</span>
          <span className="text-2xl font-bold">{mockUser.ecoPoints}</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="eco-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Carbon Footprint</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-3xl font-bold">{mockUser.carboonFootprint.current} kg</p>
                <div className="flex items-center gap-1 text-sm">
                  <TrendingDown className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">
                    {carbonReductionPercentage.toFixed(1)}% lower
                  </span>
                  <span className="text-muted-foreground">vs. last month</span>
                </div>
              </div>
              <ProgressCircle 
                value={mockUser.carboonFootprint.current} 
                max={mockUser.carboonFootprint.previous}
                size="lg"
                color="green"
                valueLabel={`${Math.round(100 - (mockUser.carboonFootprint.current / mockUser.carboonFootprint.previous) * 100)}%`}
              />
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress to target</span>
                <span className="font-medium">
                  {mockUser.carboonFootprint.target} kg
                </span>
              </div>
              <Progress 
                value={100 - ((mockUser.carboonFootprint.current - mockUser.carboonFootprint.target) / 
                (mockUser.carboonFootprint.previous - mockUser.carboonFootprint.target) * 100)} 
                className="h-2 bg-muted" 
              />
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Spending Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-green-50 border border-green-100">
                <div className="text-green-600 font-semibold text-xl">
                  {mockUser.stats.greenTransactions}
                </div>
                <div className="text-xs text-center text-muted-foreground">
                  Green Purchases
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-yellow-50 border border-yellow-100">
                <div className="text-yellow-600 font-semibold text-xl">
                  {mockUser.stats.neutralTransactions}
                </div>
                <div className="text-xs text-center text-muted-foreground">
                  Neutral
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-2 rounded-lg bg-red-50 border border-red-100">
                <div className="text-red-600 font-semibold text-xl">
                  {mockUser.stats.redTransactions}
                </div>
                <div className="text-xs text-center text-muted-foreground">
                  Carbon-heavy
                </div>
              </div>
            </div>
            
            <div className="mt-4 space-y-3">
              <div>
                <div className="flex justify-between items-center mb-1 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <span>Eco-friendly</span>
                  </div>
                  <span>{greenPercentage.toFixed(0)}%</span>
                </div>
                <Progress value={greenPercentage} className="h-2 bg-muted" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <span>Neutral</span>
                  </div>
                  <span>{neutralPercentage.toFixed(0)}%</span>
                </div>
                <Progress value={neutralPercentage} className="h-2 bg-muted" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-1 text-sm">
                  <div className="flex items-center gap-1">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <span>Carbon-heavy</span>
                  </div>
                  <span>{redPercentage.toFixed(0)}%</span>
                </div>
                <Progress value={redPercentage} className="h-2 bg-muted" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="eco-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Eco Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {tipsData.slice(0, 3).map((tip) => (
                <div key={tip.id} className="flex gap-3 p-2 rounded-lg bg-secondary/50">
                  <div className="flex-shrink-0 mt-1">
                    <Leaf className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{tip.title}</h4>
                    <p className="text-xs text-muted-foreground">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="eco-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {recentTransactions.map((transaction) => (
              <div
                key={transaction.id}
                className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xl">{transaction.merchant.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-medium">{transaction.merchant}</div>
                    <div className="text-sm text-muted-foreground">
                      {transaction.category}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="font-semibold">₹{transaction.amount}</div>
                  <EcoRating type={transaction.ecoRating} size="sm" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-center">
            <a href="/transactions" className="text-sm text-primary hover:underline">
              View all transactions
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
