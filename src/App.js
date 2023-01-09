import Navbar from "./Components/Navbar";
import Meme from "./Components/Meme";
import "./index.css";
import memeData from "./Components/data.js";

function App() {
  let randomArray = memeData[Math.floor(Math.random() * memeData.length)];
  console.log(randomArray);

  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="meme__form">
        <Meme link={randomArray.url} />
      </div>
    </div>
  );
}

export default App;
