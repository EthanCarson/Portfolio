"use client";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { ReactNode } from "react"; // Correctly import ReactNode
import Head from "next/head";
import { Press_Start_2P } from "next/font/google";
import "../../styles/globals.css"; // Ensure the SASS file is imported
import { motion, useTransform, useScroll } from "framer-motion";
const pressStart2P = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"]
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const parallaxEffect = useTransform(scrollYProgress, [0, 1], [0, 500]);
  return (
    <html lang="en" className={pressStart2P.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <motion.body style={{ y: parallaxEffect }}>
        <Navigation />
        {children}
        <Footer />
      </motion.body>
    </html>
  );
}
