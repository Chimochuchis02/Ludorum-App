import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export default function NavBar() {
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