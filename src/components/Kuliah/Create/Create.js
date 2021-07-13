import React, { useState, useContext } from "react";
import "./Create.css";
import { Button, Form } from "react-bootstrap";
import { KuliahContext } from "../KuliahContext/KuliahContext";

const Create = () => {
  const [kode, setKode] = useState("");
  const [nama, setNama] = useState("");
  const [jumlah, setJumlah] = useState("");
 
  const [kuliahs, setKuliah] = useContext(KuliahContext);

  const updateKode = (e) => {
    setKode(e.target.value);
    console.log(kode)
  };

  const updateNama = (e) => {
    setNama(e.target.value);
  };

  const updateJumlah = (e) => {
    setJumlah(e.target.value);
  };

  const addKuliah = (e) => {
      e.preventDefault();
      setKuliah([...kuliahs, {kode:kode, nama:nama, jumlah:jumlah}])
  }

  return (
    <div className="create">
      <Form onSubmit={addKuliah}>
        <Form.Group>
          <Form.Label>Kode Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="kode"
            value={kode}
            onChange={updateKode}
            placeholder="Enter kode"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Nama Matakuliah</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={nama}
            onChange={updateNama}
            placeholder="Enter Nama"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Jumlah Peerta</Form.Label>
          <Form.Control
            type="text"
            name="jumlah"
            value={jumlah}
            onChange={updateJumlah}
            placeholder="Enter Jumlah"
          />
        </Form.Group>
        <Button className="action_btn" variant="primary" type="submit">
          Create User
        </Button>
      </Form>
    </div>
  );
};

export default Create;