import React from "react";
import { ToDoForm } from '../../ui/ToDoForm';
import { useToDos } from "../useToDos";

function NewToDoPage() {
    const { stateUpdaters } = useToDos();
    const { addToDo } = stateUpdaters;

    return (
        <ToDoForm 
            label="Crea un nuevo ToDo"
            submitText="Añadir"
            submitEvent={(text) => addToDo(text)}
        />
    );
}

export { NewToDoPage };