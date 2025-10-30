import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "../src/pages/HomePage";
import CreatePage from "../src/pages/CreatePage";
import NoteDetailPage from "../src/pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
    <div data-theme="forest">
      <button className="btn btn-primary">Click Me</button>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
        <Route path="/note/:id" element={<NoteDetailPage />}></Route>
      </Routes>
    </div>
  );
};

export default App;
