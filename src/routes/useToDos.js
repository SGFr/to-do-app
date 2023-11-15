import React from 'react';
import { useLocalStorage } from "./useLocalStorage";
import { v4 as uuid } from "uuid";

function useToDos() {
    const {
        item: toDos,
        saveItem: saveToDos,
        sincronizeItem: sincronizeToDos,
        loading,
        error
    } = useLocalStorage('TODOS_V2', []);
    const [searchValue, setSearchValue] = React.useState("");

    const completedToDos = toDos.filter((toDo) => !!toDo.completed).length;
    const totalToDos = toDos.length;

    let searchedToDos = [];

    if (!searchValue.length >= 1) {
        searchedToDos = toDos;
    } else {
        searchedToDos = toDos.filter((toDo) => {
            const toDoText = toDo.text.toLocaleLowerCase();
            const searchText = searchValue.toLocaleLowerCase();
            return toDoText.includes(searchText);
        });
    }

    const addToDo = (text) => {
        const id = newToDoId();
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed: false,
            id
        })
        saveToDos(newToDos);
    };

    const getToDo = (id) => {
        const toDoIndex = toDos.findIndex((toDo) => toDo.id === id);
        return toDos[toDoIndex];
    }

    const completeToDo = (id) => {
        const toDoIndex = toDos.findIndex((toDo) => toDo.id === id);
        const newToDos = [...toDos];
        toDos[toDoIndex].completed = true;
        saveToDos(newToDos);
    };

    const editToDo = (id, newText) => {
        const toDoIndex = toDos.findIndex((toDo) => toDo.id === id);
        const newToDos = [...toDos];
        toDos[toDoIndex].text = newText;
        saveToDos(newToDos);
    };

    const deleteToDo = (id) => {
        const toDoIndex = toDos.findIndex((toDo) => toDo.id === id);
        const newToDos = [...toDos];
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
    };

    const state = {
        loading,
        error,
        totalToDos,
        completedToDos,
        searchValue,
        searchedToDos,
        getToDo
    };

    const stateUpdaters = {
        setSearchValue,
        addToDo,
        completeToDo,
        editToDo,
        deleteToDo,
        sincronizeToDos
    }

    return { state, stateUpdaters };
}

function newToDoId() {
    const unique_id = uuid();
    return unique_id;
}

export { useToDos };