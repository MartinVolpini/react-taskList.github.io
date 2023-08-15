import React ,{ createContext }from 'react'

import { useTask } from "../hook/useTask"

export const TaskContext = createContext();


export const TaskProvider = ({children}) => {

    let {   
        taskText ,
        setTaskText ,
        task,
        allTask,
        handleAddTask,
        deleteTask,
        onChange,
        modificarTask,
        modificarTaskText ,
        handleSaveAll,
        handleResetView ,
        taskConteiner,
        handleLoadTask ,
        title ,
        handleChangeTitle ,
        handleDeleteAllTask } = useTask()

  return (
    <TaskContext.Provider
    value={{
        taskText,
        setTaskText ,
        task,
        allTask,
        handleAddTask,
        deleteTask,
        onChange,
        modificarTask ,
        modificarTaskText ,
        handleSaveAll,
        handleResetView ,
        taskConteiner,
        handleLoadTask ,
        title ,
        handleChangeTitle ,
        handleDeleteAllTask 
    }}>


        { children }
    </TaskContext.Provider>
   
  )
}
