import { createContext, useContext, useState } from "react";

export const FormaturaContext = createContext();

export const FormaturaProvider = ({ children }) => {
  const [formaturaList, setFormaturaList] = useState(() => {
    const list = localStorage.getItem("@kenziedrinks:formatura");
    if (list) {
      return JSON.parse(list);
    }

    return [];
  });

  const addToFormatura = (product) => {
    const newList = [...formaturaList, product];
    setFormaturaList(newList);
    localStorage.setItem("@kenziedrinks:formatura", JSON.stringify(newList));
  };

  const removeFromFormatura = (newProduct) => {
    const newList = formaturaList.filter(
      (product) => product.id !== newProduct.id
    );
    setFormaturaList(newList);
    localStorage.setItem("@kenziedrinks:formatura", JSON.stringify(newList));
  };

  const cleanFormatura = () => {
    setFormaturaList([]);
    localStorage.removeItem("@kenziedrinks:formatura")
  };

  return (
    <FormaturaContext.Provider
      value={{
        formaturaList,
        addToFormatura,
        removeFromFormatura,
        cleanFormatura,
      }}
    >
      {children}
    </FormaturaContext.Provider>
  );
};

export const useFormatura = () => useContext(FormaturaContext);
