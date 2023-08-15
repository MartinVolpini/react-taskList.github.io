
const addToLocalStorage = (key, item) =>{
    //Almacenas datos a la bbdd del browser
    localStorage.setItem( key, JSON.stringify(item) );
    
    const getFromLocalStorage = (key) => { return JSON.parse(localStorage.getItem( key )) }; 

    const removeFromLocalStorage = ( key ) => { return localStorage.removeItem( key ) };

    const removeItemFromLocalStorage = ( key , item ) =>{
        //SUPONIENDO QUE TENEMOS UN OBJ CON VARIOS ITEMS ESTA FUNC REMUEVE ESE ITEM

        let items = getFromLocalStorage( key );
        let filterdItems = items.filter((i)=> i !== item );
        addToLocalStorage( key, filterdItems )
    };

    const cleanLocalStorage = () => { return localStorage.clear() };

    return{
        getFromLocalStorage,
        removeFromLocalStorage,
        removeItemFromLocalStorage,
        cleanLocalStorage
    }
}

export default addToLocalStorage ;