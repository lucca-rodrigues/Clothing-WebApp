import React, {useState, useEffect, useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Form, Input } from "@rocketseat/unform";

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Content } from './styles';

import { useParams } from 'react-router-dom';

import Api from '../../Services/Api';

const ClothingEdit = () => {
  const {id} = useParams();
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

  },[id]);

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
                initialData={{title: title, description: description, inventory:inventory, value:value}}
                onSubmit={handleUpdateDetails}
                >
                <label>Product name</label>
                <Input name="title"/>

                <label>Product description</label>
                <Input name="description"/>

                <label>Product Inventory</label>
                <Input name="inventory"/>

                <label>Product Value</label>
                <Input name="value"/>

                <Button type="submit">Save</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default ClothingEdit;
