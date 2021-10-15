import '../Components/Styles/Contenido.css'

const TituloConBotones = ({titulo, data,valor,onClick}) => {
    
    return ( 
        <div className="sectionContainerGrid paddingLateral4 ">
            <p className="fsTitulo sectionTitulo flex" style={{textAlign:"center", borderBottom:"4px solid var(--primario)"}}>
                {titulo}
            </p>
            <div className="flex-row valoresBotones">
            {data.map((el) => 
                el.id == valor.id ? (
                <button
                    key={el.id}
                    onClick={() => onClick(el.id)}
                    style={{
                    backgroundColor: "var(--naranja)",
                    opacity: "0.8",
                    }}
                >
                    <img src={el.imgLogo} alt={`AJC Valores en ${el.titulo}`} />
                </button>
                ) : (
                <button key={el.id} onClick={() => onClick(el.id)}>
                    <img src={el.imgLogo} alt={`AJC Valores en ${el.titulo}`} />
                </button>
                )
            )}
            </div>
        </div>
     );
}
 
export default TituloConBotones;