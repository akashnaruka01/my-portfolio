import React from "react";
import { Box, Heading, Image, Text, css } from "@chakra-ui/react";
import img1 from "../Assests/usability-hub.png";
import img2 from "../Assests/Portfolio.png";
import img3 from "../Assests/vedio-player.png";
import img4 from "../Assests/cart.png";
import img5 from "../Assests/rookie.png";
import { AiFillGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";

const Projects = () => {
  const boxProperty = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    w: "300px",
    h: "360px",
    padding: "4",
    bgColor: "#dfecf4",
    margin: "2rem",
    textAlign: "center",
    border: "2px solid black",
    borderRadius: "5%",
    flexWrap: 'wrap',
    transition: "all 0.4s",
    css: {
      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "1px 1px black, -1px -1px black",
      },
    },
  };

  const imgPropety = {
    objectFit: "contain",
    boxSizing: "content-box",
    w: "270px",
    h: '150px',
    borderRadius: "5%",
    
  };

  return (
    <Box id="projects" flexWrap={'wrap'}  >
      <h1>Projects</h1>
      <Box
        className="pBox"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        p={"4rem"}
      >
        <Box {...boxProperty} className="projectBox">
          <Image src={img1} {...imgPropety} />
          <Heading padding={10}>Usability Hub</Heading>
          <Text padding={10}>
            Crafted a front-end clone of Usability Hub, revolutionizing design
            validation by harnessing real user insights for optimized user
            experiences.
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={'20px'}
          >
            <a
              className="anchor"
              href="https://github.com/akashnaruka01/Usabitlity-Hub"
            >
              <AiFillGithub fontSize={"1.5rem"} color="black" />
              Source Code
            </a>
            <a
              className="anchor"
              href="https://akashnaruka01.github.io/Usabitlity-Hub/"
            >
              <SiNetlify fontSize={"1.5rem"} />
              Go to site
            </a>
          </Box>
        </Box>

        <Box {...boxProperty} className="projectBox">
          <Image src={img2} {...imgPropety} />
          <Heading padding={10}>My Portfolio</Heading>
          <Text padding={10} >
            A captivating React-powered portfolio, elegantly showcasing my
            creative journey and skills through immersive design.
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={'20px'}
          >
            <a
              className="anchor"
              href="https://github.com/akashnaruka01/my-portfolio/"
            >
              <AiFillGithub fontSize={"1.5rem"} color="black" />
              Source Code
            </a>
            <a className="anchor" href="/">
              <SiNetlify fontSize={"1.5rem"} />
              Go to site
            </a>
          </Box>
        </Box>

        <Box {...boxProperty} className="projectBox">
          <Image src={img3} {...imgPropety} />
          <Heading padding={10}>Flick Player</Heading>
          <Text padding={10}>
            Immerse yourself in a curated collection of ten videos through a
            dynamic React-based video player
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            gap={'20px'}
            alignItems={"center"}
          >
            <a
              className="anchor"
              href="https://github.com/akashnaruka01/Vedio-Player"
            >
              <AiFillGithub fontSize={"1.5rem"} color="black" />
              Source Code
            </a>
            <a
              className="anchor"
              href="https://vedioplayer-akashnaruka01.netlify.app/"
            >
              <SiNetlify fontSize={"1.5rem"} />
              Go to site
            </a>
          </Box>
        </Box>

        <Box {...boxProperty} className="projectBox">
          <Image src={img4} {...imgPropety} />
          <Heading padding={10}>Shopping Cart</Heading>
          <Text padding={10}>
            Elevate your online shopping journey with a shopping cart project,
            meticulously crafted using FastAPI and Redux Toolkit for streamlined
            e-commerce management
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            gap={'20px'}
            alignItems={"center"}
          >
            <a
              className="anchor"
              href="https://github.com/akashnaruka01/redux-cart"
            >
              <AiFillGithub fontSize={"1.5rem"} color="black" />
              Source Code
            </a>
            <a
              className="anchor"
              href="https://reduxcart-akashnaruka01.netlify.app/"
            >
              <SiNetlify fontSize={"1.5rem"} />
              Go to site
            </a>
          </Box>
        </Box>

        <Box {...boxProperty} className="projectBox">
          <Image src={img5} {...imgPropety} />
          <Heading padding={10}>Rookie Crypto</Heading>
          <Text padding={10}>
            Embark on a real-time crypto exploration with my website, seamlessly
            integrating Coingecko API to provide up-to-date cryptocurrency
            insights
          </Text>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            gap={'20px'}
            alignItems={"center"}
          >
            <a
              className="anchor"
              href="https://github.com/akashnaruka01/CryptoApp"
            >
              <AiFillGithub fontSize={"1.5rem"} color="black" />
              Source Code
            </a>
            <a className="anchor" href="https://rookiecrypto.netlify.app/">
              <SiNetlify fontSize={"1.5rem"} />
              Go to site
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};



export default Projects;
