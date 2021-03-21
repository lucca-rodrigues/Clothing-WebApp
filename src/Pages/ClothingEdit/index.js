import React, {useState, useEffect, useCallback} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Form, Input } from "@rocketseat/unform";

import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../Assets/logo.png';

import { Content } from './styles';

import { useParams } from 'react-router-dom';

import Api from '../../Services/Api';


const ClothingEdit = () => {
  const { id } = useParams();
  const history = useHistory();

  const [details, setDetails] = useState({})

  const title = details.title;
  const description = details.description;
  const inventory = details.inventory;
  const value = details.value;

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

  const handleUpdateDetails = useCallback(async (data) => {
    Api.put(`/clothings/${id}`, {
      title: data.title,
      description: data.description,
      inventory: Number(data.inventory),
      value: Number(data.value)
    })
      .then(() => {
        toast.success("Cloting update sucessfuly!")
        history.push('/');
      })
      .catch(() => {
        toast.error("Error Cloting update sucessfuly!");
      })
  }, [id, history]);

    return (
      <Content>
        <Container>
          <Row>
            <Col lg={4} className="pt-5 d-flex align-items-center">
              <img src={Logo} />
            </Col>
            <Col lg={8}>
              <Row className="title-page pt-5 pb-5">
                <Col lg={4}>
                  <Link to="/" className="float-left">
                    <Button type="submit" variant="danger" className="float-right">Cancell</Button>
                  </Link>
                </Col>
                <Col lg={8} className="text-right">
                  <h1>Edit Clothing</h1>
                </Col>
              </Row>
              <Row clasName="pt-5 pb-5">
                <Form
                  initialData={{ title: title, description: description, inventory: inventory, value: value }}
                  onSubmit={handleUpdateDetails}
                  >
                    <Row clasName="pt-5 form-clothing">
                      <Col lg={12}>
                        <Input name="title" placeholder="Title..." label="Title Cloting" className="form-control"/>
                      </Col>
                      <Col lg={12} className="mt-3">
                        <Input name="description" placeholder="Description..." label="Description Cloting" className="form-control" />
                      </Col>
                      <Col lg={12} className="mt-3">
                        <Input name="inventory" type="number" label="Quantity Cloting" placeholder="1" className="form-control" />
                      </Col>
                      <Col lg={12} className="mt-3">
                        <Input name="value" label="Price Cloting" placeholder="R$ 99.90" className="form-control" />
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={12} className="mt-5 float-right">
                        <Button type="submit" className="float-right">Save</Button>
                      </Col>
                    </Row>
                </Form>
              </Row>
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default ClothingEdit;
