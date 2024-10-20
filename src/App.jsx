
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Top from './Components/Top'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import Services from './Components/Services'
import Contact from './Components/Contact'


function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <Router>
    <Top />
    <Header />
    <Hero />
    <Footer/>
      <Routes>
        <Route path="/" element={<HeroPoster/>} />
        {/* <Route path="//Components/About" element={<About />} /> */}
        <Route path="/services" element={<Services />} />
        <Route path="/Components/Contact" element={<Contact />} />
      </Routes>
    </Router>
    
    </>
  )
}

export default App