import What from "../components/bad/What"
import ThoughtBubble from "../components/thoughts/Thoughts"
import styles from "./SecondScreen.module.css"
import happy from "../Icons/wired-outline-261-emoji-smile-hover-smile.json"
import meditation from "../Icons/wired-outline-628-yoga-female-hover-pinch.json"
import secure from "../Icons/wired-outline-285-avatar-female-approved.json"
import energy from "../Icons/wired-outline-633-female-hover-success.json"
import cry from "../Icons/wired-outline-266-emoji-cry-hover-pinch.json"
import sad from "../Icons/wired-outline-263-emoji-sad-hover-pinch.json"
import judge from "../Icons/wired-outline-1629-bathtub-mirror-hover-pinch.json"
import discomfort from "../Icons/wired-outline-283-avatar-female-cross-hover-pinch.json"
import good from "../Icons/wired-outline-267-like-thumb-up.json"
import Button from "../components/button/Button"
import AboutMe from "../components/me/Me"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>אני יודעת בדיוק מה את חושבת על תהליכי הרזיה</div>
<div className={styles.description}>וזה הולך ככה..</div>
<div className={styles.row}>
<ThoughtBubble text="אם לא הצלחתי עד עכשיו זה כבר אבוד.." direction="left" />
<ThoughtBubble text="ניסיתי כבר המון תהליכים בעבר שלא הצליחו" direction="right" />

</div>
<div className={styles.row}>
<ThoughtBubble text="אני תמיד נעצרת בשלב מסויים וחוזרת לאותו משקל הרבה יותר מיואשת" direction="left" />
<ThoughtBubble text="אני לא מצליחה לעמוד בפיתויים" direction="right" />

</div>
<div className={styles.description}>חשוב לי שתביני!</div>
<div className={styles.description}><div className={styles.bold}>החסמים </div>האלה מעכבים אותך, <div className={styles.bold}> משאירים אותך במקום</div>  ועם הזמן גוררים</div>
<div className={styles.row}>
<What icon={sad} description="חוסר בטחון עצמי"/>
<What icon={cry} description="אי נוחות עם הגוף שלך"/>

</div>
<div className={styles.row}>

<What icon={discomfort} description="הזנחה עצמית"/>
<What icon={judge} description="שפיטה עצמית"/>

</div>
<AboutMe/>
<div className={styles.title}>וכן! את יכולה להרגיש אחרת!</div>
<div className={styles.description}><div className={styles.bold}>בתור אחת שהייתה שם </div>אני יכולה להגיד לך בוודאות שכשתסיימי את התהליך את תרגישי :</div>
<div className={styles.row}>
<What icon={meditation} description="מחוברת לעצמך"/>
<What icon={energy} description="אנרגטית במהלך היום"/>

</div>
<div className={styles.row}>

<What icon={happy} description="שאת שומרת על איזון תזונתי בכל שלב בחיים"/>
<What icon={secure} description="שאת אוכלת מבחירה ולא מחוסר שליטה"/>

</div>
<Button text="פזית, אני רוצה לשמוע עוד"/>
    </>
}
export default SecondScreen