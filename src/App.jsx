import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'



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
      <footer bg="dark">
        <Container fluid>
          <Row className="text-white">
            
            <Col>

              <h5>LUDORUM && CODE</h5>

            </Col>

            <Col>

              <h5>Empresa</h5>

            </Col>

              <Col>

                  <h5> Informacion </h5>

              </Col>

                <Col>
                  
                  <h5>  Redes Sociales </h5>

                </Col>

                <Col>

                  <h5 fixed="bottom"> CopyRight LUDORUM && CODE 2026.|Consulta nuestro Aviso de privacidad </h5>  

                </Col>
          </Row>
        </Container>
      </footer>
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
