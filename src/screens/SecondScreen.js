import What from "../components/bad/What"
import ThoughtBubble from "../components/thoughts/Thoughts"
import styles from "./SecondScreen.module.css"
import bad from "../Icons/wired-outline-1122-thumb-down.json"
import good from "../Icons/wired-outline-267-like-thumb-up.json"
import Button from "../components/button/Button"
import AboutMe from "../components/me/Me"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>אני יודעת בדיוק מה את חושבת על תהליכי הרזיה</div>
<div className={styles.description}>וזה הולך ככה..</div>
<div className={styles.row}>
<ThoughtBubble text="ניסיתי כבר המון תהליכים בעבר שלא הצליחו" direction="left" />
<ThoughtBubble text="אני תמיד נעצרת בשלב מסויים וחוזרת לאותו משקל הרבה יותר מיואשת" direction="right" />
</div>
<div className={styles.row}>
<ThoughtBubble text="אני לא מצליחה לעמוד בפיתויים" direction="left" />
<ThoughtBubble text="אם לא הצלחתי עד עכשיו זה כבר אבוד.." direction="right" />
</div>
<div className={styles.description}>חשוב לי שתביני!</div>
<div className={styles.description}><div className={styles.bold}>החסמים </div>האלה מעכבים אותך, <div className={styles.bold}> משאירים אותך במקום</div>  ועם הזמן גוררים</div>
<div className={styles.row}>
<What icon={bad} description="חוסר בטחון עצמי"/>
<What icon={bad} description="אי נוחות עם הגוף שלך"/>

</div>
<div className={styles.row}>

<What icon={bad} description="הזנחה עצמית"/>
<What icon={bad} description="שפיטה עצמית"/>

</div>
<AboutMe/>
<div className={styles.title}>וכן! את יכולה להרגיש אחרת!</div>
<div className={styles.description}><div className={styles.bold}>בתור אחת שהייתה שם </div>אני יכולה להגיד לך בוודאות שכשתסיימי את התהליך את תרגישי :</div>
<div className={styles.row}>
<What icon={good} description="מחוברת לעצמך"/>
<What icon={good} description="אנרגטית במהלך היום"/>

</div>
<div className={styles.row}>

<What icon={good} description="שאת שומרת על איזון תזונתי בכל שלב בחיים"/>
<What icon={good} description="שאת אוכלת מבחירה ולא מחוסר שליטה"/>

</div>
<Button text="פזית, אני רוצה לשמוע עוד"/>
    </>
}
export default SecondScreen