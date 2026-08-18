import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieById } from "../services/movieApi";
import imageUnavailable from "../assets/images/image-unavailable.webp";

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovieDetails() {
      setError(null);
      setLoading(true);

      try {
        const data = await getMovieById(id);

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl">Getting Movie Details.......</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl">Error: {error}</h2>
      </div>
    );
  }
  if (!movie) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl">Movie not found</h2>
      </div>
    );
  }

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : imageUnavailable;

  const releaseDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "N/A";

  const genres = movie.genres
    ? movie.genres.map((genre) => (
        <span
          key={genre.id}
          className="px-3 py-1 rounded-full bg-card border border-border text-sm"
        >
          {genre.name}
        </span>
      ))
    : null;

  const runtime = movie.runtime
    ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`
    : "N/A";

  const Rating =
    movie.vote_average != null ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={posterUrl}
            alt={`${movie.title} poster`}
            className="w-full rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl">{movie.title}</h1>

          <p className="my-4 text-xl">⭐ {Rating}</p>

          <div className="mt-6 space-y-3">
            <p>Release Date: {releaseDate}</p>
            <p>Runtime: {runtime}</p>
            <div className="flex flex-wrap gap-2 mt-2">{genres}</div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl">Overview</h2>
            <p className="mt-3 text-muted leading-relaxed">{movie.overview}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MovieDetailsPage;
