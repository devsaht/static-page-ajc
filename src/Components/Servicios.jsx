import './Styles/Contenido.css'
import '../Pages/Inicio.css'
import Tarjeta from './Tarjeta'
import {servicios} from "../Utils/data.js"


const Servicios = () => {
    return ( 
    <div className="separacion">
        <div className="sectionContainer">
            <p className="fsTitulo sectionTitulo">
                SERVICIOS QUE OFRECEMOS
            </p>
            <div className="sAsTarjetas">
                {servicios.map(servicio=>{
                    return <Tarjeta key={servicio.id} id={servicio.id} titulo={servicio.titulo} texto={servicio.texto} imgSource={servicio.imgSource} isIndicator={false}/>
                })}
            </div>
        </div>
        
    </div>
    );
}
 
export default Servicios;