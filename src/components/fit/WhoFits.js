import styles from "./WhoFits.module.css"
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";

import fit from "../../Icons/wired-outline-285-avatar-female-approved.json"

import ScrollReveal from "scrollreveal";
import Button from "../button/Button";

const WhoFits = () => {
  useEffect(() => {
    ScrollReveal().reveal(`.${styles.header}`, {
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

  const handleComplete = () => {
    setTimeout(() => {
      playerRef?.current?.playFromBeginning();
    }, 2500); // play again after 2.5 seconds
  };

  const playerRef = useRef(null);

  useEffect(() => {
    playerRef?.current?.playFromBeginning();
  }, [])

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.wrapY}>
          <h1 className={styles.header}>מי מתאימה לתהליך:</h1>
          <Player icon={fit} ref={playerRef} size="30%" loop={true} onComplete={handleComplete}></Player>
          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            למי שרעבה כל הזמן, מתוסכלת ומנופחת ורוצה להיות שבעה לאזן משקל לפי מה מתאים לה
            </div>
          </div>
          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              למי שמאמינה בתהליכי גוף נפש
            </div>
          </div>
          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            למי שסובלת מבעיות בריאותיות ורוצה לשפר את בריאותה
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              למי שמוכנה להתמסר לתהליך ולהשקיע בעצמה
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              למי שלא מחפשת פלסתר לפצע, אלא באמת לפתור את הבעיה
            </div>
          </div>

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
              למי שמחוייבת לתהליך
            </div>
          </div>

      

          <div className={styles.text}>
            <span className={styles.checkmark}>✓</span>
            <div className={styles.description}>
            למי שמצבי הרוח שלה תלויים באוכל שמחה, עצב, כעס וכדומה
            </div>
          </div>

      
      
        </div>
      </div>
      <Button text="אני מתאימה לתהליך, בואי נדבר"/>
    </>
  )
}

export default WhoFits