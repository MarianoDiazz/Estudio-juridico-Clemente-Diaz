import "./App.css";
import Header from "./components/Header.jsx";
import { Button } from "react-bootstrap";
function App() {
  return (
    <div>
      <Header />
      <h2>¿Quiénes somos?</h2>
      <p>
        Somos un estudio jurídico con amplia trayectoria en derecho civil,
        laboral y familiar.
      </p>
      <Button className="btn btn-primary">Hola</Button>
    </div>
  );
}

export default App;
