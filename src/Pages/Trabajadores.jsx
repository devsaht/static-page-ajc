import './Trabajadores.css'
import '../Components/Styles/Contenido.css'

import Footer from '../Components/Footer'
import Portada from '../Components/Portada'
import TrabajadoresTarjeta from '../Components/TrabajadoresTarjeta'

const Trabajadores = () => {
    return ( 
        <div className="inicio">
            <Portada tipo={"trabajadores"} />
            
            <div className="contenido">
                <TrabajadoresTarjeta/>
            </div>

            <Footer/>
        </div>
     );
}
 
export default Trabajadores;