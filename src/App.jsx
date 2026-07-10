import { useState } from "react";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";


function App() {
  const [query, setQuery] = useState("");

  const handleQueryChange = ({ target }) => {
    setQuery(target.value);
  };

  const handleSearch = (searchQuery) => {
    console.log(searchQuery);

    setQuery("")
  };

  return (
    <>
      <NavBar />
      <Hero query={query} onQueryChange={handleQueryChange} onSearch={handleSearch} />
    </>
  
  );
}

export default App;