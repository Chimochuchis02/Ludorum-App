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
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
library.add(fas, far, fab)
import './App.css'
import Particles from './Particles.jsx'
import Politics from './politics.jsx'
import image_Rocket from './assets/rocket_papas.jpeg'
import image_Easy from './assets/easy_peasy_english.jpeg'

function HeroSection() {
  return (
    <>
      <section className="py-5 bg-light border-bottom" style={{ background: 'linear-gradient(90deg, #2D1045, #0A0510)', width: 'auto', height: '750px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <Particles
            particleColors={["#ffffff"]}
            particleCount={500}
            particleSpread={10}
            speed={0.5}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        <Container className="my-5" style={{ position: 'relative', zIndex: 1 }}>
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
    </>
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
              <Nav.Link as={Link} to="/politics" id="politica" class="nav_words">Politicas de seguridad</Nav.Link>
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
      <footer className="page-footer font-small white pt-4 sticky-bottom" style={{ backgroundColor: '#350067' }}>
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
              <div className="d-flex gap-3 justify-content-center mt-3">
                <a href="https://wa.me/5218713503367"
                  class="social-icon-footer wa-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: '45px', height: '45px', color: '#25D366' }}><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a>
                <a href="https://wa.me/5218713503367"
                  class="social-icon-footer envelope-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: '45px', height: '45px', color: '#25D366' }}> <FontAwesomeIcon icon="fa-regular fa-envelope" /> </a>
                <a href="https://wa.me/5218713503367"
                  class="social-icon-footer phone-hover text-white bg-white bg-opacity-25 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                  style={{ width: '45px', height: '45px', color: '#0abbe700' }}> <FontAwesomeIcon icon="fa-solid fa-phone" /> </a>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3 justify-content-center" class="word_copyright">
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
      <CardGroup style={{ padding: '75px' }} className='gap-5' id="#pricing">
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
  const [formData, setFormData] = useState({
    name: '',
    description_Products: '',
    selected_plan: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  function sendToWhatsapp() {
    const phone = "528711324475";
    const { name, description_Products, selected_plan, description } = formData;

    if (name.trim() === "") {
      alert("¡El nombre es un campo obligatorio, por favor llénelo!");
      return;
    }
    if (description_Products.trim() === "") {
      alert("¡El campo de la descripción de productos es obligatorio, por favor llénelo!");
      return;
    }
    if (selected_plan === "") {
      alert("¡El campo seleccionado del plan es obligatorio, por favor llénelo!");
      return;
    }
    if (description.trim() === "") {
      alert("¡El campo de descripción o dudas es obligatorio, por favor llénelo!");
      return;
    }

    const message = `¡Hola!, nuestra empresa se llama ${name}, nuestro giro de negocio es: ${description_Products}, el plan que seleccionamos y nos interesa es el de "${selected_plan}", y quisieramos saber más sobre: ${description}.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }

  return (
    <>
      <div className="fullscreen">
        <section className="py-5 border-bottom" style={{ background: 'linear-gradient(90deg, #2D1045, #0A0510)' }}>
          <Container className="my-5">
            <Row className="align-items-center">
              <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
                <span className="badge bg-primary mb-3">
                  Llámanos ahora y comencemos con soluciones
                </span>
                <h2 className="display-4 fw-bold mb-3" style={{ color: '#fff' }}>
                  ¡Manda tu mensaje AHORA!
                </h2>
                <p className="lead mb-4" style={{ color: '#fff' }}>
                  Cuéntanos qué herramienta necesitas o qué proceso quieres resolver.
                  Te responderemos directo a WhatsApp con un diagnóstico y propuesta clara.
                </p>
                <p className="lead mb-4" style={{ color: '#fff' }}>
                  Además, contamos con contacto y reuniones virtuales/presenciales
                  para discutir sobre los mismos problemas y posibles soluciones a un
                  mismo problema, para poder ayudarte a subir de nivel a tu negocio
                  con un sistema hecho a tu medida y resolviendo tus necesidades.
                </p>
              </Col>

              <Col lg={6} className="text-center">
                <div className="p-4 shadow-sm rounded border" style={{ background: 'linear-gradient(90deg, #2D1045, #0A0510)' }}>
                  <Form>
                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#fff' }}>Nombre de tu Empresa/Negocio</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ej. Rocket Papas"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        id="wa-business"
                        style={{ color: '#000' }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#fff' }}>Descripción de tus productos</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ej. muebles/ventanales"
                        value={formData.description_Products}
                        onChange={handleChange}
                        name="description_Products"
                        id="wa-products"
                        style={{ color: '#000' }}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#fff' }}>¿Qué servicio requieren?</Form.Label>
                      <Form.Select
                        value={formData.selected_plan}
                        onChange={handleChange}
                        name="selected_plan"
                        id="wa-plan"
                        style={{ color: '#000' }}
                      >
                        <option value="">Seleccione su opción</option>
                        <option value="Sistema Único">Sistema único</option>
                        <option value="Mantenimiento Base">Mantenimiento base</option>
                        <option value="Mantenimiento Avanzado">Mantenimiento avanzado</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label style={{ color: '#fff' }}>Descripción del problema/dudas que tenga</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Ej. Necesitamos un cotizador automático..."
                        value={formData.description}
                        onChange={handleChange}
                        name="description"
                        id="wa-description"
                        style={{ color: '#000' }}
                      />
                    </Form.Group>

                    <Button variant="outline-primary" onClick={sendToWhatsapp} type="button" className="w-100">
                      Enviar Mensaje <FontAwesomeIcon icon="fa-brands fa-whatsapp" style={{ color: " rgb(99, 230, 190)" }} />
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

function Cards_Clients() {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-6 col-md-6">
              <div
                className="client-card h-100"
                style={{ backgroundColor: '#650AFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(101, 10, 255, 0.3)' }}>

                <div className="text-center pt-4 pb-2">
                  <h5 style={{ color: '#FFF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                    Educación & Servicios
                  </h5>
                </div>

                <div className="text-center px-4">
                  <div style={{
                    height: '220px', backgroundColor: '#FFF', borderRadius: '16px', padding: '20px', marginBottom: '25px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <img
                      src={image_Easy}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                <div className="text-center px-4 pb-4">
                  <h2 style={{ color: '#FFF', fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>
                    Easy Peasy English
                  </h2>

                  <p style={{ color: '#FFF', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px', opacity: 0.9 }}>
                    Plataforma web accesible e interactiva para la captación de alumnos y oferta de cursos.
                  </p>
                  <a href="https://easy-peasy-english-web-2ulj.vercel.app">
                    <button
                      className="btn btn-client"
                      style={{
                        backgroundColor: '#0a0a0a', color: '#FFF', border: 'none', borderRadius: '16px', padding: '14px 32px',
                        fontWeight: '600', fontSize: '0.95rem', width: '100%', cursor: 'pointer', transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#1a1a1a';
                        e.target.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#0a0a0a';
                        e.target.style.transform = 'translateY(0)';
                      }}
                    >
                      Ver página Web
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div
                className="client-card h-100"
                style={{ backgroundColor: '#650AFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(101, 10, 255, 0.3)' }}>
                <div className="text-center pt-4 pb-2">
                  <h5 style={{ color: '#FFF', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>
                    Gastronomía & Retail
                  </h5>
                </div>

                <div className="text-center px-4">
                  <div style={{
                    height: '220px', backgroundColor: '#FFF', borderRadius: '16px', padding: '20px', marginBottom: '25px', display: 'flex',
                    alignItems: 'center', justifyContent: 'center'
                  }}>
                    <img
                      src={image_Rocket}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="text-center px-4 pb-4">
                  <h2 style={{ color: '#FFF', fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>
                    Rocket Papas
                  </h2>

                  <p style={{ color: '#FFF', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px', opacity: 0.9 }}>
                    Se implementó una página web para promocionar la franquicia y una sección administrativa.
                  </p>

                  <button
                    className="btn btn-client"
                    style={{
                      backgroundColor: '#0a0a0a', color: '#FFF', border: 'none', borderRadius: '16px', padding: '14px 32px', fontWeight: '600',
                      fontSize: '0.95rem', width: '100%', cursor: 'pointer', transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = '#1a1a1a';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = '#0a0a0a';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    Ver página Web
                  </button>

                  <div className="mt-3">
                    <small style={{ color: '#FFF', opacity: 0.7 }}>
                      *Página en desarrollo
                    </small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div >

    </>
  );
}

function App() {
  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <NavBar />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <Cards />
                <FormClient />
                <Cards_Clients />
              </>
            } />

            <Route path="/politics" element={<Politics />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App