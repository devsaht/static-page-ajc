import './Styles/NavGaleria.css'
import {navImagenes} from '../Utils/data'
import TarjetaImagen from './TarjetaImagen';

const NavGaleria = () => {
    const styleTitle={
        textAlign:"center",
        padding: "1rem",
        marginBottom:"2rem",
        color: "var(--blanco)",
    }

    return ( 
        <nav>
            <div style={styleTitle}>ALGUNOS DE NUESTRO TRABAJOS</div>
            {navImagenes.map(el => <TarjetaImagen data={el} key={el.id}/>)}
        </nav>
     );
}
 
export default NavGaleria;