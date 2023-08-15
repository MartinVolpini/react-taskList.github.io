import React, { useContext, useState } from 'react'

//Styles
import "./loginForm.css"
//Context global
import { AuthContext } from '../../../auth/context/AuthContext'
//Utils..
import addToLocalStorage  from "../../../utils/localStorage.utils"
//Libreria de rutas...
import { useNavigate } from "react-router-dom";
//Services...



export const LoginForm = () => {

    let navigate = useNavigate()

    let { login, logout , isLoggedIn} = useContext( AuthContext )
    
    let [input_1 , setInput_1] = useState("");
    let [input_2 , setInput_2] = useState("");



  let onClick = async (key , obj) => {
    //todo: validar el form data

    //todo: preparar los datos
    
    //todo: hacer un POST al back.end para hacer el login
      //*Preguntas si esta login..
    

    login( obj.name , obj.password )        //Te REGISTRO 

    //todo: Registras el estado en auth y en localStorage 

    addToLocalStorage( key , obj  )         //Te agrego al localstorage

    

    //todo: Redireccionar
      navigate(
        "/", 
        { replace : true }
      )
  }

  return (
    <div className='lg-content'>

           <form action="" className='lg-form' > 
            
            <div className="lg-form--row1">
              <h1 className='lg-title'  >
                Login
              </h1>
            </div>
            <div className="lg-form--row2">
              <input 
                type="text" 
                className="lg-form--row2--item" 
                placeholder='User' 
                required 
                onChange={(e)=>{ setInput_1(e.target.value) }} />
              
              <input 
                type="password" 
                className="lg-form--row2--item " 
                placeholder='Password' 
                required  
                onChange={(e)=>{ setInput_2(e.target.value) }} />
            </div>
        
            <input 
                type="submit" 
                className=" lg-btns " 
                value={"Enviar"} 
                onClick={(e)=>{ 
                    e.preventDefault(); 
                    onClick( "user" , {name:input_1 , password:input_2} )
                    
                }}/>
            <input 
                type='reset' 
                className=" lg-btns  " 
                value={"Reset"} 
                />
        </form>

    </div>
  )
}
