import React, {useCallback} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import { Form, Input } from "@rocketseat/unform";

import { Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../Assets/logo.png';
import Header from '../../Components/Header';
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
          <Row>
            <Col lg={8}>
              <Row className="title-page pt-5 pb-5">
                <Col lg={4}>
                  <Link to="/" className="float-left">
                    <Button type="submit" variant="danger" className="float-right">Cancell</Button>
                  </Link>
                </Col>
                <Col lg={8} className="text-right">
                  <h1>Add New Clothing</h1>
                </Col>
              </Row>
              <Row clasName="pt-5 pb-5">
                <Form
                  onSubmit={handleSubmit}
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
                        <Input name="value" type="number" label="Price Cloting" placeholder="R$ 99.90" className="form-control" />
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
            <Col lg={4} className="pt-5 d-flex align-items-center">
              <img src={Logo} />
            </Col>
          </Row>
        </Container>
      </Content>
    )
}


export default ClothingNew;
