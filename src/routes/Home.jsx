import AboutUs from "../components/AboutUs";
import Welcome from "../components/Welcome";
import Experience from "../components/Experience";
import Background from "../components/Background";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  

  return (
    <main>
      <Welcome />
      <AboutUs />
      <Experience />
      <Background />
      <Projects />
      {/* <Contact /> */}
    </main>
  );
};

export default Home;
