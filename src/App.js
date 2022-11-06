import React from "react";
import "./Assets/Css/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Ordeer } from "./pages/Order";
import { AddProdukt } from "./pages/AddProdukt";
import { VyuKard } from "./components/OrderVyu";
import { ProduktCard } from "./pages/ProduktCard";

function App() {
  return (
    <Router>
      <div id="App">
        <Navbar />
        <Routes>
          <Route exect path="/" element={<Home />} />
          <Route path="/ordeer" element={<Ordeer />} />
          <Route path="/addProdukt" element={<AddProdukt />} />
          <Route path="/vyuKard" element={<VyuKard />} />
          <Route path="/produktCard" element={<ProduktCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
