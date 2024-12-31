import Header from "../components/Header";
import Interests from "../components/Interests";
import Accomplish from "../components/Accomplish";
import "../../../styles/aboutme.css";
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

      <Accomplish />
    </main>
  );
}
