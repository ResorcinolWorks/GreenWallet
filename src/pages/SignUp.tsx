
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (error) throw error;

      toast({
        title: "Welcome to GreenWallet!",
        description: "Your account has been created successfully.",
      });
      
      navigate("/dashboard");
    } catch (error: any) {
      toast({
        title: "Error signing up",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md px-4">
      <Card className="glass-card border-primary/30 glow-border-enhanced">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-2xl font-bold hover:scale-105 transition-transform duration-300">Create an account</CardTitle>
          <CardDescription>Start your eco-friendly financial journey today</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="pl-10 hover:border-primary/50 transition-colors duration-300" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  className="pl-10 hover:border-primary/50 transition-colors duration-300" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  className="pl-10 hover:border-primary/50 transition-colors duration-300" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                <li className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Check className="h-3 w-3 mr-1 text-primary animate-pulse" /> At least 8 characters
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Check className="h-3 w-3 mr-1 text-primary animate-pulse" /> At least one uppercase letter
                </li>
                <li className="flex items-center hover:scale-105 transition-transform duration-300">
                  <Check className="h-3 w-3 mr-1 text-primary animate-pulse" /> At least one number or symbol
                </li>
              </ul>
            </div>
            
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" className="hover:scale-110 transition-transform duration-300" required />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <Link to="/terms" className="text-primary hover:underline hover:scale-105 transition-transform duration-300 inline-block">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-primary hover:underline hover:scale-105 transition-transform duration-300 inline-block">
                  Privacy Policy
                </Link>
              </Label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full neo-button hover:scale-105 transition-transform duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create account"} <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-primary hover:underline hover:scale-105 transition-transform duration-300 inline-block">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
