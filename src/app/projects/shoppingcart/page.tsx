// Ensure the file is in the correct directory: /app/projects/CloudTileset/page.js
import Header from "@/app/components/Header"; // Make sure Header component exists at this path

import "../../../../styles/project.css";
export default function Project() {
  return (
    <div id="Project">
      <Header
        HImage="/img/shoppingcartheader.png"
        Heading="A New Shopping Cart Design!"
      />
      <iframe src="https://docs.google.com/document/d/1Tn6y31PJnVnqerLO-NNVQzoPUX2a2DLJrwIgJRY1Uek/edit?usp=sharing"></iframe>

      <div id="Reflect">
        Another quick and satisfying project. This project got me involved in an
        active discussion with my class, and showcases my computational thinking
        skills. It does fall onto the list of projects I wish I had more time
        with, but the final page is pretty cool.
      </div>
    </div>
  );
}
