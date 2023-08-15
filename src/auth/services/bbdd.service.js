export let bbdd = [
    {name:"Pepe", password:"123" },
    {name:"Papo", password:"123" },
    {name:"Pipo", password:"123" },
    ]


export let talk_bbdd = () => {
    
   

    function see_bbdd (){  return bbdd.forEach((x)=>{ console.log(x) }) }
    
    function add_bbdd ( obj  ){
        bbdd.push( obj )
        // return bbdd.map((i)=>{ console.log(i) })
    }

    function delete_bbdd ( obj  ){
        let new_bbdd = bbdd.filter((i)=>{
            return i.name != obj.name
        })
        bbdd = new_bbdd ; 
        return bbdd.map((i)=>{ console.log(i) })
    }

    return {
        see_bbdd,
        add_bbdd,
        delete_bbdd
    }

}

//LocalStorage...
import  addToLocalStorage  from "../../utils/localStorage.utils"

let ls = addToLocalStorage().getFromLocalStorage("user")

addToLocalStorage().getFromLocalStorage("user") && talk_bbdd().add_bbdd( ls )
