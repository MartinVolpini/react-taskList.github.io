import React from 'react'
import {  NavBar } from '../components/NavBar'

/*ES COMO SU FUERA UN CONTEINER */

export const GeneralLayouts = ({ children }) => {
  return (
    <div>
        <NavBar/>

        {children}
    </div>

  )
}
