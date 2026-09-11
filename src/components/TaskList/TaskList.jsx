import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({ tasks, toggleTask , deleteTask ,editTask}) {

    return (
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
    )
}