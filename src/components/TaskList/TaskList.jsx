import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css"

export default function TaskList({ tasks, toggleTask, deleteTask, editTask }) {
    const countActive =  tasks.filter(item => !item.completed ).length;
    const countCompleted =  tasks.filter(item => item.completed ).length;
    

    return (
        <>
            <div className="task-list">
                {tasks.map((task) => {
                    return <TaskItem
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                        editTask={editTask}
                    />
                })}
            </div>

            <div className="counts">
               <p>{countActive} Active</p>
                <p>{countCompleted} Completed </p>
            </div>
        </>
    )
}