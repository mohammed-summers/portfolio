import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import ProjectList from "./components/ProjectList/ProjectList";
// import ProjectItem from "./components/ProjectItem/Project";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      {/* <ProjectItem /> */}
      <ProjectList />
    </div>
  );
};

export default App;
