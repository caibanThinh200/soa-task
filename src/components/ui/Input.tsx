import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className={twMerge(
        "rounded-full shadow-xl shadow-brown-coffee/10 border outline-none border-brown-coffee/30 bg-white py-3 px-4 placeholder:text-dark-gray",
        props.className
      )}
    />
  );
};

export default Input;
