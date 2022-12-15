import "./App.scss";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Investor from "./components/investor/investor";
import Creator from "./components/creator/creator";
import Signup from "./components/signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Investor" element={<Investor />} />
        <Route path="/Creator" element={<Creator />} />
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}

export default App;
