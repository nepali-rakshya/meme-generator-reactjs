import Navbar from "./Components/Navbar";
import Meme from "./Components/Meme";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="meme__form">
        <Meme />
      </div>
    </div>
  );
}

export default App;
