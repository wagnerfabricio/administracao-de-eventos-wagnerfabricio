import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    api.get(`?page=${page}`).then((res) => setDrinks(res.data));
    window.scrollTo(0, 0);
  }, [page]);

  const nextPage = (n) => {
    setPage(page + n);
  };

  const previousPage = (n) => {
    page > 1 && setPage(page - n);
  };

  const homePage = () => {
    setPage(1);
  };

  return (
    <DrinksContext.Provider
      value={{ drinks, nextPage, previousPage, page, homePage }}
    >
      {children}
    </DrinksContext.Provider>
  );
};

export const useDrinks = () => useContext(DrinksContext);
