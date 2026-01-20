import { Link } from "react-router-dom";
import { navbarItemsData } from "../../data";
import Search from "../Ui/Search";
import { useState } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className=" top-0 left-0 w-full bg-neutral-primary border-b border-default z-50 ">
      <div className="container mx-auto flex items-center justify-between px-4 h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/images/logo.jpeg" className="h-8 w-auto" alt="Logo" />
        </Link>

        {/* Search (hidden on mobile) */}
        <div className="hidden md:block">
          <Search />
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 text-body hover:text-heading cursor-pointer"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`
    ${mobileOpen ? "flex" : "hidden"} lg:flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y- lg:space-x-8  absolute lg:static  top-16 left-0  w-full lg:w-auto   bg-neutral-primary lg:bg-transparent  border-b border-default lg:border-none  shadow-lg lg:shadow-none p-4 lg:p- z-40`}
        >
          {navbarItemsData.map((item, index) => (
            <li key={index} className="relative">
              {/* Normal Links */}
              {item.link && (
                <Link
                  to={item.link}
                  className={`text-sm font-medium transition
                    ${
                      index === navbarItemsData.length - 1
                        ? "bg-[#EB662B] text-white px-4 py-2 rounded-md"
                        : "text-body hover:text-[#EB662B]"
                    }
                  `}
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown */}
              {item.dropdown && (
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === item.name ? null : item.name,
                      )
                    }
                    className="flex items-center gap-1 text-sm font-medium text-body hover:text-[#EB662B] cursor-pointer"
                  >
                    {item.name}
                    <svg
                      className={`w-4 h-4 transition ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 9-7 7-7-7"
                      />
                    </svg>
                  </button>

                  {openDropdown === item.name && (
                    <ul className="absolute z-50 left-0 top-full mt-3 w-48 bg-neutral-primary border border-default rounded-md shadow-lg">
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
    </nav>
  );
};

export default Navbar;
