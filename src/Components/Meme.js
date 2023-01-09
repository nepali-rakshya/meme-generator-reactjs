import MemeCSS from "./Meme.module.css";

const Meme = (props) => {
  const handleClick = () => {
    console.log(`The url is ${props.link}`);
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
