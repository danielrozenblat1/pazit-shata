
import { useEffect } from "react";
import styles from "./Thoughts.module.css"
import ScrollReveal from "scrollreveal";
const ThoughtBubble=({ text, direction }) => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.thoughtBubble}`, {
      duration: 600,
      distance: "60px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 200,
      delay: 100,
      scale: 1,
    });
  }, [])


    return (
      <div className={`${styles.thoughtBubble} ${styles[direction]}`}>
        {text}
      </div>
    );
  }
  export default ThoughtBubble