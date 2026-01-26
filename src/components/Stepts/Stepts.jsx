import { Container, Row, Col, Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import { FiMessageCircle, FiSearch, FiFileText, FiCheckCircle } from "react-icons/fi";
import "../Stepts/Stepts.css";

const steps = [
  {
    number: "01",
    title: "Nos escribís",
    text: "Contanos brevemente tu situación por WhatsApp o formulario. Respondemos a la brevedad.",
    icon: <FiMessageCircle />,
  },
  {
    number: "02",
    title: "Analizamos tu caso",
    text: "Revisamos la información y te explicamos el camino legal posible, sin vueltas.",
    icon: <FiSearch />,
  },
  {
    number: "03",
    title: "Definimos estrategia",
    text: "Te proponemos opciones claras y acordamos la mejor alternativa según tu objetivo.",
    icon: <FiFileText />,
  },
  {
    number: "04",
    title: "Avanzamos con el proceso",
    text: "Iniciamos el trámite o acción necesaria y te mantenemos informado en cada etapa.",
    icon: <FiCheckCircle />,
  },
];

const Steps = () => {
  return (
    <section id="como-trabajamos" className="steps-section">
      <div className="steps-bg" aria-hidden="true" />
      <Container className="steps-container">
        <Row className="mb-4 align-items-end">
          <Col lg={8}>
            <div className="section-kicker">Proceso de atención</div>
            <h2 className="section-title">¿Cómo trabajamos?</h2>
            <p className="section-text">
              Un proceso simple, claro y transparente. Vos sabés qué pasa y qué sigue en cada paso.
            </p>
          </Col>

          <Col lg={4} className="d-none d-lg-flex justify-content-lg-end">
            <div className="steps-mini-note">
              <span className="dot" />
              Atención personalizada
            </div>
          </Col>
        </Row>

        <div className="steps-grid">
          {steps.map((s) => (
            <article key={s.number} className="step-card" data-aos="fade-up">
              <div className="step-top">
                <div className="step-number">{s.number}</div>
                <div className="step-icon">{s.icon}</div>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-text">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="steps-cta" data-aos="fade-up" data-aos-delay="150">
          <div className="cta-left">
            <h4 className="cta-title">¿Querés que veamos tu caso?</h4>
            <p className="cta-text">
              Escribinos y coordinamos la consulta. Un solo canal de contacto, rápido y directo.
            </p>
          </div>

          <div className="cta-right">
            <Button className="cta-btn" size="lg" href="#contacto">
              Hablá con un especialista
            </Button>

            <a
              className="cta-whatsapp"
              href="https://wa.me/543865242660?text=Hola%20Dr.%2C%20quisiera%20hacerle%20una%20consulta..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Steps;