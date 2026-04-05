import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Card from "./components/Card";
import {ToastContainer }from"react-toastify";

function App() {
  return (
    <div>
      <Home/>
     <ToastContainer />     
    </div>
  );
}

export default App;