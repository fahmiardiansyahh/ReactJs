import React from 'react';
import { Container, Row, Col, Alert, Button, Badge, Media, Breadcrumb, Card } from "react-bootstrap";
 
const App = () => (
  <div>
      <Container>
          <Row className="mt-3">
            <Col md={3}><Alert variant="primary"> Website React Bootstrap </Alert></Col>
            <Col md={{ span: 5, offset: 4 }}>
                <Media>
                     <Button variant="primary"> Notifications <Badge variant="light"> 9 </Badge></Button>
                     <Button variant="primary" className="ml-2"> Messege <Badge variant="light"> 19 </Badge></Button> &nbsp;&nbsp;
                     <img src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg" alt="Gambar Clipart" width={30} height={30} />
                      <Media.Body>
                      <h5>&nbsp;Andreas</h5>
                      </Media.Body>
                </Media>
            </Col>
          </Row>
      </Container>

      <Container>
          <Row>
              <Col md={{ span:5, offset:7  }}>
                  <Breadcrumb>
                      <Breadcrumb.Item href="#"> Home </Breadcrumb.Item>
                      <Breadcrumb.Item href="#"> Berita </Breadcrumb.Item>
                      <Breadcrumb.Item href="#" active> Bola </Breadcrumb.Item>
                  </Breadcrumb>
              </Col>
          </Row>
      </Container>

      <Container>
          <Row>
              <Col> 
                  <Card style={{ width:"100" }}>
                      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t=-1214473334&w=1920&h=1362&quality=100"/>
                      <Card.Body>
                          <Card.Title>
                              Diego Godin Ukir Rekor Spesial Lawan Thailand
                          </Card.Title>
                          <Card.Text>
                              Godin Sekarang Menjadi Pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas thailand di final piala Tiongkok. Diego Godin Boleh Berbangga Setelah Menjadi...
                          </Card.Text>
                          <Button variant="primary"> Read More </Button>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
                  <Card style={{ width: "100" }}>
                      <Card.Img varian="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" />
                      <Card.Body>
                          <Card.Title>
                             Neymar Bahas Kontrak Baru di PSG
                          </Card.Title>
                          <Card.Text>
                          Ayah Sang Pemain bintang brasil berusaha meredam rumor ketertarika real madrid. Neymar sedang berdiskusi dengan Paris San Germain soal perpanjangan kontrak bersama kampiun ligue 1 Prancis, Demikian kata ayahnya...
                          </Card.Text>
                          <Button varian="primary"> Read More </Button>
                      </Card.Body>
                  </Card>
              </Col>
              <Col>
               <Card style={{ width: "100" }}>
                      <Card.Img varian="top" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600" />
                      <Card.Body>
                          <Card.Title>
                             Inggris Ingin Jadi Tim Terbaik Dunia
                          </Card.Title>
                          <Card.Text>
                          Kumpulan Talenta terbaik yang dimiliki inggris saat ini membuat Barkley sangat optimis. Ross Barkley merasa inggris sudah berada dijalur yang benar untuk bisa menjadi tim terbaik dunia dengan banyaknya talenta yang muncul sekarang ini...
                          </Card.Text>
                          <Button varian="primary"> Read More </Button>
                      </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card style={{ width: "100" }}>
                      <Card.Img varian="top" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600" />
                      <Card.Body>
                          <Card.Title>
                            Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus
                          </Card.Title>
                          <Card.Text>
                         Gelandang Tim U-23. Sani Rizki Fauzi Menegaskan kesiapannya Untuk bermain pada laga melawan Brunei Darussalam U-23 kedua tim akan bentrok pada laga pamungkas grup K...
                          </Card.Text>
                          <Button varian="primary"> Read More </Button>
                      </Card.Body>
                </Card>
              </Col>
          </Row>
      </Container>
  </div>
)



export default App;
