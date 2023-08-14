import React from "react";
import { motion } from "framer-motion";
import { AiFillIeCircle } from "react-icons/ai";
import { TbBrandCpp } from "react-icons/tb";
import { Box, Image, chakra } from "@chakra-ui/react";
import C from '../Assests/c.png';
import Cpp from '../Assests/cpp.png';
import Chakra from '../Assests/chakra.png';
import js from '../Assests/js.png';
import Html from '../Assests/html.png';
import react from '../Assests/react.png';
import Git from '../Assests/git.svg';
import Css from '../Assests/css.png';
import vscode from '../Assests/vscode.png';
// import  from '../Assests/js.png';
import Js from '../Assests/js.png';

const Skills = () => {
  // const animations = {
  //   whileInView: {
  //     x: 0,
  //     y: 0,
  //     opacity: 1,
  //   },
  //   one: {
  //     opacity: 0,
  //     x: "-100%",
  //   },
  //   two: {
  //     opacity: 0,
  //     x: "+100%",
  //   },
  // };

  const boxProperty = {
    color: 'black',
    w: '11%',
    display: 'flex',
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginX: '2rem',
    marginY: '1rem',
    css:{
      '&:hover':{
        transform: 'scale(1.1)',
      }
    }
  }

  return (


    <div id="skills">
      <h1>SKills</h1>
      <Box
        p="4rem"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}   
        lineHeight={3}     
      >
        
        <Box {...boxProperty}>
          <Image src={C} w={'100%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>C language</h2>
        </Box>
        
        <Box {...boxProperty} >
          <Image src={Cpp} w={'80%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>C language</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={Html} w={'100%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>HTML</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={Css} w={'80%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>Css</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={js} w={'100%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>JS</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={react} w={'100%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>Chakra Ui</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={Chakra} w={'100%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>C language</h2>
        </Box>
        
        <Box {...boxProperty} >
          <Image src={Git} w={'100%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>Git</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={vscode} w={'100%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>Vs Code</h2>
        </Box>        
      </Box>

      {/* <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <TbBrandCpp />
          <span>Competitive Programming</span>
        </motion.div>
      </section> */}
    </div>
  );
};

export default Skills;
