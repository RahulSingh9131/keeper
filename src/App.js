import "./App.css";
import {Routes, Route } from "react-router-dom";
import MockAPI from "./MockAPI";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/mock-api" element={<MockAPI/>}/>
      </Routes>

    </div>
  );
}

export default App;
