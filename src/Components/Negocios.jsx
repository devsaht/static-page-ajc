import './Styles/Contenido.css'
import '../Pages/Nosotros.css'

const Negocios = () => {
    return ( 
        <div>
            <div className="section">
            <div className="sectionContainer">
                <p className="fsTitulo sectionTitulo">
                    MISION
                </p>
                <div className="sAsFlexCuadro">
                    <div className="flexCuadro" style={{backgroundColor: "var(--primario)"}}>
                        <div className="cuadroTitulo">CLIENTES</div>
                        <div className="cuadroTexto">Repudiandae incidunt qui nihil temporibus nam maiores dolorem!</div>
                    </div>
                    <div className="flexCuadro"  style={{backgroundColor: "var(--naranja)"}}>
                        <div className="cuadroTitulo">TRABAJADORES</div>
                        <div className="cuadroTexto">Repudiandae incidunt qui nihil temporibus nam maiores dolorem!</div>
                    </div>
                    <div className="flexCuadro" style={{backgroundColor: "var(--turquesa)"}}>
                        <div className="cuadroTitulo">LUGARES DONDE ACTUAMOS</div>
                        <div className="cuadroTexto">Repudiandae incidunt qui nihil temporibus nam maiores dolorem!</div>
                    </div>
                </div>
                
                <p className="fsTitulo sectionTitulo">
                    VISION
                </p>
                <div className="contenidoVision">
                    <div className="visionTexto">Repudiandae incidunt qui nihil temporibus nam maiores dolorem!</div>
                    <img className="visionTexto" src="/images/fondo-nosotros-2.jpg" alt="AJC mision y vision" />
                </div>

                <p className="fsTitulo sectionTitulo">
                    COMPROMISOS
                </p>
                
            </div>
        </div>
        </div>
     );
}
 
export default Negocios;