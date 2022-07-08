import "./App.scss";
import Home from "./components/home/home";
import Investor from "./components/investor/investor";
import Creator from "./components/creator/creator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Investor" element={<Investor />} />
        <Route path="/Creator" element={<Creator />} />
      </Routes>
    </Router>
  );
}

export default App;
