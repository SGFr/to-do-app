import React from "react";
import './ToDoCounter.css';
import { ToDoContext } from "../ToDoContext";

function ToDoCounter() {
    const {
        completedToDos: completed,
        totalToDos: total
    } = React.useContext(ToDoContext);
    return (
        <h2 className="ToDoCounter">Has completado {completed} de {total} tareas</h2>
    );
}

export { ToDoCounter }