// Ensure the file is in the correct directory: /app/projects/CloudTileset/page.js
import Header from "@/app/components/Header"; // Make sure Header component exists at this path

import "../../../../styles/project.css";
export default function Project() {
  return (
    <div id="Project">
      <Header
        HImage="/img/shoesheader.png"
        Heading="A Wireframe Website for...E-Shoes?"
      />
      <iframe src="https://www.figma.com/proto/7Dxtpzfajzz6otCVWRhbD5/EShoes-Ethan?node-id=23-1789&t=U8NJJHTb1P4boMf6-1&starting-point-node-id=8%3A123"></iframe>
      <a
        href="https://www.figma.com/proto/7Dxtpzfajzz6otCVWRhbD5/EShoes-Ethan?node-id=23-1789&t=U8NJJHTb1P4boMf6-1&starting-point-node-id=8%3A123"
        target="_blank"
        rel="noopener"
      >
        Click Here if Site Does Not Load
      </a>

      <div id="Reflect">
        Not a bad job for my first run with Figma! To this day, Figma still
        gives me constant difficulty, and yet I choose to fight back to map out
        my amazing designs! There were a few extra features I wanted to add to
        this that I never had time to.
      </div>
    </div>
  );
}
