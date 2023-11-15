import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./home/HomePage";
import { NewToDoPage } from "./new/NewToDoPage";
import { EditToDoPage } from "./edit/EditToDoPage";

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewToDoPage />} />
        <Route path="/edit/:id" element={<EditToDoPage />} />
        <Route path="*" element={<p>Not Found.</p>} />
      </Routes>
    </HashRouter>
  );
}

export { App };
