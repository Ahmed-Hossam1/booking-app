interface IProps {
  src: string;
  alt: string;
  width?: string;
  className?: string;
}
const Image = ({ src, alt, width = "w-full", className }: IProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={` object-cover ${className} ${width}`}
    />
  );
};

export default Image;
