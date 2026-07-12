import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useWishlist, type ISavedItem } from "@/hooks/useWishlist";
import { toast } from "sonner";

interface HeartButtonProps {
  id: number;
  type: ISavedItem["type"];
  title: string;
  image: string;
  price: number;
  location?: string;
  rating?: number;
  reviewCount?: number;
  duration?: string;
  className?: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({
  id,
  type,
  title,
  image,
  price,
  location,
  rating,
  reviewCount,
  duration,
  className = "",
}) => {
  const { isSaved, toggleItem } = useWishlist();
  const saved = isSaved(id, type);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const item: ISavedItem = {
      id,
      type,
      title,
      image,
      price,
      location,
      rating,
      reviewCount,
      duration,
    };

    const isAdded = toggleItem(item);
    if (isAdded) {
      toast.success(`Saved "${title}" to your wishlist! ❤️`);
    } else {
      toast.success(`Removed "${title}" from your wishlist.`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 active:scale-95 group/heart ${className}`}
      title={saved ? "Remove from saved" : "Save to wishlist"}
      type="button"
    >
      {saved ? (
        <FaHeart className="text-red-500 text-sm group-hover/heart:scale-105 transition-transform" />
      ) : (
        <FaRegHeart className="text-gray-600 hover:text-red-500 text-sm group-hover/heart:text-red-500 transition-colors" />
      )}
    </button>
  );
};

export default HeartButton;
