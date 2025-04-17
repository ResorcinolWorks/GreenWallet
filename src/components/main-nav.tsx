
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LayoutDashboard, CreditCard, ShoppingBag, Settings, LogOut, Calculator, TrendingUp } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Transactions",
    href: "/transactions",
    icon: CreditCard,
  },
  {
    title: "Products",
    href: "/rewards",
    icon: ShoppingBag,
  },
  {
    title: "Markets",
    href: "/markets",
    icon: TrendingUp,
  },
  {
    title: "Calculator",
    href: "/calculator",
    icon: Calculator,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export function MainNav() {
  const { pathname } = useLocation();
  const { signOut, user } = useAuth();

  return (
    <nav className="flex justify-between items-center w-full backdrop-blur-md bg-black/30 border-b border-primary/10 sticky top-0 z-10 px-4 py-2 md:px-6 shadow-lg shadow-black/20">
      <Link to="/dashboard" className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
        <div className="bg-gradient-to-br from-green-500 to-green-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300">
          <span className="text-black font-bold text-lg">G</span>
        </div>
        <span className="font-bold text-lg text-white hidden md:block glow-green italic-text">GreenWallet</span>
      </Link>
      <div className="flex items-center gap-1 sm:gap-2 bg-black/50 backdrop-blur-sm p-1 rounded-lg border border-white/5 glow-border">
        {mainNavItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex flex-col items-center justify-center px-3 py-1.5 text-sm rounded-md transition-all shine",
                isActive
                  ? "text-primary bg-primary/10 shadow-inner shadow-primary/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon size={18} className={cn(isActive ? "text-primary animate-pulse" : "", "transition-all duration-300")} />
              <span className={cn("text-xs mt-1", isActive ? "font-medium" : "")}>
                {isActive ? <span className="italic-text">{item.title}</span> : item.title}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={signOut}
          className="hover:bg-red-500/10 hover:text-red-500"
        >
          <LogOut className="h-5 w-5" />
        </Button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-600 to-green-500 flex items-center justify-center shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:scale-105">
          <span className="text-sm font-medium text-black">
            {user?.email?.[0].toUpperCase()}
          </span>
        </div>
      </div>
    </nav>
  );
}
