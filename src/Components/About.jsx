import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../Assests/data.json";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <section>
        <article>
          <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a href={i.url} target="blank">
                    View Demo
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section> */}
      
        <section>
          Hello, I'm Akash Singh Naruka from Alwar, Rajasthan currently pursuing
          my Bachelor Of Technology in Computer Science and Engineering from Rustamji Institute Of Technology,
          Gwalior, Madhya Pardesh.
        </section>

        <section>
          I'm Meticulous frontend web developer with over 1 years of front end experience and passion for responsive website design and a firm believer in the mobile-first approach. I am also passionate toward competitive programming and like to solve Data Structure and Algorithm problems on various platforms like GFG, CodeForces, CodeChef, etc.
        </section>

        <section>
          Also i am a three star coder at CodeChef with 1645 Rating and along it i also stage the role of CP Co-Lead at GDSC(Google Developer Student Club) RJIT, Gwalior. 
        </section>
      
    </div>
  );
};

export default About;
