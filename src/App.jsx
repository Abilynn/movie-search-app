import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { searchMovies } from "./services/movieApi";

function App() {
  const [query, setQuery] = useState("");

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = async (searchQuery) => {
    try {
      const movies = await searchMovies(searchQuery);

      console.log(movies);

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
    </>
  );
}

export default App;
