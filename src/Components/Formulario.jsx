import './Styles/Contenido.css'
import './Styles/Formulario.css'
import {mensajes} from '../Utils/data'
import { useState,useEffect } from 'react'
import {db} from '../firebase'
import {toast} from 'react-toastify'

const initialForm = {
    nombre:"",
    telefono:"",
    correo:"",
    asunto:"",
    mensaje:"",
    leido:false,
    respondido:false,
}


const Formulario = ({isOpen, setIsOpen, closeModal}) => {
    const handleModalContainer = (e) => e.stopPropagation();

    const [form,setForm] = useState(initialForm)

    const addForm = async (linkObject) =>{
        toast('Formulario enviado exitosamente',{
            "type":"success",
            "autoClose":2000,
            })
        await db.collection('formularios').doc().set(linkObject)
        
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        addForm(form)
        setForm(initialForm)
        closeModal()
    }

    const validarTelefono = () =>{

    }

    const validarEmail = () =>{
        
    }

    const validarNombre = () =>{
        
    }

    return ( 
        <article className= {`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
            <div className="modalContainer" onClick={handleModalContainer}>
                <button className="modalClose" onClick={closeModal}>X</button>
                <div className="sectionContainer">

                    <p className="fsTitulo sectionTitulo">
                        CONTÁCTENOS
                    </p>

                    <form className="flex-column" onSubmit={handleSubmit}>
                        <div className="flex-row">

                            <div className="contenido">
                                Nombres/Nombre de la Empresa
                                <input name="nombre" value={form.nombre} onChange={handleChange} type="text" required placeholder=""/>
                                Celular/Telefono
                                <input name="telefono" value={form.telefono} onChange={handleChange} type="number" required placeholder=""/>
                                Correo Electrónico
                                <input name="correo" value={form.correo} onChange={handleChange} type="email" required placeholder=""/>
                            </div>

                            <div className="contenido">
                                Asunto
                                <input name="asunto" value={form.asunto} onChange={handleChange} type="text" required placeholder=""/>
                                Mensaje
                                <textarea name="mensaje" value={form.mensaje} onChange={handleChange} type="text" required placeholder="" rows="5" cols="20"/>
                                <div className="flex-row">
                                    <button type='submit' className="btnPrimary">Enviar</button>
                                    <button type='reset' className="btnSecondary">Borrar</button>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="flex-row" style={{borderTop:"4px solid var(--morado)", padding:"1rem"}}>
                        <img src="/images/logo-email.png" alt="AJC Email de Contacto" className="smallLogo"/>
                        <b>
                            {mensajes.email}
                        </b>
                    </div>
                
                </div>
            </div>
        </article>
     );
}
 
export default Formulario;