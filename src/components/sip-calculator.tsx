
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

export function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(0);
  const [expectedReturn, setExpectedReturn] = useState<number>(12);
  const [duration, setDuration] = useState<number>(5);
  const [result, setResult] = useState<number | null>(null);

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / (12 * 100);
    const months = duration * 12;
    const amount = monthlyInvestment * 
      ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * 
      (1 + monthlyRate);
    setResult(Math.round(amount));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          SIP Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Monthly Investment (₹)</label>
            <Input
              type="number"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              placeholder="Enter monthly investment amount"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Expected Annual Return (%)</label>
            <Input
              type="number"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              placeholder="Enter expected return rate"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Investment Duration (Years)</label>
            <Input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              placeholder="Enter investment duration"
            />
          </div>
        </div>
        
        <Button onClick={calculateSIP} className="w-full">Calculate</Button>
        
        {result !== null && (
          <div className="mt-4 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-muted-foreground">Expected Amount:</p>
            <p className="text-2xl font-bold text-primary">₹{result.toLocaleString()}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
