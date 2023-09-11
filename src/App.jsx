import { useState } from "react";

import './App.css'
import {itemListConteiner} from "./components/ItemListConteiner"
import NavBar from "./components/navBar";


function App() {
const texto = "bienvenido a mi app";
  return (
     <div>
      <NavBar/>
      <itemListConteiner greeting = {texto} />;
     </div>
  )
}
export default App;
