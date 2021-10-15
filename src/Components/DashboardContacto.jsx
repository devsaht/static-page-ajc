import DTarjeta from "./DTarjeta";
import {db} from '../firebase'
import { useState,useEffect } from 'react'
import {toast} from 'react-toastify'

const DashboardContacto = ({data,color,setItem}) =>{

    const [dataContacto, setDataContacto] = useState([])

    const getData = async () =>{
        db.collection("contacto").onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach(doc =>{
                docs.push({...doc.data(), id:doc.id});
            })
            console.log(docs[0])
            setDataContacto(docs[0])
        })
    }

    useEffect(()=>{
        getData()
    },[])

    const handleChange = (e) =>{
        const {name, value} = e.target
        setDataContacto({...dataContacto, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        const actualizarContacto = async (linkObject, currentId) =>{
            await db.collection('contacto').doc(currentId).update(linkObject)
        }

        actualizarContacto(dataContacto,dataContacto.id)
        toast('Actualización de datos de contacto exitosa',{
            "type":"success",
            "autoClose":2000,
            })

    }

    const stylesFormTable = {
        backgroundColor:color,
        padding: "1rem",
        borderRadius: "2rem",
    }

    const stylesForm = {
        backgroundColor:"var(--blanco)",
        padding: "1rem",
        borderRadius: "2rem",
    }

    return(
        <div className="flex-row">
        <DTarjeta data={data} color={color} setItem={setItem} />

        <div className="sectionContainer" style={stylesFormTable}>

            <p className="fsTitulo sectionTitulo">
                INFORMACIÓN DE CONTACTO BRINDADA
            </p>

            <form className="flex-column" onSubmit={handleSubmit} style={stylesForm}>
                <div className="flex-row">
                    <div className="contenidoSinPadding">
                        Nombre de la Empresa
                        <input name="titulo" value={dataContacto.titulo} onChange={handleChange} type="text" required placeholder=""/>
                        Correo de contacto
                        <input name="email" value={dataContacto.email} onChange={handleChange} type="email" required placeholder=""/>
                        Telefono de Contacto 1
                        <input name="telefono1" value={dataContacto.telefono1} onChange={handleChange} type="number" required placeholder=""/>
                        Telefono de Contacto 1
                        <input name="telefono2" value={dataContacto.telefono2} onChange={handleChange} type="number" required placeholder=""/>
                    </div>

                    <div className="contenidoSinPadding">
                        Ubicacion
                        <input name="ubicacion" value={dataContacto.ubicacion} onChange={handleChange} type="text" required placeholder=""/>
                        Mensaje de empresa
                        <input name="footerEmpresa" value={dataContacto.footerEmpresa} onChange={handleChange} type="text" required placeholder=""/>
                        Mensaje del desarrollador
                        <input name="footerDoneBy" value={dataContacto.footerDoneBy} onChange={handleChange} type="text" required placeholder=""/>
                        <div className="flex-row">
                            <button type='submit' className="btnPrimary">Actualizar</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default DashboardContacto;

// const DashboardContacto = ({color}) => {
//     return ( 
        
//      );
// }
 
// export default DashboardContacto;