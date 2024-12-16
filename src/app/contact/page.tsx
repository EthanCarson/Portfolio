import Header from "../components/Header";
import Image from "next/image";
import "../../../styles/cotnact.scss";
export default function Contact() {
  return (
    <div id="Contact">
      <Header HImage="/img/contactheader.jpg" Heading="Contact Me:" />
      <aside>
        <Image src="/img/Me.png" alt="Ethan Carson" width="222" height={215} />
        <p>
          Ethan Carson is a skilled digital designer and owner of Carson Digital
          Designs LLC, a contractor company specializing in creating
          high-quality, responsive websites. With proficiency in HTML5, CSS, and
          frameworks like JavaScript, Next.js, Node.js, React, and Tailwind CSS,
          he combines technical expertise and creative problem-solving to
          deliver tailored solutions. Having worked with advanced AIs and
          cutting-edge technologies, Ethan stays at the forefront of digital
          innovation. Recognized with the Everyday Heroes Award, inducted into
          the National Honors Society, and experienced in lead theatrical roles,
          he demonstrates a blend of technical, academic, and artistic
          excellence.
        </p>
      </aside>
      <section>
        <p>
          I am dedicated to ensuring your contact information is secure through
          my page. As such, the contact form is currently unavalible until
          proper time is dedicated to testing and deubugging.{" "}
          <a href="mailto:digitalec414@outlook.com">
            Click here to access my email.
          </a>
        </p>
        <div className="buttons">
          <button>Send Email</button>
          <button>Call Instead</button>
        </div>
      </section>
    </div>
  );
}
