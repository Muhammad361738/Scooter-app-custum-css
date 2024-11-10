import Image from "next/image";
import ProductInfo from "./ProductInfo/Page";
import Hero from "./components/Hero/page";
import HighMoter from "./HighMotor/page";
import MultipleAcc from "./MultipleAcc/page";
import Gallery from "./Gallery/page"
import Colors from "./Colors/page";
import Contact from "./Contact/page"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
   <>
   <Hero/>
   <ProductInfo/>
   <HighMoter/>
   <MultipleAcc/>
   <Gallery/>
   <Colors/>
   <Contact/>
   <Footer/>
   </>
  );
}
