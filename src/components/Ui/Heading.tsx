interface IProps {
  title: string;
}
const Heading = ({ title }: IProps) => {
  return (
    <h2 className="text-2xl md:text-3xl capitalize font-bold text-heading mb-6">
      {title}
    </h2>
  );
};

export default Heading;
