import React, { useContext } from 'react'

//Styles...
import "./taskSaving.css"
//Context...
import { TaskContext } from "../context/TaskContext"


export const TaskSaving = () => {

    let {  
        taskConteiner,
        handleLoadTask ,
        handleDeleteAllTask} = useContext( TaskContext );
        


        console.log("Componente CONTEINER: ", taskConteiner )
        console.log(" ")
  return (
    <div  className='taskSaving-conteiner' >
        <div className="taskSaving-row">

        
        { taskConteiner.map((item , i)=>{
            
            //Adaptador
            let titleEEEE ;
            item[0].title.length < 23 ? titleEEEE = item[0].title : titleEEEE = item[0].title.slice(0,23).concat("... ")

            // item[0].title && console.log(  item[0].id_all )

            return(
                
                    <div 
                        className="taskSaving" 
                        key={ i }
                        
                    >
                        <button 
                            className='taskSaving-btn-delete'
                            onClick={(e)=>{ 
                                handleDeleteAllTask( e , item[0].id_all ) 
                                // console.log(  item[0].id_all )
                            }}
                        >x</button>
                        <h3 
                            className="taskSaving-title"
                            onClick={(e)=>{  
                                confirm("Se va a pasar a las tablas de arriba?") && handleLoadTask( e , i )
                            }}
                        > { titleEEEE  || `Task : ${i}` }   </h3>

                    </div>
                
            )
            }   ) 
        }
        </div>
    </div>
  )
}
