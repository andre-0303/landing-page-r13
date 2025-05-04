import Image from "next/image";
import Header from "./components/Header";
import  Main  from "./components/Main";
import Propostas from "./components/Propostas";

export default function Home() {
  return (
    <>
     <Header/>
     <Main/>
     <Propostas/>
    </>
  );
}
