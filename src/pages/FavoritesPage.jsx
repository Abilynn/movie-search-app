import { Link } from "react-router-dom";
import { useFavorites } from "../context/useFavorites";
import MovieCard from "../components/MovieCard";

function FavoritesPage() {

  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl">No favorite movies yet.</h2>

        <Link to="/" className="mt-4 text-accent hover:text-accent-hover">
          Browse Movies
        </Link>
      </div>
    );
  }


  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl mb-8">My Favorites</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );

}

export default FavoritesPage;