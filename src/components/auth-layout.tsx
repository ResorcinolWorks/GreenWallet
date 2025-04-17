
import React from "react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-[#0b1320] text-white font-inter overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Green shadow gradient elements - Enhanced */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-[150px] animate-pulse"></div>
        
        {/* Glow lines - Enhanced */}
        <div className="absolute top-[25%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent glow-line"></div>
        <div className="absolute top-[75%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent glow-line"></div>
        
        {/* Additional decorative elements - Enhanced */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-green-700/15 rounded-full blur-[140px]"></div>
      </div>
      
      {/* Logo in top-left */}
      <div className="flex items-center gap-2 p-6 z-10">
        <div className="bg-gradient-to-br from-green-500 to-green-600 w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/40 hover:shadow-xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110">
          <span className="text-black font-bold text-lg">G</span>
        </div>
        <span className="font-bold text-lg text-white glow-green italic-text hover:scale-105 transition-transform duration-300">GreenWallet</span>
      </div>
      
      <main className="flex-1 flex items-center justify-center z-10">
        <Outlet />
      </main>
      
      {/* Footer */}
      <footer className="text-center p-4 text-sm text-gray-400 z-10">
        <p>© 2025 GreenWallet. All rights reserved.</p>
      </footer>
    </div>
  );
}
