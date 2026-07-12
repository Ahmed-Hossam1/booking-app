import { useState, useEffect } from "react";

export interface ISavedItem {
  id: number;
  type: "tour" | "hotel" | "package" | "transport" | "activity";
  title: string;
  image: string;
  price: number;
  location?: string;
  rating?: number;
  reviewCount?: number;
  duration?: string;
}

const WISHLIST_EVENT = "wishlist-change";

export const getWishlist = (): ISavedItem[] => {
  try {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error("Error reading wishlist from localStorage", error);
    return [];
  }
};

export const saveWishlist = (wishlist: ISavedItem[]) => {
  try {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event(WISHLIST_EVENT));
  } catch (error) {
    console.error("Error saving wishlist to localStorage", error);
  }
};

export const toggleWishlistItem = (item: ISavedItem): boolean => {
  const current = getWishlist();
  const exists = current.find((i) => i.id === item.id && i.type === item.type);
  let updated: ISavedItem[];
  let isAdded = false;

  if (exists) {
    updated = current.filter((i) => !(i.id === item.id && i.type === item.type));
  } else {
    updated = [...current, item];
    isAdded = true;
  }

  saveWishlist(updated);
  return isAdded;
};

export const isInWishlist = (id: number, type: ISavedItem["type"]): boolean => {
  const current = getWishlist();
  return current.some((i) => i.id === id && i.type === type);
};

export const useWishlist = () => {
  const [wishlist, setWishlist] = useState<ISavedItem[]>([]);

  useEffect(() => {
    setWishlist(getWishlist());

    const handleUpdate = () => {
      setWishlist(getWishlist());
    };

    window.addEventListener(WISHLIST_EVENT, handleUpdate);
    return () => {
      window.removeEventListener(WISHLIST_EVENT, handleUpdate);
    };
  }, []);

  return {
    wishlist,
    toggleItem: toggleWishlistItem,
    isSaved: (id: number, type: ISavedItem["type"]) =>
      wishlist.some((i) => i.id === id && i.type === type),
  };
};
