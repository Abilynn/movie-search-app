

function SearchBar({ placeholder, buttonText, onSearch, query, onQueryChange }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;
    onSearch(trimmedQuery);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex flex-col xs:flex-row items-center gap-4 w-full max-w-5xl"
    >
      <label htmlFor="search" className="sr-only">
        Search by title, genre, or actor:
      </label>
      <input
        type="search"
        id="search"
        value={query}
        onChange={onQueryChange}
        autoComplete="off"
        placeholder={placeholder}
        className="w-full flex-1 rounded-md border border-border bg-background px-4 py-2.5 focus:outline-2 focus:outline-offset-2 focus:outline-accent-focus"
      />
      <button
        type="submit"
        className="focus-ring btn-style rounded-md px-4 py-2.5 transition-colors duration-200 cursor-pointer"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default SearchBar;
