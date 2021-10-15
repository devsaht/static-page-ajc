import { useEffect, useState } from 'react';
import '../Components/Styles/Contenido.css'
import '../Components/Styles/Formulario.css'
import { auth } from '../firebase'

import Login from './Login'
import Dashboard from './Dashboard'
import {toast} from 'react-toastify'

const Autenticacion = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [user,setUser] = useState("");

    const [emailError,setEmailError] = useState("");
    const [passwordError,setPasswordError] = useState("");

    const limpiarInputs = () =>{
        setEmail("");
        setPassword("");
    }

    const limpiarErrores = () =>{
        setEmailError("");
        setPasswordError("");
    }

    const registrarUsuario = (e) =>{
        limpiarErrores()
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password)
            .then((res)=> alert('Usuario Registrado'))
            .catch((err) => {
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message); 
                        toast(err.message,{
                            "type":"warning",
                            "autoClose":2000,
                        });break;
                    case "auth/weak-password":
                        setPasswordError(err.message); 
                        toast(err.message,{
                            "type":"warning",
                            "autoClose":2000,
                        });break;
                }
            })
    } 

    const loguearUsuario = (e) =>{
        limpiarErrores()
        e.preventDefault()
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential)
                console.log(userCredential.user)
                setUser(userCredential.user)
            })
            .catch((err) => {
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message); 
                        toast(err.message,{
                            "type":"warning",
                            "autoClose":2000,
                        });break;
                    case "auth/wrong-password":
                        setPasswordError(err.message); 
                        toast(err.message,{
                            "type":"warning",
                            "autoClose":2000,
                        });break;
                }
            })
    }

    const desloguearUsuario = () =>{
        toast('Logout exitoso',{
            "type":"info",
            "autoClose":2000,
        })
        auth.signOut()
    }

    const authListener = () =>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                toast('Login exitoso',{
                    "type":"success",
                    "autoClose":2000,
                })
                limpiarInputs()
                setUser(user)
            }else{
                setUser("")
            }
        })
    }

    useEffect(()=>{
        authListener()
    },[])

    return (
      <div>
        {user ? (
          <Dashboard desloguearUsuario={desloguearUsuario} />
        ) : (
          <Login
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            registrarUsuario={registrarUsuario}
            loguearUsuario={loguearUsuario}
            emailError={emailError}
            passwordError={passwordError}
          />
        )}
      </div>
    );
}
 
export default Autenticacion;