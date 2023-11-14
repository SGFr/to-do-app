import React from 'react';
import { ToDoIcon } from './';

function EditIcon({ onEdit }) {
    return (
        <ToDoIcon
            type="edit"
            onClick={onEdit}
        />
    );
}

export { EditIcon };