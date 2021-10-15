import { Link } from 'react-router-dom'
import './Styles/Contenido.css'
// import '../Pages/Clientes.css'

const TrabajosTarjetaFocus = ({data, setFocus, color}) => {

    const parametro = `/Clientes/${data.id}`

    const divStyles = {
        backgroundImage:`url(${data.imgSource})`,
        backgroundSize: "cover",
        width: "220px",
        height: "220px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
    }

    return ( 
        <div className="focusContainer">

            <div className="slide"  onClick={()=>setFocus(data.id)} style={{boxShadow: `3px 3px 3px 0px ${color}`}}>
                <div className="slideImagen" style={divStyles}></div>
                <div className="slideDescripcion">
                    <div className="sliteItemTitulo">
                        {data.titulo}
                    </div>
                        <div className="slideItem">
                            <img src="/images/logo-lugar.png" alt="AJC lugar de trabajo"/>
                            <div>{data.lugar}</div>
                        </div>
                        <div className="slideItem">
                            <img src="/images/logo-fecha.png" alt="AJC fecha de trabajo"/>
                            <div>{data.fecha}</div>
                        </div>
                        <div className="slideItem">
                            <img src="/images/logo-cliente.png" alt="AJC cliente de trabajo"/>
                            <div>{data.cliente}</div>
                        </div>
                </div>

                <Link to={parametro}>
                        <img className="plusBoton" src="/images/more-big.png" alt="next slide" />
                </Link>
            </div>
        </div>
     );
}
 
export default TrabajosTarjetaFocus;