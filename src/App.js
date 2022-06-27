
import React from "react"
import "./App.css"
import {store} from "./index"
import Schedule from "./components/Schedule"
// import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css"
import "./styles.css"

function App() {
  return (
    <div className="App">
      <Schedule />
    </div>
  )
}

export default App
