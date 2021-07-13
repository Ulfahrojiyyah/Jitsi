import React from "react";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <Jumbotron>
        <p>
            This URL is not Valid
        </p>
        <p>
        <Link to="/ListKelas"><Button variant="primary">Back to HOME Page</Button> </Link>
        </p>
      </Jumbotron>
    </div>
  );
};

export default NotFound;