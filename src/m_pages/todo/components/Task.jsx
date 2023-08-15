import React, { useContext, useEffect, useState } from 'react'



export const Task = ( props ) => {
    //!Las func del hook funcionan bien pero los eventos con las clases y la logica del componente es un desastre burbujea nada hace lo q debe
    //! manejo las clases para q cambie de color y finciona bien ahora cuando elimino el elemento con la clase green el elemento de abajo de la lista
    //! ereda la clase . No se porque 

    //Styles
    
    let [ interruptor , setIterruptor] = useState( false );
    
    let [ toppleClass , setToppleClass ] = useState( "task-row" );

    


    // useEffect(()=>{
    //     // alert( interruptor )
   
    //     interruptor == true ?  setToppleClass("task-row-green") : setToppleClass("task-row") 
    // },[ interruptor ] )

    function changeClass(){ 
        console.log("func  event alto" , interruptor , toppleClass , props.filled)
        interruptor ?  setIterruptor(false) : setIterruptor(true);

        console.log("func  event medio" , interruptor , toppleClass)

        interruptor ? setToppleClass("task-row-green") : setToppleClass("task-row") ;

        console.log("func  event bajo" , interruptor , toppleClass)
        
    }

    // let [ state , setState ] = useState( props.title )

    

    function handleModificarTaskText(e , id , item ){
        // e.preventDefault();  
        console.log( props.num )
        props.modificarTaskText( e , id , item , props.num)
    }
    

    
    // console.info( "Component ", interruptor , toppleClass , props.title , props.filled)
    // console.log("")
    return (
    <>
        <div className={ toppleClass } key={ props.id + props.title }>
            <input    style={{
                // background:"none" , color:"white" , outline:"none", border:"none" , 
                with:"40%"}}
                className="task-check" 
                type='checkbox' 
                checked={ props.filled }  //Con checkbox se usa esta propiedad
                // defaultChecked
                onChange={(e)=>{ 
                    // e.preventDefault(); //Esto me rompe el imput del form
                    
                    // interruptor == true ?  setIterruptor(false) : setIterruptor(true)  
                    // console.log("ENTROOOOOOOOOOOOO", interruptor)
                }}
                    
                onClick={(e)=>{ 
                    props.modificarTask( props.id )
                    // changeClass() 
                    
                
            }}/>

            {/* <strong 
                className='task-text' 
                // contentEditable 
                style={{background:"none" , color:"white" , outline:"none", border:"none" , with:"40%"}}
                onClick={(e)=>{
                    // props.setTaskText( [e , props.id])
                    // handleModificarTaskText( e , props.id )
                    // setTimeout(()=>{
                    //     handleModificarTaskText( e , props.id )
                    //     // alert( e.target.childNodes[0].data , props.id )
                    // },25000)
                }}
                // onChange={()=>{ alert("") }}
            >   
                {props.title}
            </strong> */}

            <input 
                type='text' 
                placeholder="" 
                value={ props.taskText }
                onChange={(e)=>{ 

                    handleModificarTaskText( e , props.id , props.taskText)
                    // handleChangeTitle(e.target.value) 
                    
                }}
                className="task-text" 
                style={{color:"black" , background:"none" , outline:"none" , border:"none" , with:"40%"}}
            />

            <button className='task-btn-delete task-btns '
                onClick={(e)=>{
                    e.preventDefault();
                    props.deleteTask( props.id )
                }}>x
            </button>
        </div>
    </>
  )
}
