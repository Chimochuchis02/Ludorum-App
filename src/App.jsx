import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CardGroup, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
library.add(fas, far, fab)
import './App.css'
import './App.js'

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

  );

}

function Cards() {
  return (
    <>
      <CardGroup style={{ padding: '75px' }} className='gap-5'>
        <Card style={{ backgroundColor: '#650AFF', borderRadius: '20px' }}>
          <Card.Body>
            <Card.Title> <h5 style={{ color: '#FFFF' }}>Sistema Unico</h5> </Card.Title>
            <Card.Text>
              <h2 style={{ color: '#FFFF' }}>$7,500MXN*/<small>unico</small> </h2>
              <p style={{ color: '#FFFF' }}>* Pago unico - el sistema es 100% tuyo </p>
              <p style={{ color: '#FFFF' }}>* Arquitectura personalizada a tu negocio
                (Cotizador, Catálogo o Panel).</p>
              <p style={{ color: '#FFFF' }}>* Generación automática de reportes y
                PDF con tu marca.</p>
              <p style={{ color: '#FFFF' }}>* Propiedad total del cliente (cero rentas).</p>
            </Card.Text>
            <button style={{ borderRadius: '16px' }}>Soliticar mas información</button>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: '#FFFF' }}> * ¡Disfruta tambien del 50%
              de este plan y los demas planes.</small>
          </Card.Footer>
        </Card>

        <Card style={{ backgroundColor: '#650AFF', borderRadius: '20px' }}>
          <Card.Body>
            <Card.Title> <h5 style={{ color: '#FFFF' }}>Mantenimiento Base</h5> </Card.Title>
            <Card.Text>
              <h2 style={{ color: '#FFFF' }}> $1,500MXN*/<small>mes</small> </h2>
              <p style={{ color: '#FFFF' }}>* Monitoreo de servidor y base de datos</p>
              <p style={{ color: '#FFFF' }}>* Respaldos automáticos semanales de
                información.</p>
              <p style={{ color: '#FFFF' }}>* Ajustes menores mensuales
                (cambios de precios, textos o catálogos).</p>
              <p style={{ color: '#FFFF' }}>* Soporte técnico directo vía WhatsApp
                para el equipo.</p>
            </Card.Text>

            <button style={{ borderRadius: '16px' }}>Contratar Mantenimiento</button>

          </Card.Body>
          <Card.Footer>
            <small style={{ color: '#FFFF' }}>*Este plan solo es efectivo si se trata de un
              sistema creado por nosotros. </small>
          </Card.Footer>
        </Card>

        <Card style={{ backgroundColor: '#650AFF', borderRadius: '20px' }}>
          <Card.Body>
            <Card.Title> <h5 style={{ color: '#FFF' }}>Mantenimiento Avanzado</h5> </Card.Title>
            <Card.Text>
              <h2 style={{ color: '#FFF', fontWeight: '700px' }}> $2,500MXN*/<small>mes</small> </h2>
              <p style={{ color: '#FFF' }}>* Todo lo del Mantenimiento Base.</p>
              <p style={{ color: '#FFF' }}>* Desarrollo de 1 o 2 funciones nuevas o
                reportes extra cada mes.</p>
              <p style={{ color: '#FFF' }}>* Optimización continua de consultas y
                rendimiento.</p>
              <p style={{ color: '#FFF' }}>* Respaldos diarios en la nube e informes sobre los mismos.</p>

            </Card.Text>
            <button style={{ borderRadius: '16px' }}>¡Escalar mi sistema AHORA!</button>
          </Card.Body>
          <Card.Footer>
            <small style={{ color: '#FFF' }}>*Este plan solo es efectivo si se trata de un
              sistema creado por nosotros. </small>
          </Card.Footer>
        </Card>
      </CardGroup>

    </>
  );
}

function FormClient() {
  return (
    <>
      <div class='fullscreen'>
        <section className="py-5 bg-light border-bottom" style={{ background: 'linear-gradient(90deg, #2D1045, #0A0510)' }}>
          <Container className="my-5">
            <Row className="align-items-center">
              <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
                <span className="badge bg-primary mb-3"> <FontAwesomeIcon icon="fa-brands fa-Rocket" /> Llamanos ahora y comencemos con soluciones</span>
                <h2 className="display-4 fw-bold mb-3" style={{ color: '#fff' }}>
                  ¡Manda tu mensaje AHORA!
                </h2>
                <p className="lead mb-4" style={{ color: '#fff' }}>
                  Cuéntanos qué herramienta necesitas o qué proceso quieres resolver.
                  Te responderemos directo a WhatsApp con un diagnóstico y
                  propuesta clara.
                </p>

                <p className="lead mb-4" style={{ color: '#fff' }}>
                  Ademas, contamos con contacto y reuniones virtuales/presenciales
                  para discutir sobre los mismos problemas y posibles soluciones a un
                  mismo problema, para poder ayudarte a subir de nivel a tu negocio
                  con un sistema hecho a tu medida y resolviendo tus necesidades.</p>
              </Col>

              <Col lg={6} className="text-center" >
                <div className="p-4 shadow-sm rounded border" style={{ backgroundColor: 'linear-gradient(90deg, #2D1045, #0A0510)' }}>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label>Nombre de tu Empresa/Negocio</Form.Label>
                      <Form.Control type="text" className="text-muted" placeholder="Ej. Rocket Papas" id='wa-business' />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Descripcion de tus productos</Form.Label>
                      <Form.Control type="text" className="text-muted" placeholder="Ej. muebles/ventanales" id='wa-products' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Label> ¿Que servicio requieren? </Form.Label>
                      <Form.Select aria-label="Default select example" id="wa-plan">
                        <option className="text-muted"> Seleccione su opción </option>
                        <option value="1">Sistema unico</option>
                        <option value="2">Mantenimiento base</option>
                        <option value="3">Mantenimiento avanzado</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label> Descripcion del problema/dudas que tenga </Form.Label>
                      <Form.Control placeholder="Ej. Necesitamos un cotizador automatico como sistema, ya que hacemos todo a mano y poder quitarnos tiempo en eso."
                        className="text-muted" as="textarea" rows={3} id="wa-description">
                      </Form.Control>
                    </Form.Group >
                    <Button variant="primary" type='button'>
                      Enviar Mensaje <FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{ color: '#25d366' }} />
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
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

          <section id="cards">
            <Cards />
          </section>

          <section id="Form_client">
            <FormClient />
          </section>

          <section >

          </section>

        </main>
      </div>

      <Footer />
    </>
  );
}

export default App
