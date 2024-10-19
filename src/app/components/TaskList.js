import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onToggle, onDelete, onEdit, searchTerm }) => {
    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort tasks by priority
    const sortedTasks = filteredTasks.sort((a, b) => {
        const priorityOrder = { high: 1, medium: 2, low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });

    return (
        <div className="task-list-container">
            {sortedTasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};

export default TaskList;
