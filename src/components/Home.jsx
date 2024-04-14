import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhone, FaEnvelope, FaMapMarker, FaWhatsapp, FaCrosshairs, FaHeart, FaWrench, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <>
      <section id="home">
        <Container>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <h1 className="wow fadeIn animated">Saenz & <span>asociados.</span></h1>
              <div className="element">Habl</div>
              <a href="#about" className="btn btn-default wow fadeInUp animated">BIENVENIDO</a>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="about">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="wow bounceIn"><span>Nosotros</span></h2>
            </Col>
            <Col md={4} sm={4} xs={12} className="wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.6s">
              <div className="media">
                <div className="media-heading-wrapper">
                  <div className="media-object pull-left">
                    <FaWhatsapp />
                  </div>
                </div>
                <div className="media-body">
                  <p align="justify">Tu texto aquí...</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={4} xs={12} className="wow fadeInUp" data-wow-offset="50" data-wow-delay="0.9s">
              <div className="media">
                <div className="media-heading-wrapper">
                  <div className="media-object pull-left">
                    <FaCrosshairs />
                  </div>
                  <h3 className="media-heading">INTEGRADO</h3>
                </div>
                <div className="media-body">
                  <p align="justify">Tu texto aquí...</p>
                </div>
              </div>
            </Col>
            <Col md={4} sm={4} xs={12} className="wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
              <div className="media">
                <div className="media-heading-wrapper">
                  <div className="media-object pull-left">
                    <FaHeart />
                  </div>
                  <h3 className="media-heading">COMPROMETIDO</h3>
                </div>
                <div className="media-body">
                  <p align="justify">Tu texto aquí...</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="service">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="wow bounceIn"><span>NUESTROS</span> SERVICIOS</h2>
            </Col>
            <Col md={4} className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
              <FaWrench />
              <h4>Derecho Laboral</h4>
              <p>Tu texto aquí...</p>
            </Col>
            <Col md={4} className="active wow fadeIn" data-wow-offset="50" data-wow-delay="0.9s">
              <h4>Derecho Penal</h4>
              <p>Tu texto aquí...</p>
            </Col>
            <Col md={4} className="wow fadeIn" data-wow-offset="50" data-wow-delay="0.6s">
              <h4>Derecho de Familia</h4>
              <p>Tu texto aquí...</p>
            </Col>
          </Row>
        </Container>
      </section>

      <section id="contact">
        <Container>
          <Row>
            <Col md={12}>
              <h2 className="wow bounceIn">HÁBLENOS <span>AHORA</span></h2>
            </Col>
            <Col md={6} sm={6} xs={12} className="wow fadeInLeft" data-wow-offset="50" data-wow-delay="0.9s">
              <Form action="enviarcorreoCAS2" method="post">
                <Form.Group controlId="formName">
                  <Form.Label>NOMBRE</Form.Label>
                  <Form.Control type="text" placeholder="Ingrese su nombre" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>EMAIL</Form.Label>
                  <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>MENSAJE</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Escriba su mensaje aquí" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </Form>
            </Col>
            <Col md={6} sm={6} xs={12} className="wow fadeInRight" data-wow-offset="50" data-wow-delay="0.6s">
              <address>
                <p className="address-title">PÓNGALE VOZ A SUS DERECHOS</p>
                <span>Contamos con una cobertura en CABA Y Gran Bs. As. Consulte por otras jurisdicciones en todo el país.</span>
                <p><FaPhone /> (011) 5357-3691 / (011) 11-3366-3567 (Urgencias penales)</p>
                <p><FaEnvelope /> consultas@estudiolitigar.com.ar</p>
                <p><FaMapMarker /> Vte. López - C.A.B.A. - La Plata</p>
              </address>
              <ul className="social-icon">
                <li>
                  <h4>SÍGANOS</h4>
                </li>
                <li><FaInstagram /></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
