import { createContext, useContext, useState } from "react";

export const CasamentoContext = createContext();

export const CasamentoProvider = ({ children }) => {
  const [casamentoList, setCasamentoList] = useState(() => {
    const list = localStorage.getItem("@kenziedrinks:casamento");

    if (list) {
      return JSON.parse(list);
    }
    return [];
  });

  const addToCasamento = (product) => {
    const newList = [...casamentoList, product];
    setCasamentoList(newList);
    localStorage.setItem("@kenziedrinks:casamento", JSON.stringify(newList));
  };

  const removeFromCasamento = (newProduct) => {
    const newList = casamentoList.filter(
      (product) => product.id !== newProduct.id
    );
    setCasamentoList(newList);
    localStorage.setItem("@kenziedrinks:casamento", JSON.stringify(newList));
  };

  const clearCasamento = () => {
    setCasamentoList([]);
    localStorage.removeItem("@kenziedrinks:casamento");
  };

  return (
    <CasamentoContext.Provider
      value={{
        casamentoList,
        addToCasamento,
        removeFromCasamento,
        clearCasamento,
      }}
    >
      {children}
    </CasamentoContext.Provider>
  );
};

export const useCasamento = () => useContext(CasamentoContext);
