import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Contact from "./components/Contact";
import About from "./components/About";
import News from "./components/News";
import Details from "./components/card/Details";
import Queries from "./components/Queries";
import { ContactContext } from "./context/ContactContext";
import { useState } from "react";

function App() {
  const [contactList, setContactList] = useState([]);

  return (
    <div className="App">
      <ContactContext.Provider value={{ contactList, setContactList }}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact></Contact>} />
          <Route path="/about" element={<About></About>} />
          <Route path="/details" element={<Details></Details>} />
          <Route path="/queries" element={<Queries></Queries>} />
        </Routes>
      </ContactContext.Provider>
    </div>
  );
}

export default App;
