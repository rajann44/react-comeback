import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";
import CardDetails from "./components/Card/CardDetails";
import Queries from "./components/Queries";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Homepage></Homepage>} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/details" element={<CardDetails></CardDetails>} />
        <Route path="/queries" element={<Queries></Queries>} />
      </Routes>
    </div>
  );
}

export default App;
