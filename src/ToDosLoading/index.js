import React from "react";
import './ToDosLoading.css';

function ToDosLoading() {
    return (
        <div className="loader-container">
            <div className="loader"></div>
            <span className="loader-text">Cargando...</span>
        </div>
    );
}

export { ToDosLoading }