import { useState } from "react"
import "./TaskForm.css"
export default function TaskForm({addTask}) {
    const [newTask , setNewTask ] = useState("");

    const handleSubmit = (e ) =>{
        e.preventDefault();
        addTask(newTask);

        setNewTask(" ")
    }
    return (
        <div className="task-form">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="What needs to be done?"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />

                <button type="submit"> + Add Task</button>
            </form>
        </div>
    )
}