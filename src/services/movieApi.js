const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

    const response = await fetch(url);


    if (!response.ok) {
      throw new Error(
        `Failed to fetch movies (${response.status} ${response.statusText})`,
      );
    }

    const data = await response.json();

    return data.results;
}


export async function getMovieById(id) {
  const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
      throw new Error(
        `Failed to fetch movie details (${response.status} ${response.statusText})`,
      );
    }

    const data = await response.json();

    return data;
}