import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
      </Routes>
    </div>
  );
}

export default App;
