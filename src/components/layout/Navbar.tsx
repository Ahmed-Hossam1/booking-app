import { useWishlist } from "@/hooks/useWishlist";
import { UserButton, useUser } from "@clerk/react";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import Button from "../Ui/Button";

const navLinksData = [
  {
    name: "Destinations",
    dropdown: [
      { name: "Hotels", link: "/hotels" },
      { name: "Transportation", link: "/transportation" },
      { name: "Tours", link: "/tours" },
      { name: "Packages", link: "/packages" },
    ],
  },
  {
    name: "Saved",
    link: "/saved",
  },
  {
    name: "Support",
    link: "/help",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { isSignedIn } = useUser();
  const { wishlist } = useWishlist();

  const wishlistCount = wishlist.length;

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-primary border-b border-default z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.jpeg" className="h-8 w-auto" alt="Logo" />
          </Link>

          {/* Search */}
          <Link to="/search" className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-neutral-secondary text-body hover:text-[#EB662B] transition">
            <FaSearch className="text-lg" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Mobile Button */}
          <Button
            type="button"
            backgroundColor=""
            className="lg:hidden w-10 h-10 text-body hover:text-black"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <FaBarsStaggered />
          </Button>

          {/* Menu */}
          <ul
            className={` ${mobileOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:items-center gap-6 absolute lg:static top-16 left-0 z-50 w-full lg:w-auto bg-neutral-primary lg:bg-transparent border-b lg:border-none p-4 lg:p-0 shadow-lg lg:shadow-none`}
          >
            {navLinksData.map((item, index) => (
              <li key={index} className="relative">
                {/* Normal Link */}
                {item.link && (
                  <Link
                    to={item.link}
                    className="text-sm font-medium transition text-body hover:text-[#EB662B] relative py-1 block z-10"
                  >
                    {item.name === "Saved" && wishlistCount > 0 && (
                      <span className="absolute w-5 h-5 flex items-center justify-center -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#EB662B] to-[#ff7a45] text-white text-[9px] font-black rounded-full border-2 border-white shadow-sm z-20">
                        {wishlistCount}
                      </span>
                    )}
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown */}
                {item.dropdown && (
                  <div className="relative">
                    <Button
                      backgroundColor="none"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.name ? null : item.name,
                        )
                      }
                      className="flex items-center gap-1 text-sm font-medium text-body hover:text-[#EB662B]"
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </Button>

                    {openDropdown === item.name && (
                      <ul className="absolute left-0 top-full mt-3 w-48 bg-neutral-primary border border-default rounded-md shadow-lg z-50">
                        {item.dropdown.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              to={subItem.link!}
                              className="block px-4 py-2 text-sm hover:bg-neutral-tertiary hover:text-[#EB662B]"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}

            {/* Auth Section */}
            {!isSignedIn && (
              <>
                <li>
                  <Link
                    to="/login"
                    className="text-sm font-medium transition text-body hover:text-[#EB662B]"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sign-up"
                    className="bg-[#EB662B] text-white px-6 py-2 rounded-md text-sm font-medium transition hover:bg-[#d45a25]"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )}

            {isSignedIn && (
              <li className="flex items-center">
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-9 h-9 ring-2 ring-[#EB662B]/20 ring-offset-2 rounded-full",
                    },
                  }}
                />
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
