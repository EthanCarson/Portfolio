import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Head from "next/head";
import { Press_Start_2P } from "next/font/google";
import "../../styles/globals.css"; // Ensure the SASS file is imported

const pressStart2P = Press_Start_2P({
  weight: ["400"],
  subsets: ["latin"]
});

// Define the RootLayoutProps type at the top
type RootLayoutProps = {
  children: React.ReactNode;
  headerProps?: {
    HImage?: string;
    Heading?: string;
  };
};

// Correctly export the default function as a named function
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
