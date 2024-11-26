import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import About from "@/components/About";
import Brewery from "@/components/Brewery";
import Mosaic from "@/components/Mosaic";
import Beers from "@/components/Beers";
import Pub from "@/components/Pub";
import Testimonials from "@/components/Testimonials";


import Maps from "@/components/Maps";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Whatsapp from "@/components/subcomponents/Whatsapp";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <About />
      <Brewery />
      <Mosaic />
      <Beers />
      <Testimonials />
      <Pub />


      <Contact />
      <Maps />
      <Footer />
      <Whatsapp />
    </>
  );
}
