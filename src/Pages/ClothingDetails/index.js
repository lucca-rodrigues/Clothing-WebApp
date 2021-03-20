import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Button } from 'react-bootstrap';

import { Content } from './styles';

import ClothingImage from '../../Assets/Clothing.jpeg';

import Api from '../../Services/Api';

const ClothingDetails = () => {
  const {id} = useParams();
  const [details, setDetails] = useState({})

  useEffect((data) => {
    async function handleDetails () {
      Api.get(`/clothings/${id}`, data)
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error)
      })
    };
    handleDetails();

  },[id]);

    return (
      <Content>
        <Container>
          <Row className="title-page">
            <Col>
              <h1>Product Details</h1>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4} lg={6}>
              <img src={ClothingImage} alt="Placeholder" className="clothing-image"/>
            </Col>
            <Col sm={12} md={8} lg={6} className="description">
              <p>Clothing Id: {id}</p>
              <h2>{details.title ||  '-'}</h2>
              <p>{details.description || '-'}</p>
              <p>Inventory: {details.inventory|| '-'}</p>
              <p>Price: {details.value || '-'}</p>
                <Link to="/">
                  <Button>Go to home</Button>
                </Link>
            </Col>
          </Row>
        </Container>
      </Content>
    );
}

export default ClothingDetails;
