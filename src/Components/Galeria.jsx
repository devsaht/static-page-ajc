import "./Styles/Contenido.css";
import {galeria} from '../Utils/data'

const GaleriaItem = ({data, isDoble}) =>{
    // {`modal ${isOpen && "isOpen"}`}
    return (
        <div className={`galeriaItem ${isDoble && "doble"}`}>
            <img src={data.imgSource} alt="AJC Galeria" />
            <p>{data.titulo}</p>
        </div>
    );
}

const Galeria = () => {

    const numeros = [0,3,6]
    
    return (
        <div className="" style={{backgroundColor:"var(--primario)", textAlign:"center"}}>
            <p className="fsTitulo sectionTitulo"  style={{color:"var(--blanco)"}}>GALERIA</p>
            
            <div className="galeria">
                {
                    galeria.map( el => {
                        return <GaleriaItem key={el.id} data={el} isDoble={el.id==1}/>
                    } 
                    )
                }
                {/* <img className="doble" src="/images/galeria/tareas-instalacion-1.jpg" alt=""/>
                <img  src="/images/galeria/tareas-instalacion-2.jpg" alt=""/>
                <img src="/images/galeria/tareas-instalacion-3.jpg" alt=""/>
                <img className="doble" src="/images/galeria/tareas-instalacion-3.jpg" alt=""/>
                <img  src="/images/galeria/tareas-instalacion-1.jpg" alt=""/>
                <img  src="/images/galeria/tareas-instalacion-2.jpg" alt=""/>
                <img className="doble" src="/images/galeria/tareas-instalacion-2.jpg" alt=""/>
                <img  src="/images/galeria/tareas-instalacion-1.jpg" alt=""/>
                <img  src="/images/galeria/tareas-instalacion-2.jpg" alt=""/>
                <img  src="/images/galeria/tareas-instalacion-2.jpg" alt=""/>
                <img  src="/images/galeria/tareas-instalacion-3.jpg" alt=""/> */}
            </div>
        </div>
      );
}
 
export default Galeria;
