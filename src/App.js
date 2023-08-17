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
  
  return <>
  <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Header menuOpen = {menuOpen} setMenuOpen={setMenuOpen}/>
    <Home/>
    <About />
    <Projects />
    <Skills />
    <Contact/>
    <Footer/>
    <Toaster/>
  </>
};

export default App;
