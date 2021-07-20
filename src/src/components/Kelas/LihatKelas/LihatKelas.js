import React, { useContext , useState, useEffect } from "react";
import "./LihatKelas.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { KelasContext } from "../KelasContext/KelasContext";
import { Modal} from 'react-bootstrap';
import Tambah from "../Tambah/Tambah";


const LihatKelas= () => {
  const [kelass, setKelas] = useContext(KelasContext);
  const [listKelas, setListKelas] = useState([])
  console.log('kelass', kelass);
  
  useEffect(() => {
    console.log("dipanggil");
    const pathUrl = window.location.pathname.split("/")
    const getIdUser = Array.isArray(pathUrl) ? pathUrl[2] : '';
    const getKelasYangDifilter = kelass.filter(data => data.idMataKuliah === getIdUser);
    setListKelas(getKelasYangDifilter);
    // effect
  }, [])
  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleKembali = () => {
    console.log("dipanggil 1")
    setListKelas(kelass);
  }

  return (
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            
            <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><span>Tambah Kelas</span></Button>
            <Link to= '/ListKuliah'>
              <div onClick={handleKembali}>Kembali</div>
            </Link>
        
          
              <Table striped bordered>
                <thead>
                  <tr>
                    <th>Judul Pertemuan</th>
                    <th>Waktu Pertemuan</th>
                    <th>Jumlah Siswa</th>
                    <th>Action</th>
                  </tr>
                </thead>
                  <tbody>
                    {listKelas.map((kelas) => (
                      <tr>
                        <td>{kelas.id}</td>
                        <td>{kelas.name}</td>
                        <td>{kelas.position}</td>
                        <td>

                        <Link to={"/Meet/"+kelas.id}>
                            <Button className="action__btn" variant="primary" >
                              Meet
                            </Button>
                          </Link>

                          <Link to={"/editKelas/"+kelas.id}>
                            <Button className="action__btn" variant="info" >
                              Edit
                            </Button>
                          </Link>

                          <Link to={"/Hapus/"+kelas.id}>
                            <Button className="action__btn" variant="danger" >
                              Delete
                            </Button>
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
            <Tambah />
        </Modal.Body>
    </Modal>
          </div>
        </div>
      </div>
    
  );
};

export default LihatKelas;