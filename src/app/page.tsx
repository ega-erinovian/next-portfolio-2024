import "./App.css";
import Header from "./sections/Header";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contacts";
import Footer from "./sections/Footer";

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
