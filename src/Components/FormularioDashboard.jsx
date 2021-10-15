import './Styles/Contenido.css'
import './Styles/Formulario.css'
import {mensajes} from '../Utils/data'
import { useState,useEffect } from 'react'
import {db} from '../firebase'

// const initialForm = {
//     nombre:"",
//     telefono:"",
//     correo:"",
//     asunto:"",
//     mensaje:"",
//     leido:false,
//     respondido:false,
// }

const FormularioDashboard = ({myForm,isOpen, setIsOpen, closeModal}) => {
    const handleModalContainer = (e) => e.stopPropagation();

    const [form,setForm] = useState(myForm)

    const addForm = async (linkObject) =>{
        await db.collection('formularios').doc().set(linkObject)
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addForm(form)
        setForm(myForm)
    }

    return ( 
        <article className= {`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
            <div className="modalContainer" onClick={handleModalContainer}>
                <button className="modalClose" onClick={closeModal}>X</button>
                <div className="sectionContainer">

                <p className="fsTitulo sectionTitulo">
                    LECTURA DE FORMULARIO
                </p>

                    <form className="flex-column" onSubmit={handleSubmit}>
                        <div className="flex-row">

                            <div className="contenido">
                                Nombres/Nombre de la Empresa<input name="nombre" disabled value={myForm.nombre} onChange={handleChange} type="text" required placeholder="Nombre"/>
                                Celular/Telefono<input name="telefono" disabled value={myForm.telefono} onChange={handleChange} type="text" required placeholder="Telefono"/>
                                Correo Electronico<input name="correo" disabled value={myForm.correo} onChange={handleChange} type="text" required placeholder="Correo"/>
                            </div>

                            <div className="contenido">
                                Asunto<input name="asunto" disabled value={myForm.asunto} onChange={handleChange} type="text" required placeholder="Asunto"/>
                                Mensaje<textarea name="mensaje" disabled value={myForm.mensaje} onChange={handleChange} type="text" required placeholder="Mensaje" rows="5" cols="20"/>
                                {/* <div className="flex-row">
                                    <button type='submit' className="btnPrimary">Responder</button>
                                </div> */}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </article>
     );
}
 
export default FormularioDashboard;