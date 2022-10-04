import React from "react";
import ReactDOM from "react-dom/client";
import { Mensaje } from "./Mensaje";
import { Proyecto } from "./Mensaje";
import { Navbar } from "./Mensaje";
import { Boton } from "./Boton";
import { TaskCard } from "./Tarjeta";
import { Ventas } from "./Saludos";
import { Post } from "./Posts";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const handleChange = (e) => {
  {
    console.log(e.target.value + "...");
  }
};

root.render(
  <div>
    <App></App>

    
  </div>
);
