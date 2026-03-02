import type { IBlogCard } from "../../interface";

interface IProps {
    blog: IBlogCard;
}

const TravelBlogCard = ({ blog }: IProps) => {
    return (
        <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                    src={blog.src}
                    alt={blog.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-white rounded-lg text-sm font-medium text-heading shadow-sm">
                        {blog.tag}
                    </span>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <span>{blog.date}</span>
                    <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>By {blog.author}</span>
                </div>
                <h3 className="text-lg font-bold text-heading leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                    {blog.title}
                </h3>
            </div>
        </div>
    );
};

export default TravelBlogCard;
