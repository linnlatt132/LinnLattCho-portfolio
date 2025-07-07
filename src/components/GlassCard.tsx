import React, { forwardRef } from "react";

interface GlassCardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ children, className = "", ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={`backdrop-blur-[90px] shadow-xs bg-white/10 dark:bg-zinc-500/10 border-zinc-400/50 dark:border-zinc-300/30 border rounded-[15px] ${className} mt-10 sm:mt-15 p-7 sm:p-9`}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";
export default GlassCard;
