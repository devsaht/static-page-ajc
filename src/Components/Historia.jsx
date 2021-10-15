import './Styles/Contenido.css'
import '../Pages/Nosotros.css'
import { mensajes } from '../Utils/data';

const Historia = () => {

    const stylesButton = {
        position:"absolute",
        top:"50%",
        left:"50%",
        opacity:"0.8"
    }

    return (
            <div className="sectionContainerGrid" style={{backgroundColor:"var(--gris)"}}>

                <div className="flex-column">
                    <p className="fsTitulo sectionTitulo" style={{color:"var(--primario)"}}>
                        HISTORIA
                    </p>
                    <div className="sectionTexto">
                        {mensajes.historia}
                    </div>
                </div>

                <div className="" style={{position:"relative"}}>
                    <div className="containerClipPath">
                        <img src="/images/fondo.jpg" alt="AJC Historia" className="imgCompleto"/>
                    </div>
                    <button className="btnPrimary" style={stylesButton}>LINEA DE TIEMPO</button>
                </div>                    
                
            </div>
     );
}
 
export default Historia;