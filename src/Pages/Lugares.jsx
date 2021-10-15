import './Lugares.css'
import Footer from '../Components/Footer'
import Servicios from '../Components/Servicios'
import Portada from '../Components/Portada'

const Lugares = () => {
    return ( 
        <div className="inicio">
            <Portada tipo={"lugares"} />
            
            <Servicios />
            
            <Footer/>
        </div>
     );
}
 
export default Lugares;