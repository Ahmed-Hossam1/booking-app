import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}
const SectionWrapper = ({ children, className }: IProps) => {
  return (
    <section className={`mt-12 md:mt-20 container mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
