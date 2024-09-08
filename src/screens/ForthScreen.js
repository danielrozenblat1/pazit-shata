import Rectangle from "../components/feel/Feel"
import styles from "./ForthScreen.module.css"
import loop from "../Icons/wired-outline-233-arrow-22-hover-cycle.json"
import meet from "../Icons/wired-outline-981-consultation-hover-conversation.json"
import food from "../Icons/wired-outline-562-fastfood-hover-pinch.json"
import toomuch from "../Icons/wired-outline-608-kitchen-scale-hover-pinch.json"
import Button from "../components/button/Button"
import medecine from "../Icons/wired-outline-1215-syrup-medicine-hover-pinch.json"
const ForthScreen=()=>{
 
return <>
<div className={styles.title} id="טיפים, תשובות ואמונות">כמה תשובות וטיפים ממני</div>
<Rectangle 
      icon={loop}
      title="איך להמנע מלופ של אכילה רגשית"
      description="
הנה עובדה מעניינת.. במערכת הלימבית יש אזור במוח
שמבחינה פיזיולוגית עובדתית לא רוצה להשתנות!
הלופ שאת נמצאת בו כרגע זה מנגנון הגנה של המוח לשמר את הקיים
ולכן לא משנה מה את רוצה, המוח והגוף מפחד פחד שהוא הישרדותי ולכן רוצה להמשיך לעשות את אותם דברים שעשינו אתמול שלשום או רוב החיים.
אז מה הפתרון? 
פשוט מאוד  ללמד את המוח שלנו שהשינוי הוא תקין הוא בסדר. שאת לא צריכה הגנה."
    />
<Rectangle 
      icon={medecine}
      title="את מטפלת בתחום הרפואה המשלימה והאינטגרטיבית, מה את חושבת על תרופות?"
      description="אני לא נגד תרופות. אני נגד לתת לאנשים פלסתר כמענה ראשוני. יש היום המון בעיות בריאות שאפשר להגיע לריפוי ולרמיסיה משמעותית של המחלה ללא תרופות, כמו סכרת סוג 2, תת פעילות בלוטת בתריס, מיגרנות ועוד. ויש מחקרים איכותיים ותוצאות בשטח.
הבעיה האמיתית שיש אנשים שלא מודעים שקיימות אפשרות נוספת. מבחינתם זה רק תרופות כי זה מה שאמרו להם
ברגע שתהיה שקיפות אמיתית לנושא זה מאפשר זכות בחירה ולא ישר לקחת כדור. הכדור יחכה בפינה אל דאגה. יש לנו זכות בחירה בסיסית איך לטפל בעצמנו וזאת כאשר כל האפשריות הטיפול עומדות לפנינו ומשם יש לבני אדם זכות בחירה בסיסית מה לעשות עם החיים שלהם.
כמובן לא מדובר בהמלצה אישית וכל מקרה לגופו."
    />
<Rectangle 
      icon={food}
      title="אני חייבת לוותר על המאכלים האהובים עלי כדי להרזות?"
      description="ממש לא! ויותר מזה.. כשאת מאוזנת ואוכלת מבחירה ולא אכילה רגשית - את תאכלי את המאכלים האהובים עלייך כי את רוצה ולא כי את צריכה! "
    />
    <Rectangle 
      icon={toomuch}
      title="מה לעשות אם אכלתי יותר ממה שרציתי?"
      description="האכילה שלך זה לא את 
הבסיס הראשוני להצלחה זה לא לתת לאוכל להגדיר את מצבי הרוח שלך
הרי לימדו אותנו שאם אכלנו חסה אורגנית  אז אני מצליחנית ואם אכלתי שוקולד אני לוזרית במצב כזה האוכל מנהל את מצבי הרוח שלך והלך הרוח שלך או בעצם את הערך העצמי שלך
הרציונל זה גם כשאכלת יותר וגם בדיוק כפי שרצית לא אומר שום דבר רע או טוב עלייך כאישה.
כי גם את תאכלי סלט זה לא יהפוך אותך ליותר טובה ובכל פעם שהאוכל מגדיר את מי שאת את תהייה שוב מול האוכל. האוכל ינהל את מצבי הרוח שלך
את אישה מהממת, מדהימה, ראויה מעצם היותך ללא שום תלות בסוג המזון שאכלת"
    />
        <Rectangle 
      icon={meet}
      title="למה את לא עושה רק פגישה אחת ?"
      description="אני לא מאמינה בפגישה אחת. אלא בתהליך שלם. פגישה אחת אפשר ללכת לאנשי מקצוע אחרים
כאן מדובר בתהליך שלם סיסטמטי זה לא ברמת סיסמא פה וסיסמא שם,
אלא תהליך ליווי ממוקד ומסודר שיאפשר לך לראות תוצאות וגם להתמיד לאחר התהליך
אפשר לקבוע שיחת ייעוץ לבדוק התאמה לתהליך"
    />
    <Button text="פזית,סקרנת אותי בואי נדבר!"/>
</>


}
export default ForthScreen