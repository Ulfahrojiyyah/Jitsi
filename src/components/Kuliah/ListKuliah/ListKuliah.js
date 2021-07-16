import React, { useContext , useState} from "react";
import "./ListKuliah.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KuliahContext } from "../KuliahContext/KuliahContext";
import { Modal} from 'react-bootstrap';
import Create from "../Create/Create";


const ListKuliah= () => {
  const [kuliahs, setKuliah] = useContext(KuliahContext);

  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            
            <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><span>Tambah Kelas</span></Button>
          
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Kode Matakuliah</th>
                    <th>Nama Matakuliah</th>
                    <th>Jumlah Peserta</th>
                    <th>Action</th>
                  </tr>
                </thead>
                  <tbody>
                    {kuliahs.map((kuliah) => (
                      <tr>
                        <td>{kuliah.kode}</td>
                        <td>{kuliah.nama}</td>
                        <td>{kuliah.jumlah}</td>
                        <td>
                          <Link to={"/read/"+kuliah.kode}>
                            <Button className="action__btn" variant="success">
                              Read
                            </Button>
                          </Link>

                          <Link to={"/edit/"+kuliah.kode}>
                            <Button className="action__btn" variant="info" >
                              Edit
                            </Button>
                          </Link>

                          <Link to={"/delete/"+kuliah.kode} onClick={handleShow}>
                          <Button className="action__btn" data-toggle="modal"variant="danger"><span>Delete</span></Button>  
                            </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </Table>

      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
              <Modal.Title>
                  Tambah Kelas 
              </Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Create />
          </Modal.Body>
      </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListKuliah;