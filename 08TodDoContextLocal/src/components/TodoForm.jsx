import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {
    const [todo, setTodo] = useState("")
    // we take addtodo functionality and put values in it 
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) {
            return
        }
        // spread krne k liye objects pass krna h array has objects
        addTodo({ todo, completed: false })
        // settodo empty for new form 
        setTodo("")
    }
    return (
        <form onSubmit={add} className="flex">
            <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    )
}

export default TodoForm

