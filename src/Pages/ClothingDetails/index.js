import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../Assets/logo.png';

import { Content } from './styles';

import { useParams } from 'react-router-dom';

import Api from '../../Services/Api';


const ClothingDetails = () => {
  const { id } = useParams();

  const [details, setDetails] = useState({})

  useEffect((data) => {
    const handleDetails = async () => {
      await Api.get(`/clothings/${id}`, data)
        .then((response) => {
          setDetails(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error)
        })
    };
    handleDetails();

  }, [id]);

    return (
      <Content>
        <Container>
          <Row>
            <Col lg={4} className="pt-5">
              <img src={Logo} alt="Logo" width="100%"/>
            </Col>
            <Col lg={8}>
              <Row className="title-page pt-5 pb-5">
                <Col lg={12} className="text-right">
                  <h1>Clothing Details</h1>
                  <Col sm={12} md={12} lg={12} className="description pt-5">
                  <p>Clothing Id: {id}</p>
                  <h2>{details.title ||  '-'}</h2>
                  <p>{details.description || '-'}</p>
                  <p>Inventory: {details.inventory|| '-'}</p>
                  <p>Price: {details.value || '-'}</p>
                    <Link to="/">
                      <Button>Go to home</Button>
                    </Link>
                </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default ClothingDetails;
