import "./App.css";
import HeadingElement from "./components/elements/HeadingElemnt";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/sections/HeroSection";
import SquareCardSlider from "./components/sections/SquareCardSlider";
import Container from "./components/Container";

function App() {
  return (
    <div className="app">
      <Container>
        <Navbar />
        <HeroSection />
        <HeadingElement
          tagline={"benefits"}
          header={"Let’s make your ideas break through"}
          description={
            "Find the most up-to-date vocabulary of images, videos, signs, symbols, and fonts"
          }
        />
        <SquareCardSlider />
      </Container>
    </div>
  );
}

export default App;
