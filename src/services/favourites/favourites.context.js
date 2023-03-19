import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => setFavourites(...favourites, restaurant);

  const remove = (restaurant) => {
    const newFavourities = favourites.filter(
      (favourite) => restaurant.placeId !== favourite.placeId
    );
    setFavourites(newFavourities);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
