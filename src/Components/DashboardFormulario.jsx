import { useEffect, useState } from "react"
import DTarjeta from "./DTarjeta"
import Loader from "./Loader"
import {db} from '../firebase'
import FormularioDashboard from "./FormularioDashboard"

const CabeceraTabla = () =>{
    return (
        <thead>
            <tr>
                <th>Estado</th>
                <th>Cliente/Empresa</th>
                <th>Correo Electrónico</th>
                <th>Asunto</th>
                <th>Opciones</th>
            </tr>
        </thead>

    );
}

const DashboardFormulario = ({data,color,setItem}) => {
    
    const [formularios, setFormularios] = useState([])
    const [bandera, setBandera] = useState(false)
    const [formulariosNoLeidos, setFormulariosNoLeidos] = useState([])

    const [valueTabla, setValueTabla] = useState("todos")
    const [valueForm, setValueForm] = useState({})


    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const getForms = async () =>{
        db.collection(data.tituloId).onSnapshot((querySnapshot) => {
            const docs = []
            const docsNoLeidos = []
            querySnapshot.forEach(doc =>{
                docs.push({...doc.data(), id:doc.id});

                !doc.data().leido ? docsNoLeidos.push({...doc.data(), id:doc.id}) : console.log("es verdadero")
            })
            setFormularios(docs)
            setFormulariosNoLeidos(docsNoLeidos)
            setBandera(true)
        })
    }

    useEffect(()=>{
        getForms()
    },[])

    const verForm = (form) =>{
        form.leido = true;
        setValueForm(form)
        const actualizarFormulario = async (linkObject, currentId) =>{
            await db.collection('formularios').doc(currentId).update(linkObject)
        }

        actualizarFormulario(form,form.id)
        openModal()
    }

    const stylesFormTable = {
        backgroundColor:color,
        padding: "2rem",
        borderRadius: "2rem",
    }
    return (
      <div className="flex-row">
        <DTarjeta data={data} color={color} setItem={setItem} />

        <div className="flex-column" style={stylesFormTable}>
          {bandera ? (
            <>
              <form action="">
                <select
                  name="tipoFormulario"
                  id="tipoFormulario"
                  onChange={(e) => setValueTabla(e.target.value)}
                >
                  <option value="todos">Todos los formularios</option>
                  <option value="noLeidos">Formularios no leídos</option>
                </select>
              </form>

              <table>

                {valueTabla == "todos" ? (
                    <>
                    <CabeceraTabla/>
                    {formularios.map((form) => {
                        return (
                        <tr key={form.id}>
                            <td>{form.leido ? "Leído" : "No Leído"}</td>
                            <td>{form.nombre}</td>
                            <td>{form.correo}</td>
                            <td>{form.asunto}</td>
                            <td>
                            <button
                                className="btnPrimary"
                                onClick={() => verForm(form)}
                            >
                                Ver
                            </button>
                            </td>
                        </tr>
                        );
                    })}
                    </>
                ) : (formulariosNoLeidos.length == 0 ? (
                  <div className="flex sectionTitulo">
                    No hay formularios disponibles
                  </div>
                ) : (
                    <>
                    <CabeceraTabla/>
                    {formulariosNoLeidos.map((form) => {
                    return (
                      <tr key={form.id}>
                        <td>{form.leido ? "Leído" : "No Leído"}</td>
                        <td>{form.correo}</td>
                        <td>{form.asunto}</td>
                        <td>
                          <button
                            className="btnPrimary"
                            onClick={() => verForm(form)}
                          >
                            Ver
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                    </> 
                ) )}

                {/* { isOpen ?? <FormularioDashboard isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} myForm={valueForm}/>} */}
                <FormularioDashboard
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  closeModal={closeModal}
                  myForm={valueForm}
                />
              </table>

              {/* <div className="flex-row">
                <div>Numero total de formularios:</div>
                <div>{formularios.length}</div>
              </div>
              <div className="flex-row">
                <div>Numero de formularios no leídos:</div>
                <div>{formulariosNoLeidos.length}</div>
              </div> */}
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
}
 
export default DashboardFormulario;