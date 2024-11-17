import Header from "@/features/sections/Header";
import "./App.css";
import About from "@/features/sections/About";
import Skills from "@/features/sections/Skills";
import Experience from "@/features/sections/Experience";
import Projects from "@/features/sections/Projects";
import Contacts from "@/features/sections/Contacts";
import Footer from "@/features/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}
