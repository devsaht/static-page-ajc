import './Styles/Contenido.css'
import '../Pages/Trabajadores.css'

const TrabajadoresTarjeta = () => {
    return ( 
        <>
            <div className="section">
                <div className="sectionContainer">
                    <p className="fsTitulo sectionTitulo">CONTIGO</p>

                    <div style={{padding:"0rem 4rem"}} >
                        <div className="sAsGridDobleColumn">
                            <div className="gridCuadroDoble" style={{backgroundColor: "var(--primario)", color:"var(--blanco)"}}>
                                En JJC mantenemos un buen ambiente de trabajo para nuestros colaboradores, 
                                y por esta razón gestionamos el clima laboral a través del Programa Contigo
                            </div>
                            {/* <img className={"imgGrid"} src="/images/fondo.jpg" alt="AJC contigo"/> */}
                            <div className="imgGrid"></div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="sectionContainer">
                    <p className="fsTitulo sectionTitulo">SEGURIDAD Y SALUD OCUPACIONAL</p>

                    <div style={{padding:"0rem 4rem"}} >
                        <div className="sAsGridDobleColumn">
                            {/* <img className={"imgGrid"} src="/images/fondo.jpg" alt="AJC contigo"/> */}
                            <div className="imgGrid"></div>

                            <div className="gridCuadroDoble" style={{backgroundColor: "var(--turquesa)", color:"var(--blanco)"}}>
                                Desde el año 2005 contamos con un Sistema de Gestión en Seguridad y Salud Ocupacional. 
                                Este sistema forma parte de nuestro Sistema Integrado de Gestión 
                                y es aplicable a todos los trabajos desarrollados por JJC y sus subcontratistas.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="sectionContainer">
                    <p className="fsTitulo sectionTitulo">FORMACIÓN JUNIOR</p>

                    <div style={{padding:"0rem 4rem"}} >
                        <div className="sAsGridDobleColumn">
                            <div className="gridCuadroDoble" style={{backgroundColor: "var(--naranja)", color:"var(--blanco)"}}>
                                Diseñamos e implementamos este programa con el fin de ofrecer formación a jóvenes 
                                profesionales con alto potencial, quienes reciben un entrenamiento teórico y práctico durante un año, 
                                que les permite fortalecer sus conocimientos con la experiencia del negocio.
                            </div>
                            {/* <img className={"imgGrid"} src="/images/fondo.jpg" alt="AJC contigo"/> */}
                            <div className="imgGrid"></div>

                        </div>
                    </div>
                </div>
            </div>

        </>
     );
}
 
export default TrabajadoresTarjeta;