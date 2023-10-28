import React from "react";
import { useToDos } from "./useToDos";
import { ToDoHeader } from "../ToDoHeader";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoList } from "../ToDoList";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDosLoading } from "../ToDosLoading";
import { ToDosError } from "../ToDosError";
import { EmptyToDos } from "../EmptyToDos";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { ChangeAlert } from "../ChangeAlert";

function App() {
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
    openModal
  } = state;

  const {
    setSearchValue,
    addToDo,
    completeToDo,
    deleteToDo,
    setOpenModal,  
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
            key={toDo.text}
            text={toDo.text}
            completed={toDo.completed}
            onComplete={() => completeToDo(toDo.text)}
            onDelete={() => deleteToDo(toDo.text)}
          />
        )}
      />
      <CreateToDoButton
        setOpenModal={setOpenModal}
      />
      {openModal && (
        <Modal>
          <ToDoForm
            addToDo={addToDo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      <ChangeAlert
        sincronize={sincronizeToDos}
      />
    </React.Fragment>
  );
}

export default App;
