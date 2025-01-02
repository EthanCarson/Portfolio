import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div id="Email">
        Email: &#32; {/*I tried*/}
        <a href="mailto:digitalec414@outlook.com"> digitalec414@outlook.com</a>
      </div>

      <div id="Icons">
        <div id="Logo">
          <Image src="/logo.svg" width={100} height={100} alt="Logo" />
        </div>
        <div id="Social">
          <a
            rel="noopener"
            href="https://www.facebook.com/people/Ethan-Carson/pfbid0kH1xukHcJBvptKQFgZznEoMND3JAaPXF1U9eSNUKypQ7xhBarVFoTZz7Wv9HJE89l/"
            target="_blank"
          >
            <Image src="/facebook.svg" alt="Facebook" width={25} height={25} />
          </a>
          <a
            rel="noopener"
            href="https://www.linkedin.com/in/ethan-carson-98978332a/"
            target="_blank"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={25} height={25} />
          </a>
          <Image src="/youtube.svg" alt="Youtube" width={25} height={25} />
        </div>
      </div>
      <div id="Copyright">
        Copyright 2024 Ethan Carson
        <br />
        All Images not created by me or my work are from Pixabay.com. All Rights
        go to their Respective Owners
      </div>
    </footer>
  );
}
