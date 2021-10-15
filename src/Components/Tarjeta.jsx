import { Link } from "react-router-dom";


const Tarjeta = ({id,imgSource, titulo, texto, isIndicator}) => {
    return ( 
        <div className="flex-column servicio">
            <img className="servicioImg" src={imgSource} alt={`AJC Servicio de ${titulo}`}/>
            <div className="fsSubTitulo titulo">{titulo}</div>
            <div className="texto">{texto}</div>

            {!isIndicator ? (
            <Link to="/Clientes/0">
                <img className="logoPlus" src="/images/more-big.png" alt="Logo ir a clientes" />
            </Link>): <div></div>}
            
        </div>

     );
}
 
export default Tarjeta;