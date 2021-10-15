import './Styles/Portada.css'
import Header from '../Components/Header'
import {imagenFondo} from '../Utils/data'

const Portada = ({tipo}) => {

    const descripcionStyles = {
        position: "absolute",
        bottom: "2rem",
        left: "2rem"
    }
    
    return ( 
        <div className={"portada"} style={{backgroundImage:`url(${imagenFondo[tipo].fondo})`}}>
            <Header/>
            {/* <p style={descripcionStyles} >{imagenFondo[tipo]['descripcion']}</p> */}
            <p style={descripcionStyles} >Esta es la descripcion de la imagen</p>
        </div>
     );
}
 
export default Portada;