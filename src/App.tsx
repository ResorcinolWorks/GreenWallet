
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout";
import { AuthLayout } from "./components/auth-layout";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Rewards from "./pages/Rewards";
import Markets from "./pages/Markets";
import Settings from "./pages/Settings";
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import { SipCalculator } from "./components/sip-calculator";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner theme="dark" />
            <Routes>
              {/* Auth routes */}
              <Route element={<AuthLayout />}>
                <Route index element={<Landing />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
              </Route>
              
              {/* Protected routes */}
              <Route element={<Layout />}>
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/transactions"
                  element={
                    <PrivateRoute>
                      <Transactions />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/rewards"
                  element={
                    <PrivateRoute>
                      <Rewards />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/markets"
                  element={
                    <PrivateRoute>
                      <Markets />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/calculator"
                  element={
                    <PrivateRoute>
                      <div className="container py-6">
                        <h1 className="text-3xl font-bold tracking-tight mb-6">SIP Calculator</h1>
                        <SipCalculator />
                      </div>
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <PrivateRoute>
                      <Settings />
                    </PrivateRoute>
                  }
                />
              </Route>
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

// Private route component
const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  
  return <>{children}</>;
};

export default App;
