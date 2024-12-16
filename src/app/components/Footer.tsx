import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div id="Email">
        Email:
        <a href="mailto:digitalec414@outlook.com"> digitalec414@outlook.com</a>
      </div>

      <div id="Icons">
        <div id="Logo">
          <img src="/logo.svg" width={100} alt="Logo" />
        </div>
        <div id="Social">
          <a href="https://www.facebook.com/people/Ethan-Carson/pfbid0kH1xukHcJBvptKQFgZznEoMND3JAaPXF1U9eSNUKypQ7xhBarVFoTZz7Wv9HJE89l/">
            <Image src="/facebook.svg" alt="Facebook" width={25} height={25} />
          </a>
          <a href="https://www.linkedin.com/in/ethan-carson-98978332a/">
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
