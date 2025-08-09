import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import NosotrosImg from "../../assets/logo.jpg";

const About = () => {
  return (
    <section id="sobre-nosotros" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} data-aos="fade-up" data-aos-duration="800">
            <img
              src={NosotrosImg}
              alt="Sobre Nosotros"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col
            md={6}
            data-aos="fade-down"
            data-aos-duration="800"
            data-aos-delay="100"
            className="mt-4"
          >
            <h2>Quiénes Somos</h2>
            <p>
              En el Estudio Jurídico Clemente Díaz y Asociados brindamos un
              servicio legal personalizado, transparente y orientado a
              resultados. Nuestra misión es acompañar a cada cliente con
              compromiso, ética profesional y soluciones eficaces en derecho
              civil, laboral y de familia.
            </p>
            <p>
              Nos destacamos por la cercanía en el trato, la experiencia
              comprobada y una comunicación clara que genera confianza desde el
              primer encuentro.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
