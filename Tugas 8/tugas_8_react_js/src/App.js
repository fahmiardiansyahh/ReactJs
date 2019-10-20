import React from "react";
import { Container, 
          Row, 
          Col,
          Dropdown,
          Figure,
          Breadcrumb,
          Carousel,
          ListGroup,
          Jumbotron,
          Button,
          Form,
          Image,
          Modal } from "react-bootstrap";


const App = () => {

  const { useState } = React;  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    
    <div>
          <Container fluid={true}>
              <Row>
                  <Col className="bg-dark" style={{ height: "80px" }}>
                      <Dropdown className="float-left">
                          <Dropdown.Toggle variant="primary"> Pilih Bahasa </Dropdown.Toggle>
                          <Dropdown.Menu>
                              <Dropdown.Item href="#"> Bahasa Indonesia </Dropdown.Item>
                              <Dropdown.Item href="#"> English </Dropdown.Item>
                              <Dropdown.Item href="#"> Spain </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                      <Figure className="float-right mr-5">
                          <Figure.Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width={40} height={40}/>
                          <Figure.Caption>
                          <h6 className="text-light"> Alan Saputra </h6>
                          </Figure.Caption>
                      </Figure>
                  </Col>
              </Row>
          </Container>

          <Container>
            <Row>
                  <Col md={{ span:3, offset:9 }}>
                      <Breadcrumb>
                          <Breadcrumb.Item href="#"> Home </Breadcrumb.Item>
                          <Breadcrumb.Item href="#"> Berita </Breadcrumb.Item>
                          <Breadcrumb.Item href="#" active> Bola   </Breadcrumb.Item>
                      </Breadcrumb>
                  </Col>
              </Row>

            <Row>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" alt="CarouselItem" style={{ height : "450px" }} />
                            <Carousel.Caption>
                              <h3> Neymar Jadi Pemain Terbaik Dunia </h3>
                            </Carousel.Caption>  
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" alt="CarouselItem" style={{ height : "450px" }} />
                            <Carousel.Caption>
                              <h3> Inggris Jadi Tim Terbaik Dunia </h3>
                            </Carousel.Caption>  
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" style={{ height : "450px" }} />
                            <Carousel.Caption>
                              <h3> Tim Indonesia Bermain Untuk Negeri </h3>
                            </Carousel.Caption>  
                        </Carousel.Item>

                    </Carousel>
                </Col>
            </Row>
          </Container>

          <Container>
                <Row className="mt-4 mb-4">
                    <Col>
                        <ListGroup>
                            <ListGroup.Item active> Liga 1 Indonesia </ListGroup.Item>
                            <ListGroup.Item> Liga Primer Inggris </ListGroup.Item>
                            <ListGroup.Item> Divisi Primera </ListGroup.Item>
                            <ListGroup.Item> Serie A </ListGroup.Item>
                            <ListGroup.Item> Ligue 1 </ListGroup.Item>
                            <ListGroup.Item> BundesLiga </ListGroup.Item>
                        </ListGroup>     
                    </Col>
                    <Col>
                        <Jumbotron>
                          <h1> Divisi Primera </h1>
                          <p> Main Untuk Catalunnya Gerard Pique Minta Dihormati </p>
                          <Button variant="primary"> Read More </Button>
                        </Jumbotron>
                    </Col>
                    <Col>
                    <div className="text-center">
                        <Image width={65}  src="https://www.trzcacak.rs/myfile/detail/21-219557_register-icon-user-edit-png.png" alt="Login" roundedCircle /> 
                        <h4> Silahkan Login </h4>
                    </div>
                      <Form>
                           <Form.Group>
                              <Form.Control type="email" placeholder="Masukan Email" />
                          </Form.Group>
                          <Form.Group>
                              <Form.Control type="password" placeholder="Masukan password" />
                         </Form.Group>
                         <Form.Group>
                            <Form.Check type="checkbox" label="Tearm & Condition"/>
                         </Form.Group>
                         <Button variant="primary" onClick={ handleShow }> Login! </Button>
                      </Form>
                    </Col>
                </Row>
          </Container>

    <Modal show={ show } onHide={ handleClose }>
        <Modal.Header closeButton>
            <Modal.Title> Login </Modal.Title>
        </Modal.Header>
        <Modal.Body> Anda Berhasil Login </Modal.Body>
        <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Username & Password
          </Button>
        </Modal.Footer>
    </Modal>
    </div>
  );

}

export default App;