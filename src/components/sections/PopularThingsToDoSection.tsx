import Heading from "../Ui/Heading";
import Image from "../Ui/Image";
import SectionWrapper from "./SectionWrapper";

const PopularThingsToDoSection = () => {
  type ImagesType = { image: string; title: string };
  const items: ImagesType[] = [
    { image: "/images/ThingsToDo2.jpeg", title: "City Tours" },
    { image: "/images/ThingsToDo3.jpeg", title: "Cruises" },
    { image: "/images/ThingsToDo1.jpeg", title: "Beach Tours" },
    { image: "/images/ThingsToDo6.jpeg", title: "Food" },
    { image: "/images/ThingsToDo5.jpeg", title: "Hiking" },
    { image: "/images/ThingsToDo4.jpeg", title: "Museum Tour" },
  ];

  return (
    <SectionWrapper>
      <Heading title="Popular Things To Do" />

      <div className="masonry">
        {items.map((item, index) => (
          <div key={index} className="masonry-item">
            <Image src={item.image} alt={item.title} className="rounded-md" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PopularThingsToDoSection;
