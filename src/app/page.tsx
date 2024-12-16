import Card from "./components/Card";
import Header from "./components/Header";
import "../../styles/home.scss";
import Image from "next/image";
export default function Home() {
  return (
    <div id="Home">
      <Header>PixelArt</Header>
      <section id="Intro">
        <article>
          <Image
            src="/img/Me.png"
            alt="Ethan Carson"
            width="444"
            height="430"
          />
        </article>
        <article>
          <h1>Hello There!</h1>
          <p>
            My name is Ethan Carson! I was born in Savona NY in the year 2006. I
            graduated from Campbell-Savona Jr/Sr High School, and am now
            pursuing my dreams at Finger Lakes Community College, aiming for a
            degree in Web and Mobile Development! I am currently working as an
            intern for an AI company and it&apos;s website. I love spending my
            free time getting inveloped in lots of personal projects!
          </p>
        </article>
      </section>
      <section className="secondary">
        <h1>Personal Highlights:</h1>
        <div>
          <Card isHomePage={true}>RochIG</Card>
          <Card isHomePage={true}>CorningTravelSite</Card>
        </div>
      </section>
    </div>
  );
}
