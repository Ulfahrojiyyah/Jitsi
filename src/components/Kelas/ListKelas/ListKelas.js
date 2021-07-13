import React, { useContext , useState} from "react";
import "./ListKelas.css";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import { Modal} from 'react-bootstrap';
import Create from "../Create/Create";


const ListKelas= () => {
  const [users, setUser] = useContext(UserContext);

  const [show, setShow] = useState(false);
    
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);


  return (
    <div>
            
 <Button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Button>
          
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>{user.salary}</td>
              <td>
                <Link to={"/read/"+user.id}>
                  <Button className="action__btn" variant="success">
                    Read
                  </Button>
                </Link>

                <Link to={"/edit/"+user.id}>
                <Button className="action__btn" variant="info" >
                  Edit
                </Button>
                </Link>

                <Link to={"/delete/"+user.id}>
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
                Add 
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Create />
        </Modal.Body>
    </Modal>
    </div>
  );
};

export default ListKelas;