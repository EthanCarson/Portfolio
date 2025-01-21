import Image from "next/image";
import * as motion from "motion/react-client";
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
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            rel="noopener"
            href="https://www.facebook.com/people/Ethan-Carson/pfbid0kH1xukHcJBvptKQFgZznEoMND3JAaPXF1U9eSNUKypQ7xhBarVFoTZz7Wv9HJE89l/"
            target="_blank"
          >
            <Image src="/facebook.svg" alt="Facebook" width={30} height={30} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            rel="noopener"
            href="https://www.linkedin.com/in/ethan-carson-98978332a/"
            target="_blank"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={30} height={30} />
          </motion.a>
          <Image src="/youtube.svg" alt="Youtube" width={30} height={30} />
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
