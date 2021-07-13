import React from "react";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import "./Edit.css";


const Edit = () => {
  const [kuliahs, setKuliah] = useContext(KuliahContext);
  const { kode } = useParams();
  const kuliah = kuliahs.filter((kuliah) => kuliah.kode == kode);

  const [nama, setNama] = useState(kuliah[0].nama);
  const [jumlah, setJumlah] = useState(kuliah[0].jumlah);

  const editNama= (e) => {
    setNama(e.target.value);
    const edited_nama = nama;
    kuliah[0].nama = edited_nama;
  };

  const editJumlah = (e) => {
    setJumlah(e.target.value);
    const edited_jumlah = jumlah;
    kuliah[0].jumlah = edited_jumlah;
  };

  const editKuliah = (e) => {
    e.preventDefault();
    setKuliah([...kuliahs]);
  };

  return (
    <div className="edit">
      <Form>
        <Form.Group>
          <Form.Label>
          <h1>ID NO: {kuliah[0].kode}</h1>
          </Form.Label>
          </Form.Group>
          <Form.Group>
          <Form.Label>Nama</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={nama}
            onChange={editNama}
            placeholder={kuliah[0].nama}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Jumlah</Form.Label>
          <Form.Control
            type="text"
            name="jumlah"
            // value={position}
            onChange={editJumlah}
            placeholder={kuliah[0].jumlah}
          />
        </Form.Group>
        <Link to="/ListKuliah">
          <Button onSubmit={()=>editKuliah} variant="primary" type="submit">
            Edit User
          </Button>
          <Button className="action_btn" variant="info">
            Back to Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Edit;