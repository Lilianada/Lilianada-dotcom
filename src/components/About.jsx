import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const { theme } = useTheme();

  return (
    <section className="lg:mb-32">
      <div id="about" className="lg:hidden">
        <h1 className={`text-[56px] leading-[50px] font-bold mb-8 w-1/2`}>
          I'm Lilian Okeke.
        </h1>

        <div className={`space-y-6 text-sm font-normal`}>
          <p className="leading-7">
            Having spent over four years as a MERN Stack Developer, I
            transitioned into{" "}
            <span style={{ color: theme.accent }}>Product Management</span>,
            where I now specialize in managing the design and development of
            digital solutions and experiences.
          </p>
          <p className="leading-7">
            Currently, I work at Building Bloques Creative Studio, a digital and
            visual studio where I lead the development team as a  <span style={{ color: theme.accent }}>Product
            Manager</span>. We focus on crafting tailored solutions for a diverse range
            of brands and businesses, creating exceptional experiences through
            the digital products we design and build.
          </p>
          <p className="leading-7">
            When I’m not coding or exploring new designs, I am at the gym
            hitting new PRs and on Instagram encouraging women in to becoming
            the fittest versions of themselves.
          </p>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <div className="rounded-full h-16 w-16 flex items-center justify-center">
            <img
              src="/image/image.png"
              alt="Avatar"
              className="h-12 w-12 object-cover rounded-full"
            />
          </div>
          <div className="flex space-x-3">
            {/* Use react-dom */}
            <a
              href="https://legacy.reactjs.org/docs/react-dom.html"
              className="flex items-center gap-1 text-sm"
            >
              <FaGithub size={20} />
              GitHub
            </a>
            <a
              href="https://legacy.reactjs.org/docs/react-dom.html"
              className="flex items-center gap-1 text-sm"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://legacy.reactjs.org/docs/react-dom.html"
              className="flex items-center gap-1 text-sm"
            >
              <FaLinkedin size={20} />
              Twitter
            </a>
          </div>
        </div>
      </div>

{/* Desktop */}
      <div
        className="min-h-screen hidden lg:flex flex-row"
      >
        <div className="" style={{ color: theme.primaryText }}>
          <h1 className={`text-[70px] font-bold leading-[70px] w-1/2`}>
          Hi, <br/>
            I'm Lilian Okeke.
          </h1>
          <div className={`text-base text-justify flex justify-end my-6`}>
            <p className="w-1/2">
            With over four years of experience as a MERN Stack Developer, I specialize in building performant, user-focused digital experiences. While I’ve recently expanded into{" "}
  <span style={{ color: theme.accent }}>Product Management</span>, my foundation remains in frontend development, where I bring designs to life through clean, accessible, and responsive code.

            </p>
          </div>

          <div className={`text-base flex my-6`}>
            <p className="w-1/2 text-justify">
            I’m the founder of <span style={{ color: theme.accent }}>Building Bloques Creative Studio</span>, a digital and visual studio where I lead multidisciplinary teams to design and develop web products and creative tools for brands and businesses. My role spans product direction, UX thinking, and frontend execution, giving me a well-rounded view of how great digital experiences come together.
            </p>
          </div>
          <div className={`text-base flex justify-end my-6 text-left`}>
            <p className="w-1/2">
            I’m currently open to roles as a <span style={{ color: theme.accent }}>Frontend Developer</span>, with an interest in contributing to teams that value both great design and product thinking. I’m also open to hybrid or product-focused roles, especially where I can bridge the gap between users, design, and engineering.

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
