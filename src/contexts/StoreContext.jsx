import { children } from "react";
import { createContext ,useState} from "react";

//* 1. CREAMOS EL CONTEXTO, listo! 
//Este va a ser importado ejem en app si es global o en modules
export const StoreContext = createContext();

//* 2. LLAMAMOS AL CONTEXTO CREADO ARRIBA Y HACEMOS UN COTAINER Y LE PASAMOS PROPS 
export const StoreProvider = ({children}) => {
    
    //* 3. CREAMOS LOS PROPS QUE VAN A SER PASADOS
    let [inCart, setInCart] = useState([]); //?VA A SER PASADO COMO PROP A LA INVOCACION DEL CONTEXTO
    
    function addToCart(product){ //?PARA UN MEJOR MANEJO DE LO QUE SE AGREGA EN EL SET DE UN STATE LO METEMOS A UNA FUNCION Y PASAMOS ESTA COMO PROP
        setInCart([...inCart, product])
    }
  return (
    <StoreContext.Provider 
     value={{
        inCart,
        addToCart
     }}
    >
        { children }
    </StoreContext.Provider>
    
  )
}
