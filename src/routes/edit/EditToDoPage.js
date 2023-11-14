import React from "react";
import { ToDoForm } from "../../ui/ToDoForm";
import { useToDos } from "../useToDos";
import { useLocation, useParams } from "react-router-dom";

function EditToDoPage() {
    const location = useLocation();
    const params = useParams();
    const id = params.id;

    const { state, stateUpdaters } = useToDos();
    const { loading, getToDo } = state;
    const { editToDo } = stateUpdaters;

    let toDoText;
    
    if (location.state?.toDo) {
        toDoText = location.state.toDo.text;
    } else if (loading) {
        return <p>Cargando...</p>
    } else {
        const toDo = getToDo(id);
        toDoText = toDo.text;
    }

    return (
        <ToDoForm 
            label="Edita tu Tarea"
            defaultToDoText={toDoText}
            submitText="Editar"
            submitEvent={(newText) => editToDo(id, newText)}
        />
    );
}

export { EditToDoPage };