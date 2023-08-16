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
    w: "25%",
    padding: "4",
    bgColor: "#d8e9f9",
    margin: "2rem",
    textAlign: "center",
    border: "2px solid black",
    borderRadius: "10%",
    height: "50vh",
    transition: "all 0.4s",
    css: {
      "&:hover": {
        transform: "scale(1.02)",
        boxShadow: "2px 2px black, -2px -2px black",
      },
    },
  };

  const imgPropety = {
    objectFit: "contain",
    boxSizing: "content-box",
    w: "90%",
    m: "8",
    borderRadius: "5%",
  };

  return (
    // <div id="proje">
    //   <div className="timelineBox">
    //     {data.projects.map((item, index) => (
    //       <TimelineItem
    //         heading={item.title}
    //         text={item.date}
    //         index={index}
    //         key={index}
    //       />
    //     ))}
    //   </div>
    // </div>
    <Box id="projects" h={"150vh"}>
      <h1>Projects</h1>
      <Box
        className="pBox"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        p={"4rem"}
        h={"120vh"}
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
            p={15}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
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
          <Text padding={10}>
            A captivating React-powered portfolio, elegantly showcasing my
            creative journey and skills through immersive design.
          </Text>
          <Box
            p={15}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
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
            p={15}
            display={"flex"}
            justifyContent={"space-evenly"}
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
            p={15}
            display={"flex"}
            justifyContent={"space-evenly"}
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
            p={15}
            display={"flex"}
            justifyContent={"space-evenly"}
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

// const TimelineItem = ({ heading, text, index }) => (
//   <div
//     className={`timelineItem ${
//       index % 2 === 0 ? "leftTimeline" : "rightTimeline"
//     }`}
//   >
//     <div>
//       <h2>{heading}</h2>

//       <p>{text}</p>
//     </div>
//   </div>
// );

export default Projects;
