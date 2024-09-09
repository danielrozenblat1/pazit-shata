import React from 'react';
import styles from './Me.module.css';
import meshi from "../../images/פזית שטה.png"

const AboutMe = () => {
  return <>
      <div className={styles.header} id="מי אני">איך אני יודעת את זה?</div>
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={meshi} alt="פזית שטה" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h1 className={styles.title}>פזית שטה</h1>
        <h2 className={styles.subtitle}>
  הייתי בדיוק במקום שלך!
  </h2>
        <p className={styles.description}>
        שקלתי 25 קילו יותר והייתי סובלת מהפרעות אכילה למעלה מ10 שנים
הייתי חיה בתסכול עצום מול עצמי ומול הגוף שלי וניסתי שיטות שתמיד גרמו לי רק להעלות יותר במשקל, ויותר גרוע מזה התירו אותי מצולקת נפשית
התסכול היה כי לא מצאתי משהו שמתאים עבורי לא התזונה לא דרך החיים שאותן תהליכים הכתיבו לי ומאחר והייתי בדיוק במצב הזה 

אני יודעת מה כל אישה חווה בסקאלה של העליה והירידה במשקל 

בשנה האחרונה ליוותי כ300 נשים לאיזון משקל עודף כפרילנסרית בתוכנית מוכרת של רופא בתחום הרפואה הטבעית 
למדתי יעוץ תזונה ובריאות טבעית לאיזון משקל עודף ומחלות וגם עברתי התמחות
למדתי master NLP, ייעוץ בפסיכותרפיה הוליסטית יהודית, ריפוי מאכילה רגשית,ריפוי מכאבים כרוניים של מחלות בשיטת tms
כתחביב למדתי הוראה ליוגה ואיזון הנפש, 
ובנוסף - עוד המון שיטות,תהליכים ומידע שקשור לגוף ולנפש שלנו ויצרתי את התהליך שיהפוך אותך למאושרת,מאוזנת ויציבה גם אחריו! בתהליך איתי אני משלבת טיפול גוף נפש ואימון מנטלי נשי לפי האישיות הפרסונלית שלך, ולפי המצב הפיזיולוגי הנוכחי שלך.
ליווי צמוד אישי שלי 1 על 1 ופגישה שבועית בזום
        </p>



      </div>
    
    </div>

    </>
};

export default AboutMe;