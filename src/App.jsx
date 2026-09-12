import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {Row, Col, Button} from 'react-bootstrap'
library.add(fas, far, fab)
import './App.css'

function HeroSection() {
  return (
    <section className="py-5 bg-light border-bottom" style={{ background: 'linear-gradient(90deg, #2D1045, #0A0510)', width: 'auto', height: '750px' }}>
      <Container className="my-5">
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <span className="badge bg-primary mb-3"> <FontAwesomeIcon icon="fa-brands fa-Rocket" /> Sube de nivel a tu negocio con nosotros</span>
            <h1 className="display-4 fw-bold mb-3" style={{ color: '#fff' }}>
              Sistemas hechos a tus necesidades
            </h1>
            <p className="lead mb-4" style={{ color: '#fff' }}>
              Desarrollamos herramientas internas, cotizadores 
              automáticos y catálogos digitales adaptados a la operación 
              real de tu empresa. Sin rentas mensuales en dólares ni 
              programas genéricos:software propio y a tu medida.
            </p>
            <div className="d-gap gap-3 d-sm-flex justify-content-center justify-content-lg-start">
              <Button variant="primary" size="lg" className="me-sm-2 mb-2 mb-sm-0" style={{ color: '#fff' }}>
                Contactanos Ahora
              </Button>
              <Button variant="outline-secondary" size="lg" style={{ color: '#fff' }}>
                Ver Planes y Precios
              </Button>
            </div>
          </Col>

          <Col lg={6} className="text-center">
            <div className="p-4 bg-white shadow-sm rounded border">
              <div className="bg-dark text-white p-5 rounded font-monospace text-start small">
                <img src="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#hero" id="nav_title">LUDORUM && CODE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Us">Nosotros</Nav.Link>
              <Nav.Link href="#clients">Clientes</Nav.Link>
              <Nav.Link href="#pricing" >Planes y Precios </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#politics">Politicas de seguridad</Nav.Link>
              <Nav.Link eventKey={2} href="#tech">
                Tecnologias Utilizadas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function Footer() {
  return (
    <>
      <footer className="page-footer font-small white pt-4 fixed-bottom">
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 py-5">
              <h5 className="text-uppercase">Ludorum && Code</h5>
              <p>
                Haciendo planes a tu lado, para que nada sea un sueño...
                <p>
                  sino, una realidad el dia de mañana.
                </p>
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3 py-2">
              <h5 className="text-uppercase">Navegacion</h5>
              <ul className="list-unstyled">
                <li><a href="#Us" class="word">Nosotros</a></li>
                <li><a href="#clients" class="word">Clientes</a></li>
                <li><a href="#pricing" class="word">Planes y precios</a></li>
                <li><a href="#politics" class="word">Politicas de seguridad</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 py-2">
              <h5 className="text-uppercase">Redes y Contacto</h5>
              <ul className="list-unstyled">
                <li><a href="#" class="word"><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a></li>
                <li><a href="#" class="word"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
                <li><a href="wa:8711324475" class="word"> <FontAwesomeIcon icon="fa-solid fa-dog" /> </a></li>
                <li><a href="#" class="word"> <FontAwesomeIcon icon="fa-brands fa-instagram"/> </a> </li>
                <li><a href="#" class="word">contactoludorum@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-5">
          <ul>
            © 2026 All Copyrights Are Reserved: Ludorum && Code.
          </ul>
        </div>

      </footer >
    </>

  )

}

function App() {

  return (
    <>
      <NavBar />
      <div>
        <main>

          <section id="hero">
            <HeroSection />
          </section>

          <section id="Us">
            
          </section>

          <section id="">

          </section>

          <section id="">

          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}

export default App
