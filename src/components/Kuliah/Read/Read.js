import React from "react";
import "./Read.css";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import { useContext } from "react";
import { useParams } from "react-router-dom";
//import { Link } from "react-router-dom";
//import { Button } from "react-bootstrap";
import LihatKelas from "../../Kelas/LihatKelas/LihatKelas";

const Read = () => {
  const [kuliahs, setKuliah] = useContext(KuliahContext);
  const { kode } = useParams();
  const kuliah = kuliahs.filter((kuliah) => kuliah.kode == kode);

  return (
    <div className="read">
      <h5>Kode Matakuliah: {kuliah[0].kode}</h5>
      <h5>Nama: {kuliah[0].nama}</h5>
      <LihatKelas/>
    </div>
    
  );
};

export default Read;