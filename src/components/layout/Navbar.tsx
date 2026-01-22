import { Link } from "react-router-dom";
import { navbarItemsData } from "../../data";
import { useState } from "react";
import Button from "../Ui/Button";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Input from "../Ui/Input";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-primary border-b border-default z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.jpeg" className="h-8 w-auto" alt="Logo" />
          </Link>

          {/* Search */}
          <div className="hidden md:block">
            <Input
              type="text"
              name="searchInput"
              placeholder="Search destinations or activities"
              className="w-87.5 h-11 px-4  focus:border-[#EB662B]"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center">
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
            {navbarItemsData.map((item, index) => (
              <li key={index} className="relative">
                {/* Normal Link */}
                {item.link && (
                  <Link
                    to={item.link}
                    className={`text-sm font-medium transition
                      ${
                        index === navbarItemsData.length - 1
                          ? "bg-[#EB662B] text-white px-6 py-2 rounded-md"
                          : "text-body hover:text-[#EB662B]"
                      }`}
                  >
                    {item.name}
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
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
