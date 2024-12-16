import Header from "../components/Header";
import Image from "next/image";
import CategorySection from "../components/CategorySection";
import "../../../styles/projectshow.scss";
export default function Projects() {
  return (
    <div id="Projects">
      <Header HImage="#" Heading="Ethan Carson" />
      <h1>Custom Web Pages, Music, Art and More!</h1>
      <section>
        <article>
          <Image
            src="/img/webdev.jpg"
            alt="Web Development"
            width={150}
            height={150}
          />
          <Image
            src="/img/music.jpg"
            alt="Musical Chorale"
            width={150}
            height={150}
          />
        </article>
        <article>
          <p>
            I love spending my free time diving into projects. I am also
            involved in plenty of school projects as I journey through my degree
            program. This page serves as a showcase of those amazing projects!
          </p>
        </article>
      </section>
      <section className="secondary">
        <CategorySection category="Websites" />
        <CategorySection category="Pixel Art" />
        <CategorySection category="College Projects" />
      </section>
    </div>
  );
}
