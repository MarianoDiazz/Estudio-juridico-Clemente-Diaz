import { Container, Row, Col } from "react-bootstrap";
import { FiShield, FiClock, FiMessageCircle } from "react-icons/fi";
import "./About.css";
import NosotrosImg from "../../assets/logo.jpg"; // luego ideal: foto de oficina/estudio

const About = () => {
  return (
    <section id="sobre-nosotros" className="about-section">
      <div className="about-bg" aria-hidden="true" />
      <Container className="about-container">
        <Row className="align-items-center g-4">
          <Col md={6} data-aos="fade-up" data-aos-duration="800">
            <div className="about-media">
              <img
                src={NosotrosImg}
                alt="Estudio Jurídico Clemente Díaz y Asociados"
                className="about-img"
              />
            </div>
          </Col>

          <Col
            md={6}
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
          >
            <div className="about-kicker">Estudio Jurídico</div>
            <h2 className="about-title">Quiénes somos</h2>

            <p className="about-text">
              En Clemente Díaz y Asociados brindamos un servicio legal{" "}
              <strong>personalizado</strong>, <strong>transparente</strong> y
              orientado a soluciones. Acompañamos a cada cliente con{" "}
              <strong>ética profesional</strong> y comunicación clara.
            </p>

            <p className="about-text">
              Trabajamos en derecho <strong>civil</strong>, <strong>laboral</strong>{" "}
              y <strong>de familia</strong>, priorizando el trato humano y el
              seguimiento cercano del caso.
            </p>

            <div className="about-highlights">
              <div className="hi-card">
                <div className="hi-icon"><FiClock /></div>
                <div>
                  <div className="hi-title">Respuesta ágil</div>
                  <div className="hi-sub">Atención por WhatsApp</div>
                </div>
              </div>

              <div className="hi-card">
                <div className="hi-icon"><FiMessageCircle /></div>
                <div>
                  <div className="hi-title">Comunicación clara</div>
                  <div className="hi-sub">Explicación simple y directa</div>
                </div>
              </div>

              <div className="hi-card">
                <div className="hi-icon"><FiShield /></div>
                <div>
                  <div className="hi-title">Ética profesional</div>
                  <div className="hi-sub">Seriedad y confidencialidad</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;