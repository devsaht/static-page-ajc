import './Styles/Contenido.css'
import '../Pages/Nosotros.css'
import { mensajes } from '../Utils/data';

const MisionVision = () => {

    const stylesParrafo = {
        height:"100%",
        padding:"1rem 2rem",
        backgroundColor:"var(--gris)",
    }

    return ( 
        <div className="sectionContainerGridTriple  paddingLateral4">

            <div className="flex-column" style={{ backgroundColor:"var(--primario)"}}>
                <p className="fsTitulo sectionTituloBlanco">
                    MISION
                </p>
                <div style={stylesParrafo}>
                    {mensajes.mision}
                </div>
            </div>

            <img src="/images/fondo.jpg" alt="AJC Mision y Vision" className="imgCompleto"/>
            
            <div className="flex-column" style={{   backgroundColor:"var(--primario)"}}>
                <p className="fsTitulo sectionTituloBlanco">
                    VISION
                </p>
                <div style={stylesParrafo}>
                    {mensajes.vision}
                </div>
            </div>
            
        </div>
     );
}
 
export default MisionVision;