import Card from "./components/Card";
import Header from "./components/Header";
import "../../styles/home.scss";
export default function Home() {
  return (
    <div id="Home">
      <Header HImage="#" Heading="Ethan Carson" />
      <section id="Intro">
        <article>Image</article>
        <article>
          <h1>Ethan Carson</h1>
          <p>Text</p>
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
