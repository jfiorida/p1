import { useState } from "react";

import './App.css'
import NavBar from "./components/navBar";
import itemListConteiner from "./components/ItemListConteiner"


function App() {
const texto = "bienvenido a mi app";
  return (
     <div>
      <NavBar/>;
      <itemListConteiner greeting = {texto} />;
     </div>
  )
}
export default App;
