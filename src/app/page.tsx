import Image from "next/image";
import Header from "./components/Header";
import  Main  from "./components/Main";
import Propostas from "./components/Propostas";
import Social from "./components/Social";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function Home() {
  return (
    <>
     <Header/>
     <Main/>
     <Propostas/>
     <Social/>
     <ScrollToTopButton/>
    </>
  );
}
