import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Modal, Button, Dropdown, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import ClothingImage from '../../Assets/Clothing2.jpg';
import { Content } from './styles';

import Api from '../../Services/Api';


const HomePage = () => {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [clothings, setClothings] = useState();
  const [clothingId, setClothingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reloadingData, setReloadingData] = useState(false);

  useEffect(() => {
    setLoading(true);
    const handleClothings = () => {
      Api.get('/clothings')
        .then((response) => {
          setReloadingData(false);
          setClothings(response.data);
        }).catch(() => {
          toast.error("Error to load clothings!");
        })
    }
    handleClothings();
    setLoading(false);
  }, [reloadingData]);

  const handleRemoveItem = (id) => {
    Api.delete(`/clothings/${id}`)
      .then(() => {
        toast.success("Clothing removed Successfuly!");
        setLoading(true);
      })
      .catch((error) => {
        toast.error("Error to removeClothing!");
        console.log(error);
      })

    setReloadingData(true);
  };
  return (
    <Content>
      <Container>
        <Row lg={12}>
          <h1>Welcome to Clothing | Platform from Matrix Cargo</h1>
        </Row>
        <Row lg={12}>
          <h2>These are the products available</h2>

        </Row>
        <Row lg={12}>
          <Link to="clothing/new">
            <Button>Add new</Button>
          </Link>
        </Row>
        <Row>
          {clothings && clothings.map(item => (
            <Col lg={3} key={item.id} className="clothing-item">
              <Card>
                <Card.Img variant="top" src={ClothingImage} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <Card.Text>
                    Inventory: {item.nventory}
                  </Card.Text>
                  <Card.Text>
                    Value: {item.value}
                  </Card.Text>
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      Options
                          </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to={`/clothing/${item.id}`}>
                          Details
                              </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <Link to={`/edit-clothing/${item.id}`}>
                          Edit
                              </Link>
                      </Dropdown.Item>
                      <Dropdown.Item>
                        <div onClick={() => {
                          setClothingId(item.id);
                          setOpen(!open);
                        }}>
                          Delete
                              </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Modal show={open} onHide={!open} animation={false}>
        <Modal.Header>
          <Modal.Title>Delete products</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close
            </Button>
          <Button variant="primary" onClick={() => {
            handleRemoveItem(clothingId);
            setClothingId('');
            setOpen(false);
          }}>
            Yes
            </Button>
        </Modal.Footer>
      </Modal>
    </Content>
  );
}

export default HomePage;