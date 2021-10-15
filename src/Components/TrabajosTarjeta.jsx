import './Styles/Contenido.css'
// import '../Pages/Clientes.css'

const TrabajosTarjeta = ({data, setFocus, color}) => {

    const divStyles = {
        backgroundImage:`url(${data.imgSource})`,
        backgroundSize: "cover",
        width: "200px",
        height: "200px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
    }

    return ( 
    <div className="slide" onClick={()=>setFocus(data.id)} style={{boxShadow: `3px 3px 3px 0px ${color}`}}>
        <div className="slideImagen" style={divStyles}></div>
        <div className="slideDescripcion">
            {/* {data.tipo ?? ( */}
                <div className="slideItem">
                    <img src="/images/logo-tipo.png" alt="AJC tipo de trabajo"/>
                    <div>{data.tipo}</div>
                </div>
            {/* )} */}
        </div>
    </div>
     );
}
 
export default TrabajosTarjeta;