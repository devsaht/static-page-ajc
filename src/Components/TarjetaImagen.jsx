import './Styles/NavGaleria.css'

const TarjetaImagen = ({data}) => {

    const imgStyles = {
        backgroundImage:`url(${data.imgSource})`,
        backgroundSize: "cover",
        width: "220px",
        height: "220px",
        // height:"100px",
        // width:"100px",
        // height: "100px",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        borderRadius: "1rem",
        // position: "relative",
    }

    return (
        <div className="tarjetaImagen">
            <div style={imgStyles}>
            </div>
            <div className="hidden">
                {data.descripcion}
            </div>
        </div>
     );
}

export default TarjetaImagen;