import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import { Link } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "./Delete.css";

const Delete = () => {
  const [kuliahs, setKuliah] = useContext(KuliahContext); 
  const { kode} = useParams();

  const deleteKuliah = (kode) => {
    const kuliah = kuliahs.filter((kuliah) => kuliah.kode != kode);
    setKuliah([...kuliah]);
  };

  return (
    <div>
        <Modal.Header closeButton>
          <Modal.Title>Are You Sure?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Link to="/ListKuliah">
            <Button className="delete__btn" variant="info">Cancel</Button>
            <Button onClick={() => deleteKuliah(kode)} variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>  
    </div>
  );
};

export default Delete;