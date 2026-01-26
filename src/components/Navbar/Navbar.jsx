import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./Navbar.css";
import logo from "../../../public/favicon.ico"; // si luego querés usar logo

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="main-navbar">
      <Container>
        <Navbar.Brand href="#inicio" className="navbar-brand">
          {/* Si no querés logo aún, podés comentar la img */}
          <img
            src={logo}
            alt="Clemente Díaz y Asociados"
            className="navbar-logo"
          />
          <span className="brand-text">
            Clemente Díaz <strong>& Asociados</strong>
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#servicios">Áreas de práctica</Nav.Link>
            <Nav.Link href="#elegirnos">Por qué elegirnos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>

            <Button
              className="navbar-cta ms-lg-3"
              href="#contacto"
            >
              Hablá con un especialista
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;