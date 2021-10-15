import '../Components/Styles/Contenido.css'

import Historia from '../Components/Historia';
import Footer from '../Components/Footer';
import Portada from '../Components/Portada';
import Tarjeta from '../Components/Tarjeta';
import MisionVision from '../Components/MisionVision';
import {indicadores} from "../Utils/data.js"
import Valores from '../Components/Valores';

const Nosotros = () => {
    return ( 
        <div style={{backgroudColor:"var(--blanco)"}}>
            <Portada tipo={"nosotros"}/>
            
            <div className="contenido">
                <Historia />

                <div className="separacion">
                    <div className="sAsTarjetas">
                        {indicadores.map(indicador=>{
                            return <Tarjeta key={indicador.id} id={indicador.id} titulo={indicador.titulo} texto={indicador.texto} imgSource={indicador.imgSource} isIndicator={true}/>
                        })}
                    </div>
                </div>

                <div className="separacion">
                    <MisionVision/>
                </div>

                <div className="separacion">
                    <Valores/>
                </div>
            </div>

            <Footer/>
        </div>
     );
}
 
export default Nosotros;