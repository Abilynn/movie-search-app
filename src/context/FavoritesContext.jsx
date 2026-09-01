import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {

  const [favorites, setFavorites] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favorites");

      if (savedFavorites) {
        const parsedFavorites = JSON.parse(savedFavorites);

        if (Array.isArray(parsedFavorites)) {
          return parsedFavorites;
        }

        return [];
      }

      return [];
    } catch (error) {
      console.error("Failed to load favorites:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (error) {
      console.error("Failed to save favorites:", error);
    }
  }, [favorites]);
  
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
