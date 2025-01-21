import Card from "./components/Card";
import Header from "./components/Header";
import "../../styles/home.css";
import * as motion from "motion/react-client";

export default function Home() {
  return (
    <div id="Home">
      <Header
        HImage="/img/Clouds-1.jpg"
        Heading="Custom Cloud Tileset! (Based On Super Mario World's Map)"
      />
      <section id="Intro">
        <motion.article initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <img src="/img/Me.png" alt="Ethan Carson" width="360" height={300} />
        </motion.article>
        <article>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            Hello There!
          </motion.h1>
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
          <Card isHomePage={true}>Highlights.RochIG</Card>
          <Card isHomePage={true}>Projects.Websites.CorningTravelSite</Card>
        </div>
      </section>
    </div>
  );
}
