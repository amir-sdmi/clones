import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SquareCardSlider from "./components/sections/SquareCardSlider";
import Container from "./components/ui/Container";

function App() {
  return (
    <div className="app">
      <Container>
        <Navbar />
        <SquareCardSlider />
      </Container>
    </div>
  );
}

export default App;
