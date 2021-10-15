import './Inicio.css'
import '../Components/Styles/Contenido.css'
import Footer from '../Components/Footer'
import Servicios from '../Components/Servicios'
import Portada from '../Components/Portada'
import Trabajos from '../Components/Trabajos'
import Galeria from '../Components/Galeria'

const Inicio = () => {

    return ( 
        <div style={{backgroudColor:"var(--blanco)"}}>
            <Portada tipo={"inicio"} />
            
            <div className="contenido">
                <Trabajos/>
                <Galeria/>
                <Servicios />
            </div>
            
            <Footer/>
        </div>
     );
}
 
export default Inicio;