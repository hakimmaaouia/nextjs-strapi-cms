"use client";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <div className={"flex bg-[red] flex ro"}>{text}</div>;
};

export default Button;
