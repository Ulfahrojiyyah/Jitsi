import React, { useState, createContext } from "react";

export const KuliahContext = createContext();

export const KuliahProvider = (props) => {
  
    const [kuliahs, setKuliah] = useState([
    { kode: 1, nama: "Salman", jumlah: "Front End Dev" },
    { kode: 2, nama: "Shuvo", jumlah: "Data Scientist"},
    { kode: 3, nama: "Mahadi", jumlah: "Full Stack Dev"},
  ]);

  return (
    <KuliahContext.Provider value={[kuliahs, setKuliah]}>
      {props.children}
    </KuliahContext.Provider>
  );
};