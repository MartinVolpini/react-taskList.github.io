import React, { createContext, useReducer} from 'react'
//En este componente tenes q guardar si estas logiado o no


//La base de datos
import {bbdd} from "../services/bbdd.service"
//LocalStorage...
import  addToLocalStorage  from "../../utils/localStorage.utils"
//Hooks...
import { useBD } from "../hook/useBD"
//Reducer
// import { KEY_AUTH , AUTH_LOGIN, AUTH_LOGOUT, authInitial, authReduce , authStart} from "../reducers/authReducer"


export const AuthContext = createContext();


export const AuthProvider = ( {children} ) => {

  let { isLoggedIn , login , logout , user} = useBD(bbdd);
    
  // let [state , dispatch] = useReducer( 
  //   authReduce , authInitial , authStart
  //   )
  
  // console.log("authContext state:" , state)

  // function login( name , password ){
    
  //   dispatch({
  //       type: AUTH_LOGIN,
  //       payload: {"name": name , "password": password}
  //   })

  //   localStorage.setItem(
  //     KEY_AUTH, 
  //     JSON.stringify({
  //       user: {"name": name , "password": password}, 
  //       isLoggedIn: true
  //     })
  //   )
  // }

  // function logout(){
  //   dispatch({
  //     type: AUTH_LOGOUT,
  //   })

  //   localStorage.removeItem(KEY_AUTH)

  // }

  return (
    <AuthContext.Provider 
        value={{
            isLoggedIn ,
            login,
            logout,
            user
        }}
    >
        { children }
    </AuthContext.Provider>
  )
}
