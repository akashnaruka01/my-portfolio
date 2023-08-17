import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {RxCross2} from "react-icons/rx";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <>
      <nav id="header">
        <NavContent setMenuOpen={setMenuOpen}/>
      </nav>
      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu className={`${menuOpen? 'Close': 'Open'}`}/>
        <RxCross2 className={`${!menuOpen? 'Close': 'Open'}`}/>
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen}/>
    </div>
  );
};

const NavContent = ({ setMenuOpen}) => (
  <>
    <h2 >Porfolio.</h2>
    <div >
      <a href="/" onClick={()=>setMenuOpen(false)}>Home</a>
      <a href="#about" onClick={()=>setMenuOpen(false)}>About</a>
      <a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a>
      {/* <a href="#timeline" onClick={()=>setMenuOpen(false)}>Experience</a> */}
      <a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a>
      <a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a>
    </div>
    <a href="mailto:akashnaruka01@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
