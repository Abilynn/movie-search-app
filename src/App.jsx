import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { searchMovies } from "./services/movieApi";
import MovieGrid from "./components/MovieGrid";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (searchQuery) => {
  
    try {
      const results = await searchMovies(searchQuery);

      setMovies(results);

      setQuery("");
    } catch (error) {
      console.error("Search failed:", error);
    }
  };

  return (
    <>
      <NavBar />
      <Hero
        query={query}
        onQueryChange={handleQueryChange}
        onSearch={handleSearch}
      />
      <MovieGrid movies={movies} />
    </>
  );
}

export default App;
