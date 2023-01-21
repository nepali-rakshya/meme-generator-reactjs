import MemeCSS from "./Meme.module.css";
import memeData from "./data";
import { useState } from "react";

const Meme = () => {
  const [memeImage, setMemeImage] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memeData);

  let memeLength = allMemeImages[0].data.memes.length;
  const handleClick = () => {
    let randomArray =
      allMemeImages[0].data.memes[Math.floor(Math.random() * memeLength)];
    setMemeImage((prevMeme) => ({
      ...prevMeme,
      randomImage: randomArray.url,
    }));
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
          src={memeImage.randomImage}
          alt="meme-image"
          className={MemeCSS["meme__image--width"]}
        />
      </div>
    </section>
  );
};

export default Meme;
