import "./App.css";
import AboutSection from "./components/sections/AboutSection/AboutSection";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import Header from "./layout/Header/Header";

function App() {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
      <AboutSection></AboutSection>
    </>
  );
}

export default App;
