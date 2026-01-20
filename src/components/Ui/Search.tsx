import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <form className="relative w-full max-w-sm">
      <label htmlFor="search" className="sr-only">
        Search
      </label>

      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <FaSearch />
      </div>

      <input
        type="search"
        id="search"
        placeholder="Search destinations, hotels..."
        className="
          w-full h-10 pl-10 pr-20
          text-sm text-heading
          bg-neutral-secondary-medium
          border border-default-medium
          rounded-base
          placeholder:text-body
          focus:outline-[#db5b25]
        "
      />

      <button
        type="submit"
        className="
        cursor-pointer
          absolute right-1 top-1/2 -translate-y-1/2
          h-8 px-3
          text-xs font-medium text-white
          bg-[#EB662B] hover:bg-[#db5b25]
          rounded
          focus:outline-none focus:ring-2 focus:ring-brand-medium
        "
      >
        Search
      </button>
    </form>
  );
};

export default Search;
