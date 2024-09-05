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
        שקלתי 25 קילו יותר והאשמתי את כל העולם במקום לעשות צעד! (את הגנטיקה שלי, את האנשים שכן הצליחו,את הרגלי האכילה שלי ואת הדיאטות שתמיד גרמו לי רק להעלות יותר במשקל בסוף) בסוף, עשיתי את הצעד! הרבה יותר מאוזן והרבה יותר מותאם עבורי! ובגלל שהייתי בדיוק במצב שלך אני יודעת מה כל אישה חווה בסקאלה של העליה והירידה במשקל - לכן, שנינו יודעות שלא כל דיאטה מתאימה לכל אחת והתהליך מחייב התאמה אישית,לאחר שליוויתי כ-300 נשים,התמחיתי בNLP ,TMS ובהמון שיטות,תהליכים ומידע שהקשור לגוף שלנו יצרתי את התהליך שיהפוך אותך למאושרת,מאוזנת ויציבה גם אחריו!. בתהליך איתי אני משלבת טיפול גוף נפש ואימון מנטלי נשי לפי האישיות הפרסונלית שלך, ולפי המצב הפיזיולוגי הנוכחי שלך, עם ליווי צמוד אישי שלי 1 על 1 + ופגישה שבועית בזום
        </p>



      </div>
    
    </div>

    </>
};

export default AboutMe;