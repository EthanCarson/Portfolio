import Header from "../components/Header";
import Interests from "../components/Interests";
import Accomplish from "../components/Accomplish";
import "../../../styles/aboutme.css";

/*

The About Me page contains a section detailing my ongoing hobbies and interests, and an aside describing major accomplishments in my life. This aside is moved to the Accomplish component for easier readability.
Ethan Carson
Optimized 12/31/24
Created with help from ChatGPT

*/
export default function AboutMe() {
  return (
    <main id="AboutMe">
      <Header HImage="/img/aboutheader.jpg" Heading="About Me:" />

      <section>
        <h1>Interests:</h1>

        <Interests>Golf</Interests>
        <Interests>Pixel</Interests>
        <Interests>Retro</Interests>
        <Interests>BoardGames</Interests>
      </section>

      {/*Accomplish contains the affromentioned aside*/}

      <Accomplish />
    </main>
  );
}
