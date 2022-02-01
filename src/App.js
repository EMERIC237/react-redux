import Home from "./containers/home/Home";
import AddComment from "./containers/addComment/AddComment";
import Contact from "./containers/contact/Contact"; 
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/add" element={<AddComment />} />
    </Routes>
    </>
    
  );
}

export default App;
