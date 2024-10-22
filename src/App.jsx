import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Top from "./Components/Top";
import Header from "./Components/Header";
// import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
// import About from './Components/About'
import { useContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Auth } from "./Components/AuthContext";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";
import About from "./Components/about";
import Teampage from "./Components/Teampage";
import { ToastContainer } from "react-toastify";
import Homepage from "./pages/homepage";
function App() {
  // const [count, setCount] = useState(0)
  const { user } = useContext(Auth);
  return (
    <>
      <BrowserRouter>
  <div className="bg-[#f9fafb]">
          <ToastContainer />
        </div>
        
        <Top />
        <Header />
       {/* <Hero />  */}
        <Routes>
          <Route index element={<Homepage/>}/>
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="Register" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="Teampage" element={<Teampage />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route
            path="/home"
            element={user ? <Home /> : <Login />}
          ></Route>{" "}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
