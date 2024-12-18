"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../../../styles/resume.css";

const Resume: React.FC = () => {
  const pageUrls = [
    "https://ecarson2.csc.flcc.cloud/csc162/",
    "https://ecarson2.csc.flcc.cloud/csc162/Portfolio/index.html",
    "https://ecarson2.csc.flcc.cloud/csc162/build/index.html",
    "https://portfolio-qosg.vercel.app/"
    // Add more URLs as needed
  ];

  // Function to randomly select a URL from the list
  const getRandomPage = () => {
    const randomIndex = Math.floor(Math.random() * pageUrls.length);
    return pageUrls[randomIndex];
  };

  // Define the content mapping, including both strings and JSX
  const contentMapping: { [key: string]: React.ReactNode } = {
    overview: (
      <div id="overview">
        <Image src="/img/Me.png" alt="Ethan Carson" width="222" height={215} />
        <p>
          Ethan Carson is a skilled digital designer and owner of Carson Digital
          Designs LLC, a contractor company specializing in creating
          high-quality, responsive websites. With proficiency in HTML5, CSS, and
          frameworks like JavaScript, Next.js, Node.js, React, and Tailwind CSS,
          he combines technical expertise and creative problem-solving to
          deliver tailored solutions. Having worked with advanced AIs and
          cutting-edge technologies, Ethan stays at the forefront of digital
          innovation. Recognized with the Everyday Heroes Award, inducted into
          the National Honors Society, and experienced in lead theatrical roles,
          he demonstrates a blend of technical, academic, and artistic
          excellence.
        </p>
      </div>
    ),
    experience: (
      <div id="experience">
        <dl>
          <dd className="orange">
            HTML5: &#9635;&#9635;&#9635;&#9635;&#9635;
            <dt>
              Developed multiple web pages using HTML, demonstrating a strong
              understanding of core HTML components and best practices for page
              structure. Proficient in enhancing HTML functionality through the
              integration of additional packages and tools.
            </dt>
          </dd>
          <dd className="purple">
            CSS: &#9635;&#9635;&#9635;&#9635;&#9635;
            <dt>
              Proficient in applying inline styles, page styles, and CSS, with a
              clear understanding of when to use each approach. Skilled in
              utilizing primary styling techniques and more advanced CSS rules.
              Experienced in extending CSS with frameworks, including SASS for
              portfolio development and TailwindCSS for a travel site.
            </dt>
          </dd>
          <dd className="yellow">
            JavaScript: &#9635;&#9635;&#9635;&#9633;&#9633;
            <dt>
              Skilled in understanding core object structures and DOM
              manipulation. Experienced in creating functions and executing them
              within HTML pages. Capable of expanding functionality using
              frameworks like React.
            </dt>
          </dd>
          <dd>
            Next.js: &#9635;&#9635;&#9633;&#9633;&#9633;
            <dt>
              Developed a portfolio page using Next.js, with a strong grasp of
              its core features, including routing and deployment. Currently
              working on an AI-based website for a client, leveraging Next.js
              for the project.
            </dt>
          </dd>
          <dd className="green">
            Node.js: &#9635;&#9635;&#9635;&#9635;&#9633;
            <dt>
              Proficient in managing packages and dependencies, with a solid
              understanding of Node.js fundamentals. Regularly use Node.js in
              web development projects.
            </dt>
          </dd>
          <dd className="blue">
            React: &#9635;&#9635;&#9635;&#9633;&#9633;
            <dt>
              Experienced in using React with both Vite and Next.js. Strong
              understanding of component fundamentals, with the ability to
              effectively implement primary features for dynamic components.
              Currently developing an AI-based website for a client, utilizing
              React components.
            </dt>
          </dd>
          <dd className="lblue">
            TailwindCSS: &#9635;&#9635;&#9635;&#9635;&#9633;
            <dt>
              Proficient in using TailwindCSS for rapid prototyping and design
              work. Able to identify and apply best practices for Tailwind, and
              seamlessly integrate it with other CSS methodologies.
            </dt>
          </dd>
        </dl>
      </div>
    ),
    // Random page loading using iframe from a list of URLs
    examplehtml: (
      <div id="exampleHTML">
        <p>Example HTML Content:</p>
        <iframe
          src={getRandomPage()}
          width="100%"
          height="500px"
          title="Random Example Page"
        />
      </div>
    ),
    art: (
      <div id="art">
        <Image src="/img/pixel.jpg" alt="Pixel Art" width="231" height="231" />
        <p>
          I have experimented with pixel art as a medium for a very long time.
          I’ve kept records from works of mine as early as 6th grade. My skills
          in this genre have grown exponentially since then. I love working
          under limitations and making my art appear as if it comes from a retro
          console. I am really impressed with my skills as they are today.
        </p>
      </div>
    ),
    ai: (
      <p>
        I am a firm believer that Artificial Intelligence is the way of the
        future. I use AI very often in my work. Most of this page was generated
        with the help of AI. The main difference I strive for? I aim to use AI
        as a tool to expand my capablilities, not do the work for me. This is
        the approach I wish to take my work: doing whatever I can to make the
        best product possible!
      </p>
    )
  };

  // State to hold the content that will be displayed
  const [content, setContent] = useState<React.ReactNode>(
    'Type a command below (e.g., "overview", "experience", "exampleHTML", "art", "ai")'
  );

  // State to hold the user input
  const [inputValue, setInputValue] = useState<string>("");

  // Handle input changes and update content accordingly
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toLowerCase(); // Convert to lowercase for case-insensitive matching
    setInputValue(event.target.value);

    // Check if the input matches any of the valid content keys
    if (contentMapping[input]) {
      setContent(contentMapping[input]);
    } else {
      setContent(
        'Type a valid command like "overview", "experience", "exampleHTML", "art", or "ai".'
      );
    }
  };

  return (
    <div id="Resume">
      <div id="ResContent">
        {/* Render dynamic content, either JSX elements or strings */}
        {typeof content === "string" ? (
          <div dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          content
        )}
      </div>
      <hr />
      <div id="ResTerm">
        <div>
          {/* Mimicking a React component structure with input field */}
          <span>
            <span className="lblue">&lt;</span>
            <span className="purple">Resume</span>{" "}
            <span className="yellow">content=</span>
            &quot;
          </span>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type content here"
          />
          <span>
            &quot;<span className="lblue"> /&gt;</span>
            <span className="blue">
              Valid values are overview, experience, exampleHTML, art, and ai.
              Have fun!
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
