import "./App.css";
import {Routes, Route } from "react-router-dom";
import MockAPI from "./MockAPI";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mock-api" element={<MockAPI/>}/>
      </Routes>

    </div>
  );
}

export default App;
