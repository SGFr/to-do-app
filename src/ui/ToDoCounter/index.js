import React from "react";
import "./ToDoCounter.css";

function ToDoCounter({
    completedToDos: completed,
    totalToDos: total,
    loading,
}) {
    return (
        <h2 className={`ToDoCounter ${!!loading && "ToDoCounter--loading"}`}>
            Has completado {completed} de {total} tareas
        </h2>
    );
}

export { ToDoCounter };
