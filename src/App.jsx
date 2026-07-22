import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { searchMovies } from "./services/movieApi";
import MovieGrid from "./components/MovieGrid";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState(null);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (searchQuery) => {
    setError("");
    setLoading(true);
    setHasSearched(true);
    
    try {

      const results = await searchMovies(searchQuery);

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
      <NavBar />
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

export default App;
