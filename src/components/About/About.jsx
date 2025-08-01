import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import NosotrosImg from "../../assets/logo.jpg";

const About = () => {
  return (
    <section id="sobre-nosotros" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="fade-in-right">
            <img
              src={NosotrosImg}
              alt="Sobre Nosotros"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6} className="fade-in-right delay">
            <h2>Sobre Nosotros</h2>
            <p>
              Somos un estudio jurídico con amplia experiencia en derecho civil,
              laboral y de familia. Nuestro enfoque está en brindar soluciones
              legales claras, humanas y efectivas para cada cliente. Trabajamos
              con ética, compromiso y resultados comprobables.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
