import React from "react";
import { useNavigate } from "react-router-dom";
import { useToDos } from "../useToDos";
import { ToDoHeader } from "../../ui/ToDoHeader";
import { ToDoCounter } from "../../ui/ToDoCounter";
import { ToDoSearch } from "../../ui/ToDoSearch";
import { ToDoList } from "../../ui/ToDoList";
import { ToDoItem } from "../../ui/ToDoItem";
import { CreateToDoButton } from "../../ui/CreateToDoButton";
import { ToDosLoading } from "../../ui/ToDosLoading";
import { ToDosError } from "../../ui/ToDosError";
import { EmptyToDos } from "../../ui/EmptyToDos";
import { ChangeAlert } from "../../ui/ChangeAlert";

function HomePage() {
    const navigate = useNavigate();
    const {
        state,
        stateUpdaters
    } = useToDos();

    const {
        loading,
        error,
        totalToDos,
        completedToDos,
        searchValue,
        searchedToDos,
        //openModal
    } = state;

    const {
        setSearchValue,
        //addToDo,
        completeToDo,
        deleteToDo,
        //setOpenModal,
        sincronizeToDos
    } = stateUpdaters;

    return (
        <React.Fragment>
            <ToDoHeader loading={loading}>
                <ToDoCounter
                    totalToDos={totalToDos}
                    completedToDos={completedToDos}
                />
                <ToDoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </ToDoHeader>
            <ToDoList
                error={error}
                loading={loading}
                searchedToDos={searchedToDos}
                searchText={searchValue}
                totalToDos={totalToDos}
                onError={() => <ToDosError />}
                onLoading={() => <ToDosLoading />}
                onEmptyToDos={() => <EmptyToDos />}
                onEmptySearchResults={
                    (searchText) => <p>No hay resultados para {searchText}</p>
                }
                render={(toDo) => (
                    <ToDoItem
                        key={toDo.id}
                        text={toDo.text}
                        completed={toDo.completed}
                        onEdit={() => navigate('/edit/' + toDo.id, { state: { toDo } })}
                        onComplete={() => completeToDo(toDo.id)}
                        onDelete={() => deleteToDo(toDo.id)}
                    />
                )}
            />
            <CreateToDoButton
                onClick={() => navigate('/new')}
                //setOpenModal={setOpenModal}
            />
            {/*openModal && (
                <Modal>
                    <ToDoForm
                        addToDo={addToDo}
                        setOpenModal={setOpenModal}
                    />
                </Modal>
            )*/}
            <ChangeAlert
                sincronize={sincronizeToDos}
            />
        </React.Fragment>
    );
}

export { HomePage };
