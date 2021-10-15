import Inicio from "./Pages/Inicio";
import Clientes from "./Pages/Clientes";
import Nosotros from "./Pages/Nosotros";
import Trabajadores from "./Pages/Trabajadores";
import Lugares from "./Pages/Lugares";
import Autenticacion from "./Pages/Autenticacion";
import NotFound from "./Pages/NotFound";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <Router>
        <main>
          <Switch>
            <Route exact path="/Clientes/:idTrabajo" component={Clientes} />
            <Route exact path="/Nosotros" component={Nosotros} />
            <Route exact path="/Lugares" component={Lugares} />
            <Route exact path="/Trabajadores" component={Trabajadores} />
            <Route exact path="/Autenticacion" component={Autenticacion} />
            <Route exact path="/" component={Inicio} />
            <Route path="/" component={NotFound} />
          </Switch>
        </main>
      </Router>
      <ToastContainer />
    </>
  );
}
