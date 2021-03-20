import React, {useCallback} from 'react';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Form, Input } from "@rocketseat/unform";

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Content } from './styles';


import Api from '../../Services/Api';


const ClothingNew = () => {
  const history = useHistory();

  const handleSubmit = useCallback(async (data) => {
    Api.post('/clothings', {
      title: data.title,
      description: data.description,
      inventory: Number(data.inventory),
      value: Number(data.value)
    })
      .then(() => {
        toast.success("Cadastro realizado com sucesso!");
        history.push('/');
      })
      .catch((error) => {
        toast.error("Erro ao realizar Cadastro, verifique se as informações estão corretas!")
      })

  }, [history]);

    return (
      <Content>
        <Container>
          <Row className="title-page">
            <Col>
              <h1>Add Clothing</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form
                onSubmit={handleSubmit}
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


export default ClothingNew;
