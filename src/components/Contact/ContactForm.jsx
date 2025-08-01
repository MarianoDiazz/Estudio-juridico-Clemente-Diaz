import { useRef, useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_02qgn6u", // <- reemplazá esto
        "template_di2qsrm", // <- reemplazá esto
        form.current,
        "JVka5ILw2szm9COPB" // <- reemplazá esto
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setError(false);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setError(true);
        }
      );
  };

  return (
    <section id="contacto" className="contact-section">
      <Container>
        <h2 className="text-center mb-4">Agendá tu Consulta</h2>

        <Form ref={form} onSubmit={sendEmail} className="contact-form">
          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" name="user_name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control type="email" name="user_email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMensaje">
            <Form.Label>Mensaje o consulta</Form.Label>
            <Form.Control as="textarea" rows={5} name="message" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar consulta
          </Button>

          {sent && (
            <Alert variant="success" className="mt-3">
              ¡Mensaje enviado con éxito!
            </Alert>
          )}
          {error && (
            <Alert variant="danger" className="mt-3">
              Ocurrió un error. Intentalo de nuevo.
            </Alert>
          )}
        </Form>
      </Container>
    </section>
  );
};

export default ContactForm;
