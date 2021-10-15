import '../Components/Styles/Contenido.css'
import './Styles/Valores.css'
import {valores} from '../Utils/data'
import { useState } from 'react'
import TituloConBotones from './TituloConBotones'

const Valores = () => {

    const [valor, setValor] = useState(valores[0])

    const onClick = (id) =>{
        setValor(valores[id])
    }

    return (
        <div className="flex-column">

          <TituloConBotones data={valores} titulo={"valores"} valor={valor} onClick={onClick}/>

          <div className="sectionContainerGrid paddingLateral8">
            <img className="imgCompleto" src={valor.imgSource} alt="AJC Valores" />
            
            <div className="flex-column valoresContenido">
                <div className="contenido fsSubTitulo">{valor.titulo}</div>
                <div className="sectionTexto">{valor.texto}</div>
            </div>
          </div>
        </div>
    );
}
 
export default Valores;