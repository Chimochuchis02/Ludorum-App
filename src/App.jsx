import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)
import './App.css'

function Carrousel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="w-100"
          src="public/images/fogata.png"
        />
        <Carousel.Caption>
          <h5>Promocion Especial de Septiembre</h5>
          <p>1500.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="w-100"
          src="public/images/LOGO.jpg"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public/images/DS2_1_.jpg"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

function NavBar() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: '#7B2CBF' }} >
        <Container>
          <Navbar.Brand href="#hero" id="nav_title">LUDORUM && CODE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Us" id="nosotros" class="nav_words">Nosotros</Nav.Link>
              <Nav.Link href="#clients" id="clientes" class="nav_words">Clientes</Nav.Link>
              <Nav.Link href="#pricing" id="pyp" class="nav_words">Planes y Precios </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#politics" id="politica" class="nav_words">Politicas de seguridad</Nav.Link>
              <Nav.Link href="#contact" id="contacto" class="nav_word">Contacto</Nav.Link>
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
      <footer className="page-footer font-small white pt-4 fixed-bottom" style={{ backgroundColor: '#350067' }}>
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 py-5">
              <h5 className="text-uppercase" id="title_footer">Ludorum && Code</h5>
              <p id="text_footer">
                Haciendo planes a tu lado, para que nada sea un sueño...
                <p id="text_footer">
                  sino, una realidad el dia de mañana.
                </p>
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3 py-2">
              <h5 className="text-uppercase" class="word_title">Navegacion</h5>
              <ul className="list-unstyled">
                <li><a href="#Us" class="word">Nosotros</a></li>
                <li><a href="#clients" class="word">Clientes</a></li>
                <li><a href="#pricing" class="word">Planes y precios</a></li>
                <li><a href="#politics" class="word">Politicas de seguridad</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 py-2">
              <h5 className="text-uppercase" class="word_title">Redes y Contacto</h5>
              <ul className="list-unstyled">
                <li><a href="#" class="word"><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a></li>
                <li><a href="#" class="word"><FontAwesomeIcon icon="fa-brands fa-facebook" /></a></li>
                <li><a href="wa:8711324475" class="word"> <FontAwesomeIcon icon="fa-solid fa-dog" /> </a></li>
                <li><a href="#" class="word"> <FontAwesomeIcon icon="fa-brands fa-instagram" /> </a> </li>
                <li><a href="#" class="word">contactoludorum@gmail.com</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center py-5" class="word_copyright">
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
            <Carrousel />
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
