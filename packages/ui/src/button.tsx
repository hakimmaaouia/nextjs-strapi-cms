"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

const Button = ({ children, className, appName }: ButtonProps) => {
  return (
    <button
      className={"flex bg-[red]"}
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};

export default Button;
