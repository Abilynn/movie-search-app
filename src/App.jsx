import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage"
import FavoritesPage from "./pages/FavoritesPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage key={location.key} />} />
          <Route path="/movie/:id" element={<MovieDetailsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;