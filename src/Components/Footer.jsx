import './Styles/Footer.css'
import {mensajes,redes} from '../Utils/data'
import {db} from '../firebase'
import { useState,useEffect } from 'react'
import Loader from './Loader'

const initialForm = {
    email:"",
    footerDoneBy:"",
    footerEmpresa:"",
    id:"",
    telefono1:"",
    telefono2:"",
    titulo:"",
    ubicacion:"",
}

const Footer = () => {

    const [data, setData] = useState(initialForm)

    const getData = async () =>{
        db.collection("contacto").onSnapshot((querySnapshot) => {
            const docs = []
            querySnapshot.forEach(doc =>{
                docs.push({...doc.data(), id:doc.id});
            })
            console.log(docs[0])
            setData(docs[0])
        })
    }

    useEffect(()=>{
        getData()
    },[])

    return (
        <footer>
                <>
                <div className="flex-row-around">
                
                    <div >
                        <div className="titulo">
                            {data.titulo}
                        </div>
                        <div className="flex-column-start">
                            <div className="flex-row">
                                <img src="/images/logo-lugar.png" alt="AJC Ubicacion" className={"smallLogo"}/>
                                <div>{data.ubicacion}</div>
                            </div>
                            <div className="flex-row">
                                <img src="/images/logo-telefono.png" alt="AJC Telefono" className={"smallLogo"}/>
                                <div>{data.telefono1}</div>
                            </div>
                            <div className="flex-row">
                                <img src="/images/logo-telefono.png" alt="AJC Telefono" className={"smallLogo"}/>
                                <div>{data.telefono2}</div>
                            </div>
                            <div className="flex-row">
                                <img src="/images/logo-email.png" alt="AJC Email" className={"smallLogo"}/>
                                <div>{data.email}</div>
                            </div>
                        </div>
                    </div>

                    <div className="redes">
                        <div className="titulo">
                            Síguenos:
                        </div>
                        <div className="flex-row">
                            {redes.map( (red) =><img key={red.id} className="redImg" src={red.imgSource} alt="AJC redes sociales" />)}
                        </div>
                    </div>
                </div>
            
                <div className="flex-row-around">
                    <div className="footerBy">{data.footerEmpresa}</div>
                    <div>{data.footerDoneBy}</div>
                </div>
                </>        


        </footer>
     );
}

export default Footer;