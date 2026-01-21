import { Container, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  return (
    <header className="hero-section" id="inicio">
      <div className="hero-overlay"></div>

      <Container className="hero-content text-center">
        <h1 className="hero-title">
          DÍAZ <span>& ASOCIADOS</span>
        </h1>

        <h2 className="hero-subtitle">
          Estudio Jurídico
        </h2>

        <p className="hero-text">
          Defensa legal estratégica en derecho civil, laboral y de familia
        </p>

        <p className="hero-location">
          Aguilares · Tucumán · Atención personalizada
        </p>

        <div className="hero-buttons">
          <Button
            variant="light"
            size="lg"
            href="#contacto"
            className="hero-btn-primary"
          >
            Agendá tu consulta
          </Button>

          <a
            href="https://wa.me/543865242660?text=Hola%20Dr.%2C%20quisiera%20hacerle%20una%20consulta..."
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-whatsapp"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Header;
