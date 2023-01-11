import MemeCSS from "./Meme.module.css";
import memeData from "./data";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState("");

  let memeLength = memeData[0].data.memes.length;
  const handleClick = () => {
    let randomArray =
      memeData[0].data.memes[Math.floor(Math.random() * memeLength)];
    setMemeImage(randomArray.url);
  };

  return (
    <section className={MemeCSS.memeGenerator}>
      <div className={MemeCSS.meme__input}>
        <input type="text" placeholder="Top text" />
        <input type="text" placeholder="Bottom text" />
      </div>

      <button className={MemeCSS.meme__button} onClick={handleClick}>
        <div className={MemeCSS.meme__container}>
          <div>Get a new meme image</div>
          <img
            src="/images/window.png"
            alt="window-frame"
            style={{ width: "25px" }}
          />
        </div>
      </button>
      <div className={MemeCSS.meme__image}>
        <img
          src={memeImage}
          alt="meme-image"
          className={MemeCSS["meme__image--width"]}
        />
      </div>
    </section>
  );
};

export default Meme;
