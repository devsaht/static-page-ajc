import '../Components/Styles/Contenido.css'
import {mensajes} from '../Utils/data'

const Marcas = () => {
    return ( 
        <div className="sectionContainer" style={{backgroundColor:"var(--primario)"}}>
            <div className="sectionContainerGrid">
                <p className="fsTitulo sectionTituloBlanco flex">MARCAS CON LAS QUE TRABAJAMOS</p>
                <div className="sectionParrafo">
                    {mensajes.clientes}
                </div>
            </div>

            <div className="flex">
                <img style={{width:"60%",height:"60%"}} className="imgCompleto" src="/images/marcas.jpg" alt="AJC Marcas con las que trabajamos" />
                {/* <img className="imgCompleto" src="/images/marcas1.jpg" alt="AJC Marcas con las que trabajamos" /> */}
                {/* <img className="imgCompleto" src="/images/marcas2.jpg" alt="AJC Marcas con las que trabajamos" /> */}
                {/* <img className="imgCompleto" src="/images/marcas3.jpg" alt="AJC Marcas con las que trabajamos" /> */}
            </div>
        </div>
     );
}
 
export default Marcas;