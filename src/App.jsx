import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage"
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./components/NavBar";

function App() {
  const location = useLocation();

  return (
    <>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<HomePage key={location.key} />} />
        <Route path="/movie/:id" element={<MovieDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </>
  );
}

export default App;