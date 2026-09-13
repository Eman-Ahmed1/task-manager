import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoCheckbox } from "react-icons/io5";

import "./TaskItem.css"
import { useState } from "react";

export default function TaskItem({ task, toggleTask, deleteTask, editTask }) {

    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title)

    const handleSaveEdit = () => {
        editTask(task.id, editTitle)
        setIsEditing(false)
    }

    const handleCancelEdit = () => {
        setIsEditing(false)
    }


    return (
        <div className="task-item">

            <div className="task-title-container">

                {/* completed tap */}
                <div className="iscomplete" onClick={() => toggleTask(task.id)}>
                    {task.completed ? <IoCheckbox /> : < MdCheckBoxOutlineBlank />}
                </div>

                {/* title & input */}
                {!isEditing ?
                    <div className="task-title" >
                        {task.completed ?
                            <p className="title-complete">{task.title}</p> :
                            <p className="title-notComplete">{task.title}</p>
                        }

                    </div>
                    :
                    <div className="edit-div">
                        <input
                            className="edit-input"
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                        />
                        <div className="btn-taps">
                            <button className="edit-btn" onClick={handleSaveEdit}>Save</button>
                            <button className="edit-btn" onClick={handleCancelEdit}>Cancel</button>
                        </div>
                    </div>
                }

            </div>

            {/* icons */}
            <div className="icons">
                {!isEditing && (
                    <div className="edit" onClick={() => setIsEditing(true)}>
                        <MdOutlineEdit />
                    </div>
                )}

                {!isEditing && (
                    <div className="delete" onClick={() => deleteTask(task.id)}>
                        <RiDeleteBin6Line />
                    </div>
                )}
            </div>
        </div>
    )
}