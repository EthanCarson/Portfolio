// Ensure the file is in the correct directory: /app/projects/CloudTileset/page.js
import Header from "@/app/components/Header"; // Make sure Header component exists at this path

import "../../../../styles/project.css";
export default function Project() {
  return (
    <div id="Project">
      <Header
        HImage="/img/messyheader.png"
        Heading="A Tricky Problem Solved by Pseudocode!"
      />
      <iframe src="https://docs.google.com/document/d/1QYnJPmPxXjBjcMHpyFHebO99AkWzbfcuF4KGFYOMxG8/edit?usp=sharing"></iframe>

      <div id="Reflect">
        Ah yes, one of the few Computing Sciences Portal assignments with a due
        date! This was very fun to work on, and I like my final solution. Some
        may argue the math could be a bit intensive, but I really tried to water
        it down as much as possible.
      </div>
    </div>
  );
}
