"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../../../../styles/resume.css";
const Resume: React.FC = () => {
  // List of fake URLs (use real URLs in production)
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
    programs: (
      <div id="programs">
        <ul>
          <li className="orange">HTML5: &#9635;&#9635;&#9635;&#9635;&#9635;</li>
          <li className="purple">CSS: &#9635;&#9635;&#9635;&#9635;&#9635;</li>
          <li className="yellow">
            JavaScript: &#9635;&#9635;&#9635;&#9633;&#9633;
          </li>
          <li>Next.js: &#9635;&#9635;&#9633;&#9633;&#9633;</li>
          <li className="green">
            Node.js: &#9635;&#9635;&#9635;&#9635;&#9633;
          </li>
          <li className="blue">React: &#9635;&#9635;&#9635;&#9633;&#9633;</li>
          <li className="lblue">
            Tailwind CSS: &#9635;&#9635;&#9635;&#9635;&#9633;
          </li>
        </ul>
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
    'Type a command below (e.g., "overview", "programs", "exampleHTML", "art", "ai")'
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
        'Type a valid command like "overview", "programs", "exampleHTML", "art", or "ai".'
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
              Valid values are overview, programs, exampleHTML, art, and ai.
              Have fun!
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
