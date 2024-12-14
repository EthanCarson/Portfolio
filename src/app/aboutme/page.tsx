import Header from "../components/Header";
import Interests from "../components/Interests";
import Accomplish from "../components/Accomplish";
export default function AboutMe() {
  return (
    <div id="AboutMe">
      <Header HImage="#" Heading="Ethan Carson" />
      <section>
        <h1>Interests:</h1>
        <Interests>Golf</Interests>
        <Interests>Pixel Art</Interests>
        <Interests>Retro Gaming</Interests>
        <Interests>Board Games</Interests>
        <Interests>Music</Interests>
      </section>
      <aside>
        <h1>Accomplishments:</h1>
        <section>
          <Accomplish>NHS</Accomplish>
          <Accomplish>EverydayHeroes</Accomplish>
          <Accomplish>Musical</Accomplish>
          <Accomplish>AllCounty</Accomplish>
          <Accomplish>Top10</Accomplish>
        </section>
      </aside>
    </div>
  );
}
