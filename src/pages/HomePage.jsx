import { useState } from "react";
import Hero from "../components/Hero";
import { searchMovies } from "../services/movieApi";
import MovieGrid from "../components/MovieGrid";

function getSavedSearch() {
  try {
    const savedSearch = sessionStorage.getItem("movieSearch");

    if (!savedSearch) {
      return null;
    }

    const parsedSearch = JSON.parse(savedSearch);

    if (
      parsedSearch !== null &&
      typeof parsedSearch === "object" &&
      typeof parsedSearch.query === "string" &&
      Array.isArray(parsedSearch.movies)
    ) {
      return parsedSearch;
    }

    return null;
  } catch (error) {
    console.error("Failed to load saved search:", error);
    return null;
  }
}

function HomePage() {
  const [savedSearch] = useState(() => getSavedSearch());

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState(
    savedSearch ? savedSearch.movies : []
  );
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(Boolean(savedSearch));
  const [error, setError] = useState(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (searchQuery) => {
    setError(null);
    setLoading(true);
    setHasSearched(true);

    try {
      const results = await searchMovies(searchQuery);

      const searchData = {
        query: searchQuery,
        movies: results,
      };

      sessionStorage.setItem(
        "movieSearch",
        JSON.stringify(searchData)
      );

      setMovies(results);
      setQuery("");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero
        query={query}
        onQueryChange={handleQueryChange}
        onSearch={handleSearch}
        loading={loading}
      />
      <MovieGrid
        movies={movies}
        loading={loading}
        hasSearched={hasSearched}
        error={error}
      />
    </>
  );
}

export default HomePage;