import { Container, Button } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="hero-section">
      <div className="overlay"></div>
      <Container
        className="text-center hero-content"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1 className="hero-title">
          Estudio Jurídico Clemente Díaz y Asociados
        </h1>
        <p className="hero-subtitle">
          Abogados especializados en derecho civil, laboral y de familia
        </p>
        <Button variant="light" size="lg" className="hero-btn" href="#contacto">
          Agendá tu consulta
        </Button>
      </Container>
    </header>
  );
};

export default Header;
