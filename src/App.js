import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import About from "./pages/About";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> }/>

        <Route path='/stocks' element={ <Dashboard /> }/>

        <Route path='/stocks/:name/:lastPrice' element={ <Stock /> }/>

        <Route path='/about' element={ <About /> }/>
      </Routes>
    </div>
  );
}

export default App;
