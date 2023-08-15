import React from 'react'


import { useNavigate } from "react-router-dom"

export const NavBar = () => {

    let navigate = useNavigate()

    //Events
   


  return (
    <header id ="inicio" className="header">
    <div className="hd--content">

        <nav className="nav">

        <ul className="menu">

          
            {/* <li className="nav-menu-items">
                <a className="nav-link" onClick={()=>{   navigate(  "/", { replace : false }  ) } }>
                    task
                </a>
            </li> */}

        </ul>

        </nav> 
    
        <h1 className="hd--titulo " >
            React
        </h1>

    

        <button className="nav-toggle" aria-label="Abrir menu">
            
            < div className="icon-burger" ></div>
            < div className="icon-burger" ></div>
            < div className="icon-burger" ></div>
            < div className="icon-burger" ></div>
            { /* ESTE ES EL ICONO DE AMBURGUESA */}
            
        </button>

</div>
</header>
  )
}
