import Navbar from "./Components/Navbar";
import Meme from "./Components/Meme";
import "./index.css";
import memeData from "./Components/data.js";

function App() {
  const memeElement = memeData.map((item) => {
    return <Meme key={item.id} img={item.url} />;
  });

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="meme__form">{memeElement}</div>
    </div>
  );
}

export default App;
