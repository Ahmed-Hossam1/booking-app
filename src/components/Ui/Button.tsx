import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "button" | "submit";
  children: ReactNode;
}
const Button = ({ children, className, type = "button", ...rest }: IProps) => {
  return (
    <button {...rest} type={type} className={` text-white bg-[#EB662B] hover:bg-[#d85723] cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Button;
