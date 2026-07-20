const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const BASE_URL = "https://api.themoviedb.org/3";

export async function searchMovies(query) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(url);


    if (!response.ok) {
      throw new Error(
        `Failed to fetch movies (${response.status} ${response.statusText})`,
      );
    }

    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; // Rethrow the error to be handled by the caller, so that it can be logged or displayed to the user
  }
}
