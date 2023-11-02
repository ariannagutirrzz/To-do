
import { AppUI } from "./AppUI";
import { Provider } from "./components/TodoContext/TodoContext";
import React from "react";
import "./App.css";

function App() {
  return (
    <Provider>
      <AppUI/>
    </Provider>
  )
}

export default App;
