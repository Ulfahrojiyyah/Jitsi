import React, { useState, createContext } from "react";

export const KelasContext = createContext();

export const KelasProvider = (props) => {
  
    const [kelass, setKelas] = useState([
    { id: 1, name: "Salman", position: "Front End Dev", salary: 28000 },
    { id: 2, name: "Shuvo", position: "Data Scientist", salary: 26000 },
    { id: 3, name: "Mahadi", position: "Full Stack Dev", salary: 27000 },
  ]);

  return (
    <KelasContext.Provider value={[kelass, setKelas]}>
      {props.children}
    </KelasContext.Provider>
  );
};