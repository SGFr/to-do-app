import React from"react";
import './CreateToDoButton.css';

function CreateToDoButton(props){
    return(
        <button 
            className="CreateToDoButton"
            onClick={props.onClick}
        >
            +
        </button>
    );
}

export { CreateToDoButton };