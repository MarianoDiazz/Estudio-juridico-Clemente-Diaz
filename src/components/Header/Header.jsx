import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="hero" id="inicio">
      {/* Fondo decorativo */}
      <div className="hero-bg" aria-hidden="true" />

      <Container className="hero-container">
        <Row className="align-items-center">
          <Col lg={7} className="hero-left" data-aos="fade-up">
            <div className="hero-badge">Estudio Jurídico</div>

            <h1 className="hero-title">
              ¿Tenés un problema legal?
              <br />
              <span>Te ayudamos a encontrar la mejor solución.</span>
            </h1>

            <p className="hero-text">
              Asesoramiento jurídico en <strong>derecho civil</strong>,{" "}
              <strong>laboral</strong> y <strong>de familia</strong>. Atención
              personalizada en Aguilares y zona.
            </p>

            <div className="hero-actions">
              <Button
                className="hero-btn"
                size="lg"
                href="#contacto"
              >
                Hablá con un especialista
              </Button>

              <a
                className="hero-whatsapp"
                href="https://wa.me/543865242660?text=Hola%20Dr.%2C%20quisiera%20hacerle%20una%20consulta..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <FaWhatsapp />
                WhatsApp
              </a>
            </div>

            <div className="hero-trust" data-aos="fade-up" data-aos-delay="150">
              <div className="trust-item">
                <div className="trust-title">Respuesta rápida</div>
                <div className="trust-sub">Seguimiento cercano</div>
              </div>
              <div className="trust-item">
                <div className="trust-title">Trato humano</div>
                <div className="trust-sub">Comunicación clara</div>
              </div>
              <div className="trust-item">
                <div className="trust-title">Ética profesional</div>
                <div className="trust-sub">Compromiso real</div>
              </div>
            </div>
          </Col>

          {/* Columna derecha: visual genérico (no foto de personas) */}
          <Col lg={5} className="d-none d-lg-block" data-aos="fade-left">
            <div className="hero-card">
              <div className="hero-card-top">Áreas de práctica</div>

              <ul className="hero-list">
                <li>Derecho Civil</li>
                <li>Derecho Laboral</li>
                <li>Derecho de Familia</li>
              </ul>

              <div className="hero-card-note">
                Atención presencial y consultas por WhatsApp.
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;