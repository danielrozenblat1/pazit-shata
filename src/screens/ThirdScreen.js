import CustomizedTimeline from "../components/how/How"
import styles from "./ThirdScreen.module.css"


const ThirdScreen=()=>{
 
return <>
<div className={styles.description}>"אז מה את מציעה לי פזית?"</div>
<h1 className={styles.title} id="Happy Genetic Women">Happy Genetic Women</h1>
<div className={styles.bold}>תהליך שהולך להפוך אותך לאישה בטוחה בעצמה שאוכלת מרצון ולא מתוך צורך ומגננה לאישה שאוהבת את מה שהיא רואה במראה ולאישה יציבה שנהנת מכל יום שעובר! </div>
<div className={styles.description}>ואיך התהליך הולך לעבוד?</div>
<CustomizedTimeline/>
</>


}
export default ThirdScreen