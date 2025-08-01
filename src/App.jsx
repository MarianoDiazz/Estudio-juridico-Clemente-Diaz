import "./App.css";
import About from "./components/About/About.jsx";
import Header from "./components/Header/Header.jsx";
import { Button } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";
import Services from "./components/Services/Services.jsx";
import ContactForm from "./components/Contact/ContactForm.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <ContactForm />
      <Footer />
      <a
        href="https://wa.me/543865689114"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp style={{ marginTop: "5px" }} />
      </a>
    </div>
  );
}

export default App;
