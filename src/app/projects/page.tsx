import Header from "../components/Header";
import Image from "next/image";
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
            width={378}
            height={378}
          />
          <Image
            src="/img/music.jpg"
            alt="Musical Chorale"
            width={378}
            height={378}
          />
        </article>
        <article>
          <p>Stuff</p>
        </article>
      </section>
      <div>Project Showcase</div>
    </div>
  );
}
