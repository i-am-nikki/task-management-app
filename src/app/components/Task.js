import React from 'react'; 

const Task = ({ task, onToggle, onDelete, onEdit }) => {
    return (
        <div 
            data-priority={task.priority}
            style={{
                backgroundColor: task.priority === "high" ? "red" : task.priority === "medium" ? "yellow" : "green",
                padding: "10px",
                margin: "5px",
                borderRadius: "5px",
                textDecoration: task.completed ? "line-through" : "none"
            }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Priority: {task.priority}</p>
            <button className="task-button toggle" onClick={() => onToggle(task.id)}>Toggle Complete</button>
            <button className="task-button edit" onClick={() => onEdit(task.id)}>Edit</button>
            <button className="task-button delete" onClick={() => onDelete(task.id)}>Delete</button>
        </div>
    );
};

export default Task;
