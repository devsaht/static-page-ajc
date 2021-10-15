import '../Components/Styles/Contenido.css'
import '../Components/Styles/Formulario.css'
import { Link } from 'react-router-dom';

const Login = (props) => {

    const {
        email,
        password,
        setEmail,
        setPassword,
        registrarUsuario,
        loguearUsuario,
        emailError,
        passwordError,
    } = props;

    const stylesContainer = {
        padding: "0rem 4rem 2rem 4rem",
        borderRadius: "1rem",
        border: "4px solid var(--primario)",
        backgroundColor:"var(--blanco)",
        boxShadow:"4px 4px 6px var(--primario)"
    }
    return (

        <div className="flex sectionContainer" style={{backgroundColor:"rgba(0, 47, 120,0.5)",height:"100vh"}}>
            <div className="flex-row">
                <p className="fsTitulo sectionTitulo">
                    ¿ERES EL ADMINISTRADOR?
                </p>
                <img src="/images/logo.png" alt="Dashboard Logo AJC" />
            </div>
            
            <div style={stylesContainer}>
                <p className="fsTitulo sectionTitulo">
                    LogIn
                </p>

                <form action="" >
                    <div className="slideItem">
                        <img className="smallLogo" src="/images/logo-email.png" alt="AJC Inicio de sesion" />
                        <input type="text" placeholder="usuario" value={email} onChange={((e)=>setEmail(e.target.value))}/>
                    </div>
                    {/* <p>{emailError}</p> */}
                    <div className="slideItem">
                        <img className="smallLogo" src="/images/logo-password.png" alt="AJC Inicio de sesion" />
                        <input type="password" placeholder="contraseña" value={password} onChange={((e)=>setPassword(e.target.value))}/>
                    </div>
                    {/* <p>{passwordError}</p> */}

                    <Link to="Dashboard">
                        <button className="btnPrimary" onClick={loguearUsuario}>Login</button>
                    </Link>

                    <Link to="/">
                        <img className="smallLogo" src="/images/logo-return.png" alt="AJC Home" />
                    </Link>
                </form>

            </div>
        </div>  
     );
}
 
export default Login;

            {/* <div style={stylesContainer}>
                <p className="fsTitulo sectionTitulo">
                    NewAccount
                </p>

                <form onSubmit={registrarUsuario} >
                    <input type="text" placeholder="usuario" onChange={((e)=>setEmail(e.target.value))}/>
                    <input type="password" placeholder="contraseña" onChange={((e)=>setPassword(e.target.value))}/>

                    <input type="submit"  value="Registrar"/>
                </form>

            </div> */}
