import React from "react";
import { ToDoContext } from "../ToDoContext";
import './ToDoForm.css';

function ToDoForm() {
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext);

    const [newToDoValue, setNewToDoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>Asigna una nueva tarea.</label>
            <textarea
                placeholder="To Do..."
                value={newToDoValue}
                onChange={onChange}
            />
            <div className="ToDoForm-buttonContainer">
                <button type="button" className="ToDoForm-button ToDoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="ToDoForm-button ToDoForm-button--add">Agregar</button>
            </div>
        </form>
    );
}

export { ToDoForm };