import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#">Estudio Díaz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="inicio"
              smooth={true}
              duration={200}
              className="nav-link"
              offset={-80}
            >
              Inicio
            </Link>
            <Link
              to="sobre-nosotros"
              smooth={true}
              duration={200}
              className="nav-link"
              offset={-80}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="servicios"
              smooth={true}
              duration={200}
              className="nav-link"
              offset={-80}
            >
              Servicios
            </Link>
            <Link
              to="contacto"
              smooth={true}
              duration={200}
              className="nav-link"
              offset={-80}
            >
              Contacto
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
