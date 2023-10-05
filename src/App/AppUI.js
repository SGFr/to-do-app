import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDosLoading } from "../ToDosLoading";
import { ToDosError } from "../ToDosError";
import { EmptyToDos } from "../EmptyToDos";
import { ToDoContext } from "../ToDoContext";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";

function AppUI() {
    const {
        loading,
        error,
        searchedToDos,
        completeToDo,
        deleteToDo,
        openModal,
        setOpenModal
    } = React.useContext(ToDoContext);
    return (
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />
            <ToDoList>
                {loading && <ToDosLoading />}
                {error && <ToDosError />}
                {(!loading && searchedToDos === 0) && <EmptyToDos />}
                {searchedToDos.map((toDo) => (
                    <ToDoItem
                        key={toDo.text}
                        text={toDo.text}
                        completed={toDo.completed}
                        onComplete={() => completeToDo(toDo.text)}
                        onDelete={() => deleteToDo(toDo.text)}
                    />
                ))}
            </ToDoList>
            <CreateToDoButton
                setOpenModal={setOpenModal}
            />
            {openModal && (
                <Modal>
                    <ToDoForm/>
                </Modal>
            )}
        </React.Fragment>
    );
}

export { AppUI };