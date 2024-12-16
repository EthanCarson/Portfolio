import Header from "../components/Header";
import Interests from "../components/Interests";
import Accomplish from "../components/Accomplish";
import "../../../styles/aboutme.scss";
export default function AboutMe() {
  return (
    <div id="AboutMe">
      <Header HImage="/img/aboutheader.jpg" Heading="About Me:" />
      <section>
        <h1>Interests:</h1>
        <Interests>Golf</Interests>
        <Interests>Pixel</Interests>
        <Interests>Retro</Interests>
        <Interests>BoardGames</Interests>
      </section>
      <aside>
        <h1>Accomplishments:</h1>
        <section>
          <Accomplish />
        </section>
      </aside>
    </div>
  );
}
