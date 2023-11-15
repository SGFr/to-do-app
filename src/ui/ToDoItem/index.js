import React from "react";
import { CompleteIcon } from "../ToDoIcon/CompleteIcon";
import { DeleteIcon } from '../ToDoIcon/DeleteIcon';
import { EditIcon } from '../ToDoIcon/EditIcon';
import './ToDoItem.css';

function ToDoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <EditIcon onEdit={props.onEdit} />
            <DeleteIcon onDelete={props.onDelete} />
        </li>
    );
}

export { ToDoItem };