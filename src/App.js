import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={[<Header />, <Home />]} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
