import React from 'react'

//Components
import { Todo } from "../components/Todo";
import { TaskSaving } from "../components/TaskSaving";
//Context...
import { TaskProvider } from "../context/TaskContext";


export const ViewTodo = () => {
  return (
    <>
      <TaskProvider>
        
        <Todo />

        <TaskSaving />

      </TaskProvider>
           

   
    </>
  )
}
