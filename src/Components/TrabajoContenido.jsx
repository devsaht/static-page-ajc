import { useState } from 'react';
import './Styles/Contenido.css'
import TituloConBotones from './TituloConBotones';

const TrabajoContenido = ({data,titulo}) => {

    const nroImagenes = data.imagenes.length
    const valores = data.logos
    const [valor, setValor] = useState(valores[0])

    const onClick = (id) =>{
        setValor(valores[id])
    }

    return (
            <div className="flex-column">
                
                <TituloConBotones data={valores} titulo={titulo} valor={valor  } onClick={onClick}/>

                <div className="flex-row">
                    <div className="trabajoContenedor datos">
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
                    </div>

                    <div className="trabajoContenedor imagenes">
                        <div style={{overflow:"hidden", borderRadius:"1rem"}}>
                            <img className="imagen" src={data.imagenes[valor.id].imgSource} alt={`AJC Trabajos en ${data.titulo}`} />
                        </div>
                    </div>
                </div>
            </div>
     );
}
 
export default TrabajoContenido;