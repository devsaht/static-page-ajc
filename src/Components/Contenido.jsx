
import Servicios from '../Components/Servicios'
import Historia from '../Components/Historia'

const Contenido = ({id}) => {

    return (
        <div style={{color: "var(--primario)"}}>
            {id === "inicio" ? 
               ( <Servicios/> ): ( id==="nosotros" ?
                    (<Historia/> ) : (<div>gaaaaaa</div>)
                )}
        </div>
     );
}
 
export default Contenido;