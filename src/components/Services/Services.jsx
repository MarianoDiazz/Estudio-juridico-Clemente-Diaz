import { Container, Row, Col, Card } from "react-bootstrap";
import { FaBalanceScale, FaBriefcase, FaUsers } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaBalanceScale />,
    title: "Derecho Civil",
    description: "Contratos, daños y perjuicios, propiedad, sucesiones y más.",
  },
  {
    icon: <FaBriefcase />,
    title: "Derecho Laboral",
    description:
      "Despidos, indemnizaciones, accidentes laborales y defensa del trabajador.",
  },
  {
    icon: <FaUsers />,
    title: "Derecho de Familia",
    description: "Divorcios, alimentos, filiación, regímenes de visitas y más.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <Container>
        <h2 className="text-center mb-5">Servicios Legales</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} className="mb-4 fade-in-up" key={index}>
              <Card className="text-center h-100 shadow-sm">
                <Card.Body>
                  <div className="icon-wrapper mb-3">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
