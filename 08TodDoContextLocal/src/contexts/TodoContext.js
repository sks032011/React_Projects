import { createContext, useContext } from "react";

export const ToDoContext=createContext({
    todos:[
        {
            id:1,
            todo:" Todo msg ",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    // here we need original todo to edit + its id  
    updatedtodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(ToDoContext)
}
export const Todoprovider=ToDoContext.Provider