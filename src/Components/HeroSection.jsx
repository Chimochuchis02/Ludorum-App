import Particles from "./Particles.jsx";
import { Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

export default function HeroSection() {
  return (
    <>
      <section
        className="py-5 bg-light border-bottom"
        style={{
          background: "linear-gradient(90deg, #2D1045, #0A0510)",
          width: "auto",
          height: "750px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        >
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

        <Container className="my-5" style={{ position: "relative", zIndex: 1 }} id="hero">
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
              <span className="badge bg-primary mb-3">
                {" "}
                <FontAwesomeIcon icon="fa-brands fa-Rocket" /> Sube de nivel a
                tu negocio con nosotros
              </span>
              <h1 className="display-4 fw-bold mb-3" style={{ color: "#fff" }}>
                Sistemas hechos a tus necesidades
              </h1>
              <p className="lead mb-4" style={{ color: "#fff" }}>
                Desarrollamos herramientas internas, cotizadores automáticos y
                catálogos digitales adaptados a la operación real de tu empresa.
                Sin rentas mensuales en dólares ni programas genéricos:software
                propio y a tu medida.
              </p>
              <div className="d-gap gap-3 d-sm-flex justify-content-center justify-content-lg-start">
                <a href="#form">
                  <Button
                    variant="primary"
                    size="lg"
                    className="me-sm-2 mb-2 mb-sm-0"
                    style={{ color: "#fff" }}
                  >
                    Contactanos Ahora
                  </Button>
                </a>
                <a href="#pricing">
                  <Button
                    variant="outline-secondary"
                    size="lg"
                    style={{ color: "#fff" }}
                  >
                    Ver Planes y Precios
                  </Button>
                </a>
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