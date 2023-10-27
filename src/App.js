import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Homepage></Homepage>} />
        <Route path="/form" element={<div>Form page</div>} />
      </Routes>
    </div>
  );
}

export default App;
