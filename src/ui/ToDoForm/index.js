import React from "react";
import './ToDoForm.css';
import { useNavigate } from "react-router-dom";

function ToDoForm(props) {
    const navigate = useNavigate();
    const [newToDoValue, setNewToDoValue] = React.useState(props.defaultToDoText || '');

    const onSubmit = (event) => {
        event.preventDefault();
        props.submitEvent(newToDoValue);
        navigate('/');
    };

    const onCancel = () => {
        navigate('/');
    };

    const onChange = (event) => {
        setNewToDoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
                placeholder="To Do..."
                value={newToDoValue}
                onChange={onChange}
            />
            <div className="ToDoForm-buttonContainer">
                <button type="button" className="ToDoForm-button ToDoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="ToDoForm-button ToDoForm-button--add">{props.submitText}</button>
            </div>
        </form>
    );
}

export { ToDoForm };