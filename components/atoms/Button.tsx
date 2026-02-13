import React from "react";
import { Arrow } from "@/components/icons";

interface ButtonProps {
  url: string;
  style?: "primary" | "secondary" | "tertiary";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ url, style = "primary", children }) => {
  const styles = {
    primary: "bg-primary text-primary-alt px-6 py-4 rounded-full",
    secondary:
      "backdrop-blur-sm shadow-sm px-6 py-4 rounded-full isolate text-inherit bg-secondary text-primary-alt hover:bg-secondary/90",
    tertiary: "inline-flex",
  };

  return (
    <a href={url} className={`${styles[style]} group/link relative`}>
      {children}
      {style === "tertiary" && <Arrow />}
    </a>
  );
};

export default Button;
