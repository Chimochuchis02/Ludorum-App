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
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
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
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">LUDORUM && CODE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Nosotros</Nav.Link>
              <Nav.Link href="#pricing">Proyectos y Clientes</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
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
                <li><a href="#" class="word">Nosotros</a></li>
                <li><a href="#" class="word">Proyectos</a></li>
                <li><a href="#" class="word">Clientes y resultados</a></li>
                <li><a href="#" class="word">Link 4</a></li>
              </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3 py-2">
              <h5 className="text-uppercase">Redes y Contacto</h5>
              <ul className="list-unstyled">
                <li><a href="#" class="word">Instagram</a></li>
                <li><a href="#" class="word">Facebook</a></li>
                <li><a href="wa:8711324475" class="word"> <FontAwesomeIcon icon="fa-solid fa-dog" /> </a></li>
                <li><a href="#"></a>  </li>
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
          <section></section>

          <section></section>

          <section></section>

          <section></section>
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App
