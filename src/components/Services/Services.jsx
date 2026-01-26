import { Container } from "react-bootstrap";
import { FaBalanceScale, FaBriefcase, FaUsers } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    title: "Derecho Civil",
    text: "Contratos, daños y perjuicios, sucesiones, propiedad y más.",
    icon: <FaBalanceScale />,
  },
  {
    title: "Derecho Laboral",
    text: "Despidos, indemnizaciones, accidentes laborales y defensa del trabajador.",
    icon: <FaBriefcase />,
  },
  {
    title: "Derecho de Familia",
    text: "Divorcios, alimentos, régimen de visitas, filiación y más.",
    icon: <FaUsers />,
  },
];

const Services = () => {
  return (
    <section id="servicios" className="services-section">
      <Container>
        <div className="services-head">
          <div className="section-kicker">Áreas de práctica</div>
          <h2 className="section-title">Servicios Legales</h2>
          <p className="section-text">
            Elegí el área que necesitás y coordinamos una consulta.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <article key={s.title} className="service-card" data-aos="fade-up">
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-text">{s.text}</p>

              <a className="service-link" href="#contacto">
                Consultar ahora <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;