import React, { Component } from "react";
import { container,
          Container,
          Row,
          Col,
          Navbar,
          Nav,
          NavDropdown,
          Form,
          Button,
          Breadcrumb,
          Spinner,
          Tab,
          Tabs,
          Table,
          ProgressBar,
          Pagination,
          OverlayTrigger,
          Popover,
          Collapse } from "react-bootstrap";



class App extends Component {
constructor(props) {
   super(props);
   this.state = {
   status : true
 }
}

  render() {

  const tampilPesan = (
                        <Popover>
                            <Popover.Title> Informasi Website </Popover.Title>
                            <Popover.Content> Website ini digunakan untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga </Popover.Content>
                        </Popover> 
                      );

      return(
    <div>
        <container fluid={true}>
            <Row>
                <Col md={12}>
                    <Navbar expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#"> Akses Sport </Navbar.Brand>
                          <Navbar.Toggle aria-controls="basic-navbar-nav" />
                             <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Item> 
                                      <Nav.Link href="#" active> Home </Nav.Link>
                                </Nav.Item>
                                <Nav.Item> 
                                      <Nav.Link href="#"> Berita </Nav.Link>
                                </Nav.Item>
                                 <Nav.Item> 
                                      <Nav.Link href="#"> Live Score </Nav.Link>
                                </Nav.Item>
                                <NavDropdown title="Piala & Liga"> 
                                      <NavDropdown.Item href="#"> Liga Priemer Inggris </NavDropdown.Item>
                                      <NavDropdown.Item href="#"> Serie A </NavDropdown.Item>
                                      <NavDropdown.Item href="#"> Divisi Pamiera </NavDropdown.Item>
                                      <NavDropdown.Item href="#"> Bundes Liga </NavDropdown.Item>
                                      <NavDropdown.Item href="#"> Liga 1 Indonesia </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Item> 
                                      <Nav.Link href="#"> Transfer Pemain </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                      <Nav.Link href="#"> Tim </Nav.Link>
                                </Nav.Item>
                            </Nav>
                                <Form inline>
                                    <Form.Control type="search" placeholder="Search..." className="mr-sm-2" />
                                    <Button variant="outline-primary"> Search </Button>
                                </Form>
                          </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </container>
        
        <Container>
            
            <Row className="mt-3">
                  <Col md={{ span : 4 , offset: 7 }}>
                      <Breadcrumb>
                          <Breadcrumb.Item href="#"> Home </Breadcrumb.Item>
                          <Breadcrumb.Item href="#"> Liga Inggris </Breadcrumb.Item>
                          <Breadcrumb.Item href="#" active> Transfer Pemain </Breadcrumb.Item>
                      </Breadcrumb>
                  </Col>
            </Row>

            <Row>
                <Col md={{ span: 4 , offset : 1 }}>
                    <h3> Rumor Transfer Pemain </h3> 
                </Col>
                <Col md={{ span: 2 , offset : 5 }}>  
                    <Spinner animation="border" variant="success" />
                    <Spinner animation="grow" variant="success" />
                </Col>
            </Row>

            <Row>
                <Col md={{ span:10 , offset:1 }}>
                  <Tabs defaultActiveKey="allTransfer">
                    <Tab eventKey="allTransfer" title="Semua Transfer">
                      <Table> 
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Nama Pemain</th>
                              <th>Tim</th>
                              <th>Transfer</th>
                              <th>Proses Transfer</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>MAROUNE FELAINI</td>
                              <td>MANCHESTER UNITED</td>
                              <td>SHENDONG LUNENG</td>
                              <td><ProgressBar now={85} label="85%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>LUIS NANI</td>
                              <td>SPORTING CP</td>
                              <td>ORLANDO CITY</td>
                              <td><ProgressBar now={55} label="55%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>MAREK HAMSIK</td>
                              <td>NAPOLI</td>
                              <td>DALIAN YIEFANG</td>
                              <td><ProgressBar now={95} label="95%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>SARDAR AZMOUNT</td>
                              <td>RUBIN KAZAN</td>
                              <td>ZENIT ST.PETERSBURG</td>
                              <td><ProgressBar now={100} label="100%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>MITCH BATSHUAYI</td>
                              <td>CHELSEA </td>
                              <td>CRYSTAL PALACE</td>
                              <td><ProgressBar now={50} label="50%" variant="primary" animated stripped /></td>
                            </tr>
                            <tr>
                              <td>6</td>
                              <td>LUCAS PIAZON</td>
                              <td>CHELSEA</td>
                              <td>CHIEVO</td>
                              <td><ProgressBar now={100} label="100%" variant="primary" animated stripped /></td>
                            </tr>
                          </tbody>
                      </Table>
                    </Tab>
                    <Tab eventKey="ligaInggris" title="Liga Primer Inggris"></Tab>
                    <Tab eventKey="serieA" title="Serie A"></Tab>
                    <Tab eventKey="divisiPrimera" title="Divisi Primera"></Tab>
                    <Tab eventKey="Bundes Liga" title="Bundesliga"></Tab>
                    <Tab eventKey="ligaindonesa" title="Liga 1 Indonesia"></Tab>
                  </Tabs>
                  <Pagination>
                    <Pagination.First/>
                    <Pagination.Prev/>
                    <Pagination.Item href="#" active>1</Pagination.Item>
                    <Pagination.Ellipsis/>
                    <Pagination.Item href="#">10</Pagination.Item>
                    <Pagination.Item href="#">11</Pagination.Item>
                    <Pagination.Item href="#">12</Pagination.Item>
                    <Pagination.Item href="#">13</Pagination.Item>
                    <Pagination.Item href="#">14</Pagination.Item>
                    <Pagination.Ellipsis/>
                    <Pagination.Item href="#">20</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
                  <OverlayTrigger trigger="click" placement="right" overlay={ tampilPesan }>
                    <Button variant="primary"> Informasi </Button>
                  </OverlayTrigger>
                    <Button type="button" variant="primary" className="ml-1" onClick={() => this.setState({ status : !this.state.status }) }> Versi Website </Button>
                    <Collapse in={ this.state.status }>
                        <div>
                          <p> Akses Sport V1.0 </p>
                        </div>
                    </Collapse>
                </Col>
            </Row>
        </Container>
    </div>
      )
    }

}

export default App;