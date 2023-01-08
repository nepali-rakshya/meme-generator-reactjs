import MemeCSS from "./Meme.module.css";
import cn from "classnames";

const Meme = () => {
  return (
    <section>
      <form action="">
        <div className={MemeCSS.meme__input}>
          <input type="text" name="setup" id="setup" />
          <input type="text" name="punchline" id="punchline" />
        </div>

        <button className={MemeCSS.meme__button}>
          <div className={MemeCSS.meme__container}>
            <div>Get a new meme image</div>
            <img
              src="/images/window.png"
              alt="window-frame"
              style={{ width: "25px" }}
            />
          </div>
        </button>
      </form>
    </section>
  );
};

export default Meme;
