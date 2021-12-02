import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const ConfraternizacaoContext = createContext();

export const ConfraternizacaoProvider = ({ children }) => {
  const [confraternizacaoList, setConfraternizacaoList] = useState(() => {
    const list = localStorage.getItem("@kenziedrinks:confraternizacao");

    if (list) return JSON.parse(list);

    return [];
  });

  const addToConfraternizacao = (product) => {
    const newList = [...confraternizacaoList, product];
    setConfraternizacaoList(newList);
    localStorage.setItem(
      "@kenziedrinks:confraternizacao",
      JSON.stringify(newList)
    );
    toast.success("Produto adicionado a lista");
  };

  const removeFromConfraternizacao = (newProduct) => {
    const newList = confraternizacaoList.filter(
      (product) => product.id !== newProduct.id
    );
    setConfraternizacaoList(newList);
    localStorage.setItem(
      "@kenziedrinks:confraternizacao",
      JSON.stringify(newList)
    );
    toast.success("Produto removido da lista");
  };

  const clearConfraternizacao = () => {
    setConfraternizacaoList([]);
    localStorage.removeItem("@kenziedrinks:confraternizacao");
  };

  return (
    <ConfraternizacaoContext.Provider
      value={{
        confraternizacaoList,
        addToConfraternizacao,
        removeFromConfraternizacao,
        clearConfraternizacao,
      }}
    >
      {children}
    </ConfraternizacaoContext.Provider>
  );
};

export const useConfraternizacao = () => useContext(ConfraternizacaoContext);
