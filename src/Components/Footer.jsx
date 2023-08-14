import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiOutlineUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/95901914?v=4"}
          alt="founder"
        />
        <h2>Akash Singh</h2>
        <p>Your future is decided by what you do today not tommorow.</p>
      </div>

      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://github.com/akashnaruka01/">
            <AiFillGithub />
          </a>
          <a href="https://instagram.com">
            <AiFillInstagram />
          </a>
          <a href="https://twitter.com/akashnaruka01">
            <AiFillTwitterCircle />
          </a>
          <a  href="https://www.linkedin.com/in/akash-singh-78897620b/">
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#header">
        <AiOutlineUp />
      </a>
    </footer>
  );
};

export default Footer;
