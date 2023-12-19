// App.js
import React from "react";
import "./App.css";
import Sidebar from "./Layout/Sidebar";
import { BrowserRouter } from "react-router-dom";


function App() {

  return (
    <div style={{overflow:"auto"}} className="App">
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </div>
  );
}

export default App;

