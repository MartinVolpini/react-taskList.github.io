import React, { useEffect, useState } from 'react'

//LocalStorage
import addLocalStorage from "../../utils/localStorage.utils"
//DB...
import { talk_bbdd } from '../services/bbdd.service';

// console.log("uno" , talk_bbdd().add_bbdd({name:"tito", password:"asdas"}) );

// console.log("dos" ,  talk_bbdd().see_bbdd() );

// console.log("tres" ,  talk_bbdd().delete_bbdd({name:"tito", password:"asdas"}) );

// console.log("cuatro" ,  talk_bbdd().see_bbdd() );


                            /* With Hooks */

export function useBD  ( bbdd ){
// Guardo al user en LocalStorage y en una DB ficticia. 
//  Y estas funcs interactuan con estos elementos
    
    let{ getFromLocalStorage } = addLocalStorage();

    let [user , setUser] = useState( "Hola logueate!!")
    useEffect(()=>{
        getFromLocalStorage("user") != undefined && setUser( getFromLocalStorage("user").name )
     
    },[]);

    function isLoggedIn( name , password ){
        let _res = false;
        bbdd.map((element)=>{
            if ( element.name.toUpperCase() == name.toUpperCase() && element.password.toUpperCase() == password.toUpperCase() ) 
                _res = true ;
            
        })
        return _res;
    };

    function login ( name, password ){

        isLoggedIn( name, password ) == false 
            ? talk_bbdd().add_bbdd( { "name" : name , "password" : password} )
            :   alert("You are already logged in")

        bbdd.map((i)=>{ console.log(i) })
        setUser(name); 

        return isLoggedIn( name, password );
    }
    function logout ( name, password){
        let _newDB 
        if(  isLoggedIn( bbdd ,name, password )) {
            _newDB = bbdd.filter((element)=>{
                return element.name.toUpperCase() != name.toUpperCase() && element.password.toUpperCase() != password.toUpperCase() ; 
                
            })
        } 
         bbdd =  [..._newDB]
    

        return !isLoggedIn( name, password );
    }

    return{
        isLoggedIn,
        login,
        logout,
        user
    }

}

