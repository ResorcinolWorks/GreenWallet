
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { EcoRating, EcoRatingType } from "@/components/eco-rating";
import { mockTransactions } from "@/lib/data";
import { FileUp, Filter, Search, ChevronDown, Calendar } from "lucide-react";

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState<EcoRatingType | "all">("all");
  
  const filteredTransactions = mockTransactions.filter((transaction) => {
    // Filter by search query
    const matchesSearch = 
      transaction.merchant.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by eco-rating
    const matchesFilter = filter === "all" || transaction.ecoRating === filter;
    
    return matchesSearch && matchesFilter;
  });
  
  // Group transactions by date
  const groupedTransactions: Record<string, typeof mockTransactions> = {};
  
  filteredTransactions.forEach((transaction) => {
    if (!groupedTransactions[transaction.date]) {
      groupedTransactions[transaction.date] = [];
    }
    groupedTransactions[transaction.date].push(transaction);
  });
  
  // Sort dates in descending order
  const sortedDates = Object.keys(groupedTransactions).sort((a, b) => {
    return new Date(b).getTime() - new Date(a).getTime();
  });

  return (
    <div className="container py-6 space-y-6 max-w-6xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transactions</h1>
        <p className="text-muted-foreground">
          View and manage your transaction history
        </p>
      </div>
      
      <Card className="eco-card">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-base">Transaction History</CardTitle>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex items-center gap-1 h-8">
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Date Range</span>
              </Button>
              <Button size="sm" variant="secondary" className="flex items-center gap-1 h-8">
                <FileUp className="h-4 w-4" />
                <span className="hidden sm:inline">Upload Receipt</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search transactions..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <Button
                variant={filter === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("all")}
                className="h-10"
              >
                All
              </Button>
              <Button
                variant={filter === "green" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("green")}
                className="h-10"
              >
                <span className="h-2 w-2 rounded-full bg-green-500 mr-1.5"></span>
                Green
              </Button>
              <Button
                variant={filter === "neutral" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("neutral")}
                className="h-10"
              >
                <span className="h-2 w-2 rounded-full bg-yellow-500 mr-1.5"></span>
                Neutral
              </Button>
              <Button
                variant={filter === "red" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("red")}
                className="h-10"
              >
                <span className="h-2 w-2 rounded-full bg-red-500 mr-1.5"></span>
                Red
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            {sortedDates.map((date) => (
              <div key={date}>
                <div className="flex items-center mb-3">
                  <div className="bg-muted text-muted-foreground px-3 py-1 rounded-md text-sm font-medium">
                    {new Date(date).toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <Separator className="flex-1 ml-3" />
                </div>
                
                <div className="space-y-2">
                  {groupedTransactions[date].map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-card border border-border/50 hover:shadow-sm transition-shadow"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                          <span className="text-xl">{transaction.merchant.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-medium">{transaction.merchant}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">
                              {transaction.category}
                            </span>
                            <div className="h-1 w-1 rounded-full bg-muted-foreground"></div>
                            <span className="text-sm text-muted-foreground">
                              {transaction.carbon} kg CO₂
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <div className="font-semibold">₹{transaction.amount}</div>
                        <div className="flex items-center gap-2">
                          <EcoRating type={transaction.ecoRating} size="sm" />
                          {transaction.ecoPoints > 0 && (
                            <span className="text-xs bg-green-100 text-green-700 rounded-full px-2 py-0.5">
                              +{transaction.ecoPoints} pts
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Transactions;
