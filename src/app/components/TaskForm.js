import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, task }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('medium');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setPriority(task.priority);
        } else {
            setTitle('');
            setDescription('');
            setPriority('medium');
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ title, description, priority, id: task ? task.id : Date.now() }); 
        setTitle('');
        setDescription('');
        setPriority('medium');
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input 
                className="task-input" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title" 
                required 
            />
            <input 
                className="task-input" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description" 
                required 
            />
            <select className="task-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <button className="task-submit-button" type="submit">
                {task ? 'Update Task' : 'Save Task'}
            </button>
        </form>
    );
};

export default TaskForm;
