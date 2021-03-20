import React from 'react';
import {Spinner} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => {
  return(
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
}

export default Loader;
