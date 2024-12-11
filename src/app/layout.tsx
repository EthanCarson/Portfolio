import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Head from "next/head";
import { Press_Start_2P } from "next/font/google";
import "../../styles/globals.scss"; // Ensure the SASS file is imported

// Initialize the font with desired options
const pressStart2P = Press_Start_2P({
  weight: ["400"], // Specify the font weight(s) you need
  subsets: ["latin"] // Specify the character subset(s) you need
});

type RootLayoutProps = {
  children: React.ReactNode;
  headerProps?: {
    HImage?: string;
    Heading?: string;
  };
};

export default function RootLayout({ children, headerProps }: RootLayoutProps) {
  const { HImage = "", Heading = "" } = headerProps || {};

  return (
    <html lang="en" className={pressStart2P.className}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Navigation />
        <Header HImage={HImage} Heading={Heading} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
