import React, { useEffect, useState } from "react";
import Header,{HeaderPhone} from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from './Components/Skills';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import Projects from "./Components/Projects";

const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth/window.innerHeight);
  
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth/window.innerHeight)
    };

    window.addEventListener('resize',resizeRatio);
  
    return () => {
    window.addEventListener('resize',resizeRatio);
    }
  }, [ratio])
  
  return ratio<2 ? (<>
  <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
    <Home ratio={ratio}/>
    <About />
    <Projects />
    <Skills />
    <Contact/>
    <Footer/>
    <Toaster/>
  </>) : <em id="customMessage">Please change ratio to view content</em>
};

export default App;
