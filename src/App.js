import "./App.css";
import Header from "./components/header/header.component";
import Navigation from "./components/nav/navigation.component";
import About from "./components/about/about.component";
import Portfolio from "./components/portfolio/portfolio.component";
import Skills from "./components/skills/skills.component";
import Experience from "./components/experience/experience.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Portfolio />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
