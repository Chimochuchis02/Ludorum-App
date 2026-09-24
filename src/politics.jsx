import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import politicasContent from './politics.md?raw';
library.add(fas, far, fab)
import './App.css'


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

export default function Politics() {
    return (
        <>

            <NavBar />
            <div style={{ minHeight: '60vh', paddingBottom: '50px' }}>
                <Info />
            </div>
        </>
    )
}