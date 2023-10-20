import React from 'react';
import { useLocalStorage } from "./useLocalStorage";

function useToDos() {
    const {
        item: toDos,
        saveItem: saveToDos,
        sincronizeItem: sincronizeToDos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState("");
    const [openModal, setOpenModal] = React.useState(false);

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
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed: false
        })
        saveToDos(newToDos);
    };

    const completeToDo = (text) => {
        const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
        const newToDos = [...toDos];
        toDos[toDoIndex].completed = true;
        saveToDos(newToDos);
    };

    const deleteToDo = (text) => {
        const toDoIndex = toDos.findIndex((toDo) => toDo.text === text);
        const newToDos = [...toDos];
        newToDos.splice(toDoIndex, 1);
        saveToDos(newToDos);
    };

    return {
        loading,
        error,
        totalToDos,
        completedToDos,
        searchValue,
        setSearchValue,
        searchedToDos,
        addToDo,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal,
        sincronizeToDos
    }
}

export { useToDos };