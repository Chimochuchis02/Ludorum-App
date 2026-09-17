import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import politicasContent from './politics.md?raw';
library.add(fas, far, fab)
import './App.css'
import App from './App.jsx'

function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" style={{ backgroundColor: '#7B2CBF' }} >
                <Container>
                    <Navbar.Brand as={Link} to="/" id="nav_title">LUDORUM && CODE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/#Us" id="nosotros" class="nav_words">Nosotros</Nav.Link>
                            <Nav.Link to="/#clients" id="clientes" class="nav_words">Clientes</Nav.Link>
                            <Nav.Link to="/#pricing" id="pyp" class="nav_words">Planes y Precios </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/politics" id="politica" class="nav_words">Politicas de seguridad</Nav.Link>
                            <Nav.Link to="/#clients" id="contacto" class="nav_word">Contacto</Nav.Link>
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

function Info() {
    return (
        <>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="politicas-content">
                            <ReactMarkdown>{politicasContent}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

function Politics() {
    return (
        <>

            <NavBar />

            <Info />

            <Footer />

        </>

    )
}

export default Politics