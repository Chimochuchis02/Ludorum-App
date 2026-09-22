import ProfileCard from '../Cardstylized.jsx'
import myImage from './my_image.png'
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap'

export default function Card_Us() {
  return (
    <>
      <div className="fullscreen">
        <section
          className="py-5 border-bottom"
          style={{ background: "linear-gradient(90deg, #2D1045, #0A0510)" }}
        >
          <Container className="my-5">
            <Row className="align-items-center">
              <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
                <span className="badge bg-primary mb-3">
                  Conoce un poco mas de la agencia detras de los sistemas
                </span>
                <h2
                  className="display-4 fw-bold mb-3"
                  style={{ color: "#fff" }}
                >
                  Sobre Nosotros
                </h2>
                <p className="lead mb-4" style={{ color: "#fff" }}>
                  Ludorum && Code nació con una misión clara: ayudar a las PYMEs
                  a crecer mediante herramientas de software creadas desde cero,
                  adaptadas a sus necesidades reales. No queremos que te quedes
                  atrás en la era digital: queremos que subas de nivel y llegues
                  más lejos con tecnología que trabaja para ti.
                </p>
                <p className="lead mb-4" style={{ color: "#fff" }}>
                  Soy Ángel, desarrollador full stack y fundador de Ludorum. Mi
                  compromiso es simple: entender tu problema y construir la
                  solución perfecta para tu negocio.
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
                  onContactClick={() => console.log("Contact clicked")}
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
  );
}