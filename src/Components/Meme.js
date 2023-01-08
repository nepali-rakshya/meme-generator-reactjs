import MemeCSS from "./Meme.module.css";

const Meme = (props) => {
  function handleClick() {
    return <h1>I am don</h1>;
  }

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
      <div className="img__generated">
        <p className="para">Henlo</p>
      </div>
    </section>
  );
};

export default Meme;
