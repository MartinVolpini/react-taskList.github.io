import React, { useContext } from 'react'
/*Este componenete deside si uno puede entrar a la ruta o no*/
/* Si uno esta loguiado retorno el children y si no 
retorno el componente Navigate con la propiedad to="/rutas" 
de la libreria de react-router-dom */

import { Navigate } from "react-router-dom"

//Contexto de autenticacion q esta envolviendo las rutas en el main
import { AuthContext } from '../auth/context/AuthContext';

//LocalStorage...
import  addToLocalStorage  from "../utils/localStorage.utils"



export const ProtectedRoute = ( { children } ) => {

    let { isLoggedIn } = useContext( AuthContext );
    
    // Esto seria la validacion con hook

      let ls = addToLocalStorage().getFromLocalStorage("user")
      
      if(ls != undefined ){
        if( 
          isLoggedIn(ls.name , ls.password) ) {
            return children;
        }
      }  

    //Esto seria la validacion con reducer

    // console.log("Protector de rutas ", isLoggedIn , typeof isLoggedIn )

    // if( isLoggedIn ){
    //     return children ;
    // } 
    

  return (
    <Navigate 
        to="/login"   //Esta propiedad indica a donde queres ir en el caso que no este loguiado
        replace       //Esta propiedad pisa la ruta para q en el caso q no este logiado no pueda volver para atras 
        //state={{}}    //Esta propiedad le podemos mandar a la pagina a la q vamos info
    />
  )
}
