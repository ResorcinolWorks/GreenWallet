
import { MainNav } from "./main-nav";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export function Layout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-[#0b1320] text-white font-inter">
      <MainNav />
      <main className="flex-1 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Green shadow gradient elements */}
          <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[150px] animate-pulse" />
          
          {/* Glow lines */}
          <div className="absolute top-[15%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent glow-line"></div>
          <div className="absolute top-[65%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent glow-line"></div>
          
          {/* Additional decorative elements */}
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/5 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-green-700/10 rounded-full blur-[100px]"></div>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
