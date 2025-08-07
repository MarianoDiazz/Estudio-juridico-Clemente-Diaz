import { Container, Row, Col } from "react-bootstrap";
import { FaInstagram, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={12} className="text-center">
            <h5>Estudio Jurídico Clemente Díaz y Asociados</h5>
            <p>Dirección: Aristobulo del valle 618, Aguilares, Tucumán</p>
            <p>Horario: Lunes a Viernes de 8 a 12 y 17 a 21 hs</p>
            <p>
              <FaPhone /> +54 3865 242660
            </p>
            <p>
              <FaEnvelope /> martindiaz99@hotmail.com
            </p>
            <div className="social-links mt-3">
              <a
                href="https://www.linkedin.com/in/martin-clemente-diaz-84453b300/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <p className="mt-3 small">
              © 2025 Estudio Jurídico Clemente Díaz y Asociados
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
