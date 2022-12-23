import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MidlePage from "./components/MidlePage/MidlePage";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <MidlePage />
        <Cart />
      </div>
    </div>
  );
}
export default App;
