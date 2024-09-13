import { useState, createContext } from "react";
export const PriceContext = createContext();

export function PriceProvider({ children }) {
  const [selectedTarif, setSelectedTarif] = useState();

  //   function changeSelectedTarif(newSelectedTarif) {
  //     setSelectedTarif(newSelectedTarif);
  //   }
  return (
    <PriceContext.Provider value={{ selectedTarif, setSelectedTarif }}>
      <h2>PriceContext is active</h2>
      {children}
    </PriceContext.Provider>
  );
}
