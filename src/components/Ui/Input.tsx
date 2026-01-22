import type { InputHTMLAttributes } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  type: string;
  name: string;
  value?: string;
  id?: string;
  placeholder?: string;
  className?: string;
}
const Input = ({
  type,
  name,
  value,
  id,
  placeholder,
  className,
  ...res
}: IProps) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      id={id}
      className={`text-sm border border-default rounded-md focus:outline-none ${className}`}
      {...res}
    />
  );
};

export default Input;
