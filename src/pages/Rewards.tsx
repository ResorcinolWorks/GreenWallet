
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ProgressCircle } from "@/components/progress-circle";
import { mockUser } from "@/lib/data";
import { Award, ArrowRight, BadgeCheck, ShoppingBag } from "lucide-react";

const ecoProducts = [
  {
    id: "product1",
    name: "Herbal Shampoo",
    description: "Eco-friendly containing Amla, Reetha, Shikakai",
    pointsRequired: 100,
    image: "🧴",
  },
  {
    id: "product2",
    name: " Clay oer charcoal Soap ",
    description: "Multani Mitti, Activated Charcoal, and Aloe Vera",  
    pointsRequired: 150,
    image: "🫧",
  },
  {
    id: "product3",
    name: "Natural Toothpaste",
    description: "Made with natural ingredients like neem and clove",
    pointsRequired: 80,
    image: "🪥",
  },
  {
    id: "product4",
    name: "Natural Deodorant Stick",
    description: "Made with Sheabutter and Coconut Oil",
    pointsRequired: 200,
    image: "🦯",
  },
  {
    id: "product5",
    name: "Coconut Oil in Glass Bottle",
    description: "Glass Bottle instead of plastics",
    pointsRequired: 150,
    image: "🥥",
  },{
    id: "product6",
    name: "Natural Floor Cleaner",
    description: "Made with Lemon Grass and Neem",
    pointsRequired: 100,
    image: "🧼",
  }

];

const Rewards = () => {
  return (
    <div className="container py-6 space-y-6 max-w-6xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Eco Products</h1>
          <p className="text-muted-foreground">
            Redeem your eco-points for sustainable products
          </p>
        </div>
        <Card className="eco-card md:w-60 p-0">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Available Points</p>
                <p className="text-3xl font-bold text-primary">
                  {mockUser.ecoPoints}
                </p>
              </div>
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {ecoProducts.map((product) => (
          <Card key={product.id} className="eco-card">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </div>
                <div className="text-4xl">{product.image}</div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mt-2">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-muted-foreground">Points Required</span>
                  <span className="text-sm font-medium">{product.pointsRequired} points</span>
                </div>
                <Progress 
                  value={(mockUser.ecoPoints / product.pointsRequired) * 100}
                  className="h-2"
                />
              </div>
              <div className="mt-4 flex justify-between items-center">
                <div className="text-sm">
                  {mockUser.ecoPoints >= product.pointsRequired 
                    ? <span className="text-green-600 flex items-center gap-1">
                        <BadgeCheck className="h-4 w-4" />
                        Ready to redeem
                      </span>
                    : <span className="text-muted-foreground">
                        Need {product.pointsRequired - mockUser.ecoPoints} more points
                      </span>
                  }
                </div>
                <Button 
                  variant={mockUser.ecoPoints >= product.pointsRequired ? "default" : "outline"}
                  disabled={mockUser.ecoPoints < product.pointsRequired}
                  className="flex items-center gap-1"
                >
                  Redeem
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="eco-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Your Impact</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary">{mockUser.stats.carbonSaved}</div>
              <div className="text-sm text-center text-muted-foreground">kg CO₂ Saved</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary">{mockUser.stats.greenTransactions}</div>
              <div className="text-sm text-center text-muted-foreground">Green Transactions</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary">{mockUser.ecoPoints}</div>
              <div className="text-sm text-center text-muted-foreground">Eco-Points Earned</div>
            </div>
            <div className="flex flex-col items-center justify-center p-4 rounded-lg bg-secondary/50">
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-sm text-center text-muted-foreground">Trees Planted</div>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-eco-gradient bg-opacity-10 border border-green-200">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-primary">Your Eco Score</h3>
              <p className="text-sm text-muted-foreground">Based on your spending patterns and eco-choices</p>
            </div>
            <ProgressCircle 
              value={78} 
              size="lg" 
              color="green"
              className="mb-3"
            />
            <div className="text-sm text-center max-w-md">
              <p className="font-medium text-green-700">Great progress!</p>
              <p className="text-muted-foreground mt-1">
                You're in the top 25% of eco-conscious users. Keep making sustainable choices to increase your score.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rewards;
