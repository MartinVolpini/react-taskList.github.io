// todo: Guardamos al user en el state y consultamos al LocalStorage

//LocalStorage
import addLocalStorage from "../../utils/localStorage.utils"



// Valor inicial...
export let authInitial = {
    user: null,
    isLoggedIn: false
}
//Key del localStorage
export const KEY_AUTH = "userRD";

// Inicializar el state
export function authStart(initialState = authInitial){
    //Verificar si existe el user o la key en el localsStorage
    //Si existe, retorno el estado del localStorage
    //Si no, retorno el estado
    let{ getFromLocalStorage } = addLocalStorage();
    
    console.log("initial reducer", getFromLocalStorage(KEY_AUTH) , typeof getFromLocalStorage(KEY_AUTH))

    return ( getFromLocalStorage(KEY_AUTH) != undefined) 
        ? getFromLocalStorage(KEY_AUTH)
        : initialState ;

}

// Acciones...
export const AUTH_LOGIN = "AUTH_LOGIN";
export const AUTH_LOGOUT = "AUTH_LOGOUT";


// Reducer...
export let authReduce = (state = authInitial , action) => {
    switch(action.type){
        case AUTH_LOGIN:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
            };
        case AUTH_LOGOUT:
            return{
                ...state,
                user: null,
                isLoggedIn: false
            };
        default:
            return state;
    }
} 




