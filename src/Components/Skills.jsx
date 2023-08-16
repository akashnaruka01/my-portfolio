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
    w: '14%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginX: '2rem',
    marginY: '1rem',
    borderRadius: '10%',
    border: '1px solid black',
    boxShadow: '1px 1px grey, -1px -1px grey',
    bgColor: '#b9daf8',
    color: 'black',
    css:{
      '&:hover':{
        transform: 'scale(1.02)',
      }
    },
    className: 'skillsBox'
  }

  return (


    <div id="skills">
      <h1>What I do</h1>
      <Box
        className="sBox"
        p="4rem"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}   
        lineHeight={'3'}     
      >
        
        <Box {...boxProperty}>
          <Image src={C} w={'50%'}  boxSizing='content-box' objectFit={'contain'}/>
          <h2>C </h2>
        </Box>
        
        <Box {...boxProperty} >
          <Image src={Cpp} w={'50%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>C++</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={Html} w={'50%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>HTML</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={Css} w={'50%'} h={'40%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>Css</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={js} w={'50%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>JS</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={react} w={'50%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>Chakra Ui</h2>
        </Box>
        
        <Box {...boxProperty}>
          <Image src={Chakra} w={'50%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>Chakra</h2>
        </Box>
        
        <Box {...boxProperty} >
          <Image src={Git} w={'50%'} boxSizing='content-box' objectFit={'contain'}/>
          <h2>Git</h2>
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
