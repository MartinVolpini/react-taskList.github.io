import React, { createContext , useContext } from 'react'


//Style..
import "./todo.css";

//Components..
import { Task } from "./Task";
import { FormTask } from "./FormTask"

//Context..view
import { TaskContext } from "../context/TaskContext"


//?Context components

    const TodoContext = createContext();
    const { Provider } = TodoContext;
    export const useTodoContext = () => { return useContext( TodoContext ) };


//? View
export const Todo = ( { children } ) => {

    let {
        taskText ,
        setTaskText ,
        task , 
        onChange , 
        allTask , 
        handleAddTask , 
        deleteTask , 
        modificarTask , 
        modificarTaskText ,
        handleSaveAll ,
        handleResetView , 
        handleLoadTask ,
        title ,
        handleChangeTitle } = useContext( TaskContext )
  
  

  return (
    <div className="task-content" >
        
        

        <Provider
            value={{
                task , onChange , allTask , handleAddTask , deleteTask , modificarTask 
            }}
        >
        {  console.log("Vista " ,"allTask: ", allTask ,"title: ", title , "taskText: ", taskText) }

        <h1  alt='Change the title' className='task-subCont-title' >

            <input 
                type='text' 
                placeholder="Change the title..." 
                value={ title }
                onChange={(e)=>{ handleChangeTitle(e.target.value) }}
                className="task-title" 
           
            />
        </h1>


        <article className='task-sub-content'>

            
            <section className='task-box-1'  >
                {
                    allTask.map((element , i )=>{
                        // console.log("Desde todo", i , element.filled );
                        
                        if ( i > 0 ) { return (

                                <Task 
                                    num = { i }
                                    taskText={ taskText[i - 1] }
                                    setTaskText={ setTaskText }
                                    title={element.task} 
                                    id={ element.id } 
                                    deleteTask={ deleteTask } 
                                    modificarTask={ modificarTask } 
                                    modificarTaskText={modificarTaskText}
                                    filled={ element.filled }
                                    
                                />
                            )
                        } 
                      
                    })
                }

             
            </section>
                
            <FormTask  />
                
        </article>


        <section className='task-footer' >

            {/* <strong className='task-footer-text'>Save Task..</strong> */}
            <div className="task-footer-btns-content">
                <input 
                    className='task-footer-btns task-btns' 
                    type="reset"
                    value={"Reset"} 
                    onClick={(e)=>{ 
                        handleResetView(e)
                         
                        }}/>
                <input 
                    className='task-footer-btns task-btns' 
                    type="button"
                    value={"Save"} 
                    onClick={(e)=>{ handleSaveAll(e) }}/>
                
            </div>
            
            </section>

        </Provider>

    </div>
  )
}
