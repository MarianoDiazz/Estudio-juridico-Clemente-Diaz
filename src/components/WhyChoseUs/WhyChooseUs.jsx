import { Container, Row, Col } from "react-bootstrap";
import {
  FaUserShield,
  FaClock,
  FaHandshake,
  FaBalanceScale,
} from "react-icons/fa";
import "./WhyChooseUs.css";
import img from "../../assets/nosotros.jpg"; // Cambia por la tuya

const reasons = [
  {
    icon: <FaUserShield />,
    text: "Atención personalizada y ética profesional",
  },
  { icon: <FaClock />, text: "Respuesta rápida y seguimiento constante" },
  { icon: <FaHandshake />, text: "Trato humano, claridad y confianza" },
  {
    icon: <FaBalanceScale />,
    text: "Amplia experiencia en distintas ramas del derecho",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section" id="por-que-elegirnos">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} sm={12} data-aos="fade-right">
            <img
              src={img}
              alt="Estudio jurídico"
              className="why-image d-flex justify-content-center mx-auto"
            />
          </Col>
          <Col lg={6} data-aos="fade-left" className="my-4">
            <h2 className="mb-4">¿Por qué elegirnos?</h2>
            <ul className="why-list">
              {reasons.map((item, index) => (
                <li key={index}>
                  <span className="icon">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
