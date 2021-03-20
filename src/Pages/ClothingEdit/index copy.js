import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Form, Input } from "@rocketseat/unform";

import { Container, Row, Col, Button } from 'react-bootstrap';
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
        <Row className="title-page">
          <Col>
            <h1>Edit Product</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form
              initialData={{ title: title, description: description, inventory: inventory, value: value }}
              onSubmit={handleUpdateDetails}
            >
              <Row clasName="pt-5 form-clothing">
                <Col lg={12}>
                  <Input name="title" placeholder="Title..." label="Title Cloting" className="form-control" />
                </Col>
                <Col lg={12} className="mt-3">
                  <Input name="description" placeholder="Description..." label="Description Cloting" className="form-control" />
                </Col>
                <Col lg={12} className="mt-3">
                  <Input name="inventory" type="number" label="Quantity Cloting" placeholder="1" className="form-control" />
                </Col>
                <Col lg={12} className="mt-3">
                  <Input name="value" type="number" label="Price Cloting" placeholder="R$ 99.90" className="form-control" />
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="mt-5 float-right">
                  <Button type="submit" className="float-right">Save</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </Content>
  )
}


export default ClothingEdit;
