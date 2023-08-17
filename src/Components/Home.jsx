import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../Assests/me.png";

const Home = () => {
  
  const animations = {
    h1: {
      initial: { x: "-100%", opacity: 0 },
      whileInView: { x: 0, opacity: 1 },
    },
    button: {
      initial: { y: "-100%", opacity: 0 },
      whileInView: { y: 0, opacity: 1 },
    },
  };

  return <>    
    <div id="home">
      
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Akash Singh
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Problem Solver", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:akashnaruka01@gmail.com">Hire Me</a>
            <a href="#projects">
              Projects <BsArrowUpRight />
            </a>
          </div>       
        </div>
      </section>
      <section >
        <img src={me} alt="akash" />
      </section>
    </div>
  </>
};

export default Home;
