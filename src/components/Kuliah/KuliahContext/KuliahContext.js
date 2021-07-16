import React, { useState, createContext } from "react";

export const KuliahContext = createContext();

export const KuliahProvider = (props) => {
  
    const [kuliahs, setKuliah] = useState([
    { kode: 1, nama: "Salman", jumlah: "50" },
    { kode: 2, nama: "Shuvo", jumlah: "30"},
    { kode: 3, nama: "Mahadi", jumlah: "40"},
  ]);

  return (
    <KuliahContext.Provider value={[kuliahs, setKuliah]}>
      {props.children}
    </KuliahContext.Provider>
  );
};