import { twMerge } from "tailwind-merge";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = {
  variant?: "primary" | "outline";
  className?: string;
  children: React.ReactNode | any;
  type?: "button" | "submit" | "reset";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  const classNames = {
    primary: "bg-main-orange text-white",
    outline: "border border-brown-coffee-30 text-brown-coffee",
  };

  return (
    <button
      {...props}
      type={props.type as "button" | "submit" | "reset"}
      className={twMerge(
        "px-4 py-2 rounded-full",
        classNames[props.variant || "primary"],
        props.className
      )}
    >
      {props.children as React.ReactNode}
    </button>
  );
};

export default Button;
