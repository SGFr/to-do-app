import React from "react";
import './ToDoList.css'

function ToDoList(props) {
    return (
        <section className="ToDoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalToDos) && props.onEmptyToDos()} {/* !props.totalToDos es equivalente a props.totalToDos === 0*/}
            {(!!props.totalToDos && !props.searchedToDos.length) && props.onEmptySearchResults(props.searchText)}
            {(!props.loading && !props.error) && props.searchedToDos.map(props.render)} {/* es equivalente a {props.searchedToDos.map((ToDo) => props.render(ToDo))}*/}
            <ul>
                { props.children }
            </ul>
        </section>
    );
}

export { ToDoList }