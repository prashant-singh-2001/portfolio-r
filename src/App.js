import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Socials from "./components/Socials";
import Academics from "./components/Academics";
import Hobbies from "./components/Hobbies";
import Certificates from "./components/Certificates";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Portfolio />
      <Skills />
      <Academics />
      <Certificates/>
      <Hobbies />
      <About />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
