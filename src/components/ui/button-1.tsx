"use client";

import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const GradientButton = ({
  children,
  width = "auto",
  height = "56px",
  className = "",
  onClick,
  disabled = false,
  ...props
}: GradientButtonProps) => {
  const commonGradientStyles = `
    relative rounded-full cursor-pointer
    flex items-center justify-center
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  // Inner cutout to create the border effect
  const innerStyles = `
    absolute inset-[2px] rounded-full bg-white z-[1]
    transition-opacity duration-300 ease-linear
  `;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick?.();
    }
  };

  return (
    <div className={cn("inline-block text-[#333] text-center", className)}>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        className={cn(commonGradientStyles, "rotatingGradient group")}
        style={
          {
            "--r": "0deg",
            minWidth: width,
            height: height,
          } as React.CSSProperties
        }
        onClick={disabled ? undefined : onClick}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled}
        {...props}
      >
        <div className={innerStyles} />
        <span className="relative z-10 flex items-center justify-center font-bold px-8">
          {children}
        </span>
      </div>
    </div>
  );
};

export default GradientButton;
