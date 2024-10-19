import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList.js';
import TaskForm from '../components/TaskForm.js';
import SearchBar from '../components/SearchBar.js';
import { initialTasks } from '../utils/data.js';
import '../styles/globals.css';

const App = () => {
    const [tasks, setTasks] = useState(initialTasks); 
    const [editingTask, setEditingTask] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []); 

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleToggle = (id) => {
        setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleEdit = (id) => {
        const taskToEdit = tasks.find(task => task.id === id);
        console.log("Editing Task: ", taskToEdit); 
        setEditingTask(taskToEdit);
    };
    

    const handleSubmit = (task) => {
        if (editingTask) {
            setTasks(tasks.map(t => t.id === editingTask.id ? { ...t, ...task } : t));
            setEditingTask(null); 
        } else {
            setTasks([...tasks, { id: tasks.length + 1, ...task, completed: false }]);
        }
        setEditingTask(null);
    };

    return (
        <div className="container">
            <h1>Task Management App</h1>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <TaskForm onSubmit={handleSubmit} task={editingTask} />
            <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} onEdit={handleEdit} searchTerm={searchTerm} />
        </div>
    );
};

export default App;
