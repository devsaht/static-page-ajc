import './Modal.css'

const Modal = ({isOpen, setIsOpen, closeModal}) => {

    // evitar q cuando de click no se cierre todo, or something like that
    const handleModalContainer = (e) => e.stopPropagation();

    return (
        <article className= {`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
            <div className="modalContainer" onClick={handleModalContainer} style={{backgroundColor:"var(--primario)"}}>
                <button className="modalClose" onClick={closeModal}>X</button>
                    <div className="modalRealContainer">
                    <form action="" style={{marginTop:"2rem"}}>
                        {/* <input type="text" value="Nombre"/>
                        <input type="text" value="Telefono"/>
                        <input type="text" value="Correo"/>
                        <input type="text" value="Asunto"/>
                        <input type="text" value="Mensaje"/> */}

                        ELIJA SU DISTRITO
                        <select name="distrito" id=""  style={{marginTop:"1rem",marginBottom:"1rem"}}>
                            <option value="San Juan de Lurigancho">SJL</option>
                            <option value="Santa Anita">Santa Anita</option>
                            <option value="Chorrillos">Chorrillos</option>
                        </select>

                        TIPO DE TRABAJO
                        <select name="distrito" id=""  style={{marginTop:"1rem",marginBottom:"1rem"}}>
                            <option value="San Juan de Lurigancho">Electrificacion</option>
                            <option value="Santa Anita">Mantenimiento de tuberías</option>
                            <option value="Chorrillos">Chorrillos</option>
                        </select>
                        <button style={{backgroundColor:"var(--naranja)"}} >Cotizar</button>
                    </form>
                    </div>
            </div>
        </article>
     );
}
 
export default Modal;