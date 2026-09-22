import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Row, Col, Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
library.add(fas, far, fab)
import './App.css'
import Politics from './politics.jsx'
import ProfileCard from './Cardstylized.jsx'
import myImage from './assets/my_image.png'
import image_Rocket from './assets/rocket_papas.jpeg'
import image_Easy from './assets/easy_peasy_english.jpeg'
import Footer from './layout/Footer.jsx'
import HeroSection from './Components/HeroSection.jsx'
import Cards from './Components/Cards.jsx'

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

function Card_Us() {
  return (
    <>
      <div className="fullscreen">
        <section className="py-5 border-bottom" style={{ background: 'linear-gradient(90deg, #2D1045, #0A0510)' }}>
          <Container className="my-5">
            <Row className="align-items-center">
              <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
                <span className="badge bg-primary mb-3">
                  Conoce un poco mas de la agencia detras de los sistemas
                </span>
                <h2 className="display-4 fw-bold mb-3" style={{ color: '#fff' }}>
                  Sobre Nosotros
                </h2>
                <p className="lead mb-4" style={{ color: '#fff' }}>
                  Ludorum && Code nació con una misión clara: ayudar a las PYMEs a crecer mediante herramientas de software creadas desde cero, adaptadas a sus necesidades reales.
                  No queremos que te quedes atrás en la era digital:
                  queremos que subas de nivel y llegues más lejos con tecnología que trabaja para ti.
                </p>
                <p className="lead mb-4" style={{ color: '#fff' }}>
                  Soy Ángel, desarrollador full stack y fundador de Ludorum. Mi compromiso es simple:
                  entender tu problema y construir la solución perfecta para tu negocio.
                </p>
              </Col>

              <Col lg={6} className="text-center align-items-right">
                <ProfileCard
                  name="Angel D. Lopez"
                  title="Software Engineer"
                  handle="angeldl.code"
                  status="Online"
                  contactText="Contáctenme"
                  avatarUrl={myImage}
                  showUserInfo
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log('Contact clicked')}
                  behindGlowColor="rgba(125, 190, 255, 0.67)"
                  iconUrl="/assets/demo/iconpattern.png"
                  behindGlowEnabled={false}
                  innerGradient="linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)"
                />
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  )
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
                <Card_Us />
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