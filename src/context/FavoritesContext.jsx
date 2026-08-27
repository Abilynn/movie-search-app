import { createContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addFavorite(movie) {
    setFavorites((currentFavorites) => {
      if (currentFavorites.some((favorite) => favorite.id === movie.id)) {
        return currentFavorites;
      }

      return [...currentFavorites, movie];
    });
  }

  function removeFavorite(movieId) {
    setFavorites((currentFavorites) => {
      return currentFavorites.filter((favorite) => favorite.id !== movieId);
    });
  }

  function isFavorite(movieId) {
    return favorites.some((favorite) => favorite.id === movieId);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
