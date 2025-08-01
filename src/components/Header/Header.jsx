import { Container, Row, Col } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-section">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={10}>
            <h1 className="titulo">
              Estudio Jurídico Clemente Díaz y Asociados
            </h1>
            <p className="tagline">
              Comprometidos con tu justicia, orientados a resultados
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
