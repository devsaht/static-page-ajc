import "./Styles/Contenido.css";
import { trabajos,mensajes } from "../Utils/data";
import TrabajosTarjeta from "./TrabajosTarjeta";
import { useState } from "react";
import TrabajosTarjetaFocus from "./TrabajosTarjetaFocus";

const colores = ["var(--naranja)", "var(--turquesa)", "var(--morado)"];

const Trabajos = () => {
  const [focus, setFocus] = useState(1);

  return (
      <div className="sectionContainer">

        <div className="flex-row">
          <p className="fsTitulo sectionTitulo">NUESTROS TRABAJOS</p>
          
          <div className="sectionParrafo">
            {mensajes.nuestrosTrabajos}
          </div>
        </div>

        <div className="slideContainer">
            {trabajos.map((el) =>
            el.id === focus ? (
                <TrabajosTarjetaFocus key={el.id} data={el} setFocus={setFocus} color={colores[el.id]}/>
            ) : (
                <TrabajosTarjeta key={el.id} data={el} setFocus={setFocus} color={colores[el.id]}/>
            )
            )}
        </div>

      </div>
  );
};

export default Trabajos;
