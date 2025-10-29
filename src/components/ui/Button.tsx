"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "glass" | "primary" | "secondary" | "outline" | "gradient";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
}

const Button = ({
  href,
  children,
  className = "",
  variant = "glass",
  size = "md",
  onClick,
}: ButtonProps) => {
  // Base styles
  const baseStyles = "font-medium rounded-md transition-all";

  // Size variations
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  // Variant styles
  const variantStyles = {
    glass:
      "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/20",
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline:
      "bg-transparent border border-current text-white hover:bg-white/10",
    gradient:
      "bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:opacity-90",
  };

  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  return (
    <Link href={href} className={buttonStyles} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;
