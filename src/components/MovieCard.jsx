import { Link } from "react-router-dom";
import imageUnavailable from "../assets/images/image-unavailable.webp";

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : imageUnavailable;

  const releaseYear = movie.release_date
    ? movie.release_date.split("-")[0]
    : "N/A";

  const rating =
    movie.vote_average != null ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="bg-card rounded-xl overflow-hidden border border-border hover:scale-[1.02] hover:border-accent transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
    >
      <div className="relative w-full h-0 pb-[150%]">
        <img
          src={posterUrl}
          alt={`${movie.title} poster`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-black/70 backdrop-blur px-3 py-1  text-white text-sm rounded-full">
          ⭐ {rating}
        </span>
      </div>
      <h3 className="text-main font-semibold line-clamp-2 p-2">{movie.title}</h3>
      <footer className="pl-2 pb-2">
        <p className="text-sm text-muted">{releaseYear}</p>
      </footer>
    </Link>
  );
}

export default MovieCard;
