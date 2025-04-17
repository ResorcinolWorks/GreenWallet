
import React from "react";
import { cn } from "@/lib/utils";
import { Leaf, AlertTriangle, Ban } from "lucide-react";

export type EcoRatingType = "green" | "neutral" | "red";

interface EcoRatingProps {
  type: EcoRatingType;
  className?: string;
  showIcon?: boolean;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

export function EcoRating({
  type,
  className,
  showIcon = true,
  showLabel = true,
  size = "md",
}: EcoRatingProps) {
  const getIconAndLabel = () => {
    switch (type) {
      case "green":
        return {
          icon: <Leaf className="h-3.5 w-3.5 animate-pulse" />,
          label: "Eco-friendly",
          color: "text-green-400 bg-green-950/70 border border-green-700/50 shadow-md shadow-green-900/50",
        };
      case "neutral":
        return {
          icon: <AlertTriangle className="h-3.5 w-3.5" />,
          label: "Neutral",
          color: "text-yellow-400 bg-yellow-950/70 border border-yellow-700/50 shadow-md shadow-yellow-900/50",
        };
      case "red":
        return {
          icon: <Ban className="h-3.5 w-3.5" />,
          label: "Carbon-heavy",
          color: "text-red-400 bg-red-950/70 border border-red-700/50 shadow-md shadow-red-900/50",
        };
    }
  };

  const { icon, label, color } = getIconAndLabel();
  
  const sizeClass = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-2.5 py-1",
    lg: "text-base px-3 py-1.5",
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full font-medium shadow-md transition-all duration-300 hover:shadow-lg",
        color,
        sizeClass,
        className
      )}
    >
      {showIcon && icon}
      {showLabel && <span className={type === "green" ? "italic-text" : ""}>{label}</span>}
    </span>
  );
}
