import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";
import "./Navbar.css";
import Logo from "../../assets/logo - copia.jpg"; // Asegúrate de tener el logo en la ruta correcta";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" variant="dark" fixed="top" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={Logo}
            alt="Logo Estudio Jurídico"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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
