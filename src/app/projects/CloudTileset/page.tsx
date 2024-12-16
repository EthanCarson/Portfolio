// Ensure the file is in the correct directory: /app/projects/CloudTileset/page.js
import Header from "@/app/components/Header"; // Make sure Header component exists at this path
import Image from "next/image";
import "../../../../styles/project.css";
export default function Project() {
  return (
    <div id="Project">
      <Header HImage="/img/aboutheader.jpg" Heading="About Me:" />
      <h1>What&apos;s This?</h1>
      <p>
        This is a pixel art tile set in the same style as Super Mario World,
        more specifically the map of said game. Aside from the background of the
        Star World, Super Mario World doesn&apos;t have any cloudy areas on the
        map. A personal project of mine needed said cloudy graphics, and I got
        sick of making up new graphics every time. And so, I decided to make my
        own definitive tileset for this purpose, and posted my results to SMW
        Central, a community of online SMW fans who have taken the game to a
        whole new level.
      </p>
      <div className="secondary">
        <h1>Image Showcase!</h1>
        <Image src="/img/image.png" alt="Map Image" width={200} height={200} />
        <Image
          src="/img/image (1).png"
          alt="Map Image"
          width={200}
          height={200}
        />
        <Image
          src="/img/image (2).png"
          alt="Map Image"
          width={200}
          height={200}
        />
        <Image
          src="/img/imagefix.png"
          alt="Map Image"
          width={200}
          height={200}
        />
        <div className="legal">
          <em>
            For legal purposes, no pirated ROMS are distributed here or on
            SMWCentral. For more information, check out
            <a href="https://www.smwcentral.net/?p=cms&page=1219789-legal-information">
              this page
            </a>
            . While the tileset was made by me, extra graphics and characters
            are property of Nintendo. Super Mario&trade; and Super Mario
            World&trade; are also property of Nintendo. All rights go to their
            respective owners.
          </em>
        </div>
      </div>
    </div>
  );
}
