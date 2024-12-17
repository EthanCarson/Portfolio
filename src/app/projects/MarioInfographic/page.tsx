// Ensure the file is in the correct directory: /app/projects/CloudTileset/page.js
import Header from "@/app/components/Header"; // Make sure Header component exists at this path
import Image from "next/image";
import "../../../../styles/project.css";
export default function Project() {
  return (
    <div id="Project">
      <Header
        HImage="/img/marinfographicheader.png"
        Heading="Mario Infographic"
      />

      <p>
        For my Computer-Sciences Portal Class at FLCC, I was tasked with
        creating a Infographic for an important step in technology, and feature
        it on this page. I decided to make an infographic for the Original Super
        Mario Bros&trade. It goes without saying that this game pratically
        revitialized the gaming industry in America, and begun arguably the most
        famous video game franchise. Working in Canva, I took the extra time to
        base the style of this infographic loosely on the original game, brining
        that extra charm!
      </p>
      <div className="secondary">
        <Image
          src="/img/csmarinfographic.png"
          alt="Infographic"
          width={800}
          height={2000}
        />
        <div className="legal">
          <em>
            Super Mario&trade; and Super Mario Bros&trade; are also property of
            Nintendo. All rights go to their respective owners.
          </em>
        </div>
      </div>
      <div id="Reflect">
      I feel like this infographic did a good job. I did not have as much time to make this as I wished, but the final design definitely harpors back to the original game. I just wish I had more data and more planning.
      </div>
    </div>
  );
}
