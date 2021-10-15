import '../Components/Styles/Contenido.css'
import "./Dashboard.css"
import {db} from '../firebase'
import { dashboardItems } from '../Utils/data'
import DTarjeta from '../Components/DTarjeta'
import { useState } from 'react'
import DashboardFormulario from '../Components/DashboardFormulario'
import DashboardContacto from '../Components/DashboardContacto'
// import DashboardContacto from '../Components/DashboardContacto'

const colores = [
    "var(--naranja)",
    "var(--turquesa)",
    "var(--morado)",
    "var(--terciario)",
]

const Dashboard = ({desloguearUsuario}) => {
        const nroItems = dashboardItems.length

        const [item,setItem] = useState("")

        return (
          <>
            <div className="dHeader">
              AJC - ELECTRIFICACIÓN Y CONSTRUCCIÓN
              <div className="dHeaderUser">
                <img src="/images/logo.png" alt="Dashboard Logo AJC" />
                <p>
                  <button onClick={desloguearUsuario} className="btnLast">
                    LogOut
                  </button>
                </p>
              </div>
            </div>

            <div className="sectionContainer">
                <div className="flex-row">
                    <p className="fsTitulo sectionTitulo" onClick={()=>setItem("")} style={{borderBottom:"4px solid var(--primario)"}}>DASHBOARD</p>

                    {item ? (<div className="flex-row">
                        {
                          dashboardItems.map(el=><div key={el.id} className="miniItem" style={{backgroundColor:colores[el.id]}}><img src={el.imgSource} alt="AJC Dashboard" /></div>)
                        }</div>): <div></div>}

                </div>

              {  !item ? (
                <div className="flex-row">
                  {dashboardItems.map((el) => (
                    <DTarjeta
                      key={el.id}
                      data={el}
                      color={colores[el.id]}
                      setItem={setItem}
                    />
                  ))}
                </div>
              ) : (
                item.tituloId=="formularios" ? <DashboardFormulario data={item} color={colores[item.id]} setItem={setItem}/> : <DashboardContacto data={item} setItem={setItem} color={colores[item.id]}/>
              )}
            </div>
          </>
        );
}
 
export default Dashboard;