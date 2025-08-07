import { Container, Row, Col } from "react-bootstrap";
import { FaBalanceScale, FaBriefcase, FaUsers } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FaBalanceScale />,
    title: "Derecho Civil",
    description:
      "Contratos, accidentes de tránsito, propiedad, sucesiones y más.",
  },
  {
    icon: <FaBriefcase />,
    title: "Derecho Laboral",
    description:
      "Despidos, indemnizaciones, accidentes laborales, derechos del trabajador.",
  },
  {
    icon: <FaUsers />,
    title: "Derecho de Familia",
    description: "Divorcios, alimentos, regímenes de visitas, filiación y más.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <Container>
        <h2 className="text-center mb-5">Servicios Legales</h2>
        <Row className="justify-content-center">
          {services.map((service, index) => (
            <Col
              md={6}
              lg={4}
              className="mb-4 d-flex justify-content-center"
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
