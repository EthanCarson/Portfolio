// Ensure the file is in the correct directory: /app/projects/CloudTileset/page.js
import Header from "@/app/components/Header"; // Make sure Header component exists at this path

import "../../../../styles/project.css";
export default function Project() {
  return (
    <div id="Project">
      <Header HImage="/img/corningheader.jpg" Heading="Corning Travelsite!" />
      <iframe src="https://ecarson2.csc.flcc.cloud/csc162/build/index.html"></iframe>

      <div id="Reflect">
        My Second Tailwindcss Project. I had a really good color pallete and overall asthetic here, and made great use of iframes! However, all of this is tarnished by incosistent padding, negative space, and typography! From this point forward, I watch these aspects closely, so the page is cohesive!
      </div>
    </div>
  );
}
