import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import Home from "./modules/Home";
import Navbar from "./modules/Navbar";
import LoginForm from "./modules/LoginForm";
import SignUpForm from "./modules/SignUpForm";

function App() {
  return (
    <div className="w-full h-auto overflow-hidden bg-white ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signUp" element={<SignUpForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
