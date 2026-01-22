import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "button" | "submit" | "reset";
  backgroundColor?: string;
  children: ReactNode;
}
const Button = ({
  children,
  className,
  backgroundColor = "#EB662B",
  type = "button",
  ...rest
}: IProps) => {
  return (
    <button
      className={` text-center capitalize font-medium cursor-pointer ${className}`}
      style={{ background: backgroundColor }}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
