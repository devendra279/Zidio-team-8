import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import Top from './Components/Top'
// import Header from './Components/Header'
import Hero from "./Components/Hero";
// import Footer from './Components/Footer'
import Services from "./Components/Services";
import Contact from "./Components/Contact";
// import About from './Components/About'
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Auth } from "./Components/AuthContext";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import { ToastContainer } from "react-toastify";
function App() {
  // const [count, setCount] = useState(0)
  const { user } = useContext(Auth);
  return (
    <>
      <Router>
        {" "}
        <div className="bg-[#f9fafb]">
          <ToastContainer />
        </div>
        {/* <Top /> */}
        {/* <Header /> */}
        <Hero />
        {/* <About/> */}
        <Routes>
          {/* <Route path="/" element={<Hero/>} /> */}
          {/* <Route path="//Components/About" element={<About />} /> */}
          <Route path="/services" element={<Services />} />
          <Route path="/Components/Contact" element={<Contact />} />
          <Route path="/Components/Register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/home"
            element={user ? <Home /> : <Login />}
          ></Route>{" "}
        </Routes>
      </Router>
    </>
  );
}

export default App;
