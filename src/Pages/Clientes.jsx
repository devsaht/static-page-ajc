import '../Components/Styles/Contenido.css'
import '../Components/Styles/Portada.css'
import './VerTrabajos.css'

import Footer from '../Components/Footer'
import Header from '../Components/Header'
import TrabajoContenido from '../Components/TrabajoContenido'
import Trabajos from '../Components/Trabajos'
import Formulario from '../Components/Formulario'

import { useParams } from 'react-router-dom'
import { trabajos, fondosTareas} from "../Utils/data";
import Marcas from '../Components/Marcas'
import Portada from '../Components/Portada'

const colores = ["var(--naranja)", "var(--turquesa)", "var(--morado)"];

const Clientes = () => {
    const {idTrabajo} = useParams()
    const dataTrabajo = trabajos.filter( (el) => el.id == idTrabajo)

    return ( 
        <div style={{backgroudColor:"var(--blanco)"}}>
            
            <Portada tipo={"clientes"}/>

            <div className="contenido">
                <TrabajoContenido titulo={"Nuestra galería de trabajos: "} data={dataTrabajo[0]}/>

                <div className="separacion">
                    <Marcas/>
                </div>
                <div className="separacion">
                    <Trabajos/>
                </div>
                <div className="separacion">
                    <Formulario/>
                </div>

            </div>
            
            <Footer />
        </div>
     );
}
 
export default Clientes;