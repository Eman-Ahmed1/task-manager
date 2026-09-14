import TaskItem from "../TaskItem/TaskItem";
import { FiList } from "react-icons/fi";
import { LuSearchX } from "react-icons/lu";
import "./TaskList.css"

export default function TaskList({ tasks, filteredTasks, toggleTask, deleteTask, editTask, onClear }) {
    const countActive = tasks.filter(item => !item.completed).length;
    const countCompleted = tasks.filter(item => item.completed).length;



    return (
        <>

            {filteredTasks.length === 0 && tasks.length === 0 ?
                <div className="noTask">
                    <div className="icon-noTask"><FiList /></div>
                    <h4>No tasks yet</h4>
                    <p>Add your first task to get started</p>
                </div>
                : filteredTasks.length === 0 && tasks.length !== 0 ?
                    <div className="noTask">
                        <div className="icon-noTask"><LuSearchX /></div>
                        <h4>No tasks found</h4>
                        <p>Try a different search term.</p>
                    </div>
                    : (
                        <div className="task-list">
                            {filteredTasks.map((task) => {
                                return <TaskItem
                                    key={task.id}
                                    task={task}
                                    toggleTask={toggleTask}
                                    deleteTask={deleteTask}
                                    editTask={editTask}
                                />
                            })}
                        </div>
                    )}


            <div className="counts">
                <div className="counts-info">
                    <p>{countActive} Active</p>
                    <p>{countCompleted} Completed </p>
                </div>
                {countCompleted >= 1 &&
                    <div className="clear">
                        <button onClick={onClear}>Clear Completed</button>
                    </div>
                }
            </div>

        </>
    )
}