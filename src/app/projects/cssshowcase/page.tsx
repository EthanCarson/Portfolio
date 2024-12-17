// Ensure the file is in the correct directory: /app/projects/CloudTileset/page.js
import Header from "@/app/components/Header"; // Make sure Header component exists at this path

import "../../../../styles/project.css";
export default function Project() {
  return (
    <div id="Project">
      <Header HImage="/img/cssheader.jpg" Heading="CSS Showcase!" />
      <iframe src="https://ecarson2.csc.flcc.cloud/csc162/Stylish/index.html"></iframe>

      <div id="Reflect">
        Some of my most creative CSS to date! This was super fun to make, and it
        is great to have a reference of more complicated CSS, even if it does
        not get used much. Only regret: spending too much time on this.
      </div>
    </div>
  );
}
