import "./App.css";
import SquareCard from "./components/elements/SquareCard";
import Navbar from "./components/navbar/Navbar";
import Container from "./components/ui/Container";

function App() {
  return (
    <div className="app">
      <Container>
        <Navbar />
        <SquareCard />
      </Container>
    </div>
  );
}

export default App;
