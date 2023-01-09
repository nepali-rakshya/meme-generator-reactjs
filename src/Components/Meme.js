import MemeCSS from "./Meme.module.css";
import memeData from "./data";

const Meme = () => {
  let memeLength = memeData[0].data.memes.length;
  const handleClick = () => {
    let randomArray =
      memeData[0].data.memes[Math.floor(Math.random() * memeLength)];
    console.log(randomArray.url);
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
    </section>
  );
};

export default Meme;
