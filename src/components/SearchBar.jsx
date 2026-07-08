/*import { useState } from "react";*/

function SearchBar({ placeholder, buttonText }) {
  return (
    <form className="mt-6 flex flex-col xs:flex-row items-center gap-4 w-full max-w-5xl">
      <label htmlFor="search" className="sr-only">
        Search by title, genre, or actor:
      </label>
      <input
        type="search"
        id="search"
        autoComplete="off"
        placeholder={placeholder}
        className="w-full flex-1 rounded-md border border-border bg-background px-4 py-2.5 focus:outline-2 focus:outline-offset-2 focus:outline-accent-focus"
      />
      <button
        type="submit"
        className="btn-style focus-ring text-white rounded-md px-4 py-2.5 transition-colors duration-200 shrink-0 cursor-pointer"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default SearchBar;
