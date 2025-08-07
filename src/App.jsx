import "./App.css";
import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import { Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import Services from "./components/Services/Services.jsx";
import ContactForm from "./components/Contact/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";
import CustomNavbar from "./components/Navbar/Navbar.jsx";
import WhyChooseUs from "./components/WhyChoseUs/WhyChooseUs.jsx";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Header />
      <About />
      <Services />
      <WhyChooseUs />
      <ContactForm />
      <Footer />
      <div className="whatsapp-container">
        <div className="whatsapp-tooltip">¿Necesitás ayuda?</div>
        <a
          href="https://wa.me/543865242660?text=Hola%20Dr.%2C%20quisiera%20hacerle%20una%20consulta."
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>
      </div>
    </div>
  );
}

export default App;
