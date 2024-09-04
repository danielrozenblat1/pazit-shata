import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';
import ScrollReveal from 'scrollreveal';

// New imports for more appropriate icons
import TargetIcon from '@mui/icons-material/GpsFixed';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import BalanceIcon from '@mui/icons-material/Balance';
import AssignmentIcon from '@mui/icons-material/Assignment';
import EmotionIcon from '@mui/icons-material/EmojiEmotions';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CelebrationIcon from '@mui/icons-material/Celebration';

import styles from "./How.module.css";
import { Link } from 'react-scroll';
import Button from '../button/Button';

const CustomizedTimeline = () => {

  React.useEffect(() => {
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 500,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item1`, {
      duration: 500,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item2`, {
      duration: 500,
      distance: "30px",
      origin: "left",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });

    ScrollReveal().reveal(`#item3`, {
      duration: 1000,
      distance: "30px",
      origin: "right",
      easing: "ease-in-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" id="item1">
              1
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <TargetIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item1" textAlign="right" direction="rtl" marginBottom="0">
            בניית תשתית + קביעת יעדים
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item1" textAlign="right" marginBottom="0">
             נשוחח , נכיר ונבין במה אנחנו צריכות להתמקד יותר בתהליך
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" color="black" id="item2">
              2
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <SelfImprovementIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
            בניית מסוגלות ועצמאות אישית
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item2" marginRight="auto" textAlign="right" marginBottom="0">
        יחד, אחרי שהצבנו מטרות, נתחיל לעבוד עליהן יחד ונתחיל להוריד את החסמים שישבו עלייך עד היום אחד אחרי השני
            </Typography>
          </TimelineContent>
        </TimelineItem>
   
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" color="black" id="item2">
              3
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <BalanceIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
            עיבוד הדרך לאיזון גוף ונפש
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item2" textAlign="right" marginBottom="0">
        עם הזמן את תשימי לב שאת משתנה מבפנים - השינוי כלפי חץ יגיע מהר מאוד יחד עם השינוי הפנימי
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" id="item3">
             4
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <AssignmentIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Assistant" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
            המסוגלות האישית שלך נבנית
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
            אנחנו  נפגשות לפגישה תזונתית והוליסטית בו אני מתאימה את התזונה והתנהלות הבריאותית שלך יחד איתך לפי הייחודיות הביולוגית שלך בהתאם לבדיקות דם מקיפות
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" color="black" id="item2">
              5
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <EmotionIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
            שחרור מאכילה רגשית + איזון הורמנלי
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item2" textAlign="right" marginBottom="0">
     ברגע שתהי מאוזנת עם עצמך ובטוחה בתהליך - האכילה הרגשית תתחיל להעלם!
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" id="item3">
             6
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <RestaurantIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} fontFamily="Assistant" />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item3" textAlign="right" direction="rtl" marginBottom="0">
            שינוי הרגלי אכילה
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item3" textAlign="right" marginBottom="0">
           אחרי השינוי יהיה ניכר לעין , נתחיל לשנות את הרגלי האכילה שלך למאוזנים ובריאים יותר שיהפכו אותך לשבעה יותר במהלך היום!
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="black"
            fontFamily="Assistant"
          >
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.5rem" color="black" id="item2">
              7
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'black' }} />
            <CelebrationIcon fontSize="large" sx={{ color: 'black' }} />
            <TimelineConnector sx={{ bgcolor: 'black' }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '45px', px: 2, display: 'flex', flexDirection: 'column' }}>
            <Typography variant="h6" component="span" fontFamily="AssistantR" fontSize="1.2rem" color="black" id="item2" textAlign="right" direction="rtl" marginBottom="0">
            חגיגה האישה שהפכת להיות
            </Typography>
            <Typography fontFamily="AssistantR" dir="rtl" fontSize="1rem" color="black" id="item2" textAlign="right" marginBottom="0">
בשלב הזה את כבר תביני כמה טוב היה לעשות את הצעד ולא להשאר במקום! כי בשלב הזה את כבר תהי הרבה יותר בטוחה בעצמך, הרבה יותר שמחה ואנרגטית, הרבה יותר חופשיה והרבה יותר בריאה! בשלב הזה את תחגגי את האישה שהפכת להיות (ושתמיד היית בפנים)
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      <Button text="אני רוצה שנתחיל בתהליך!" />
    </>
  );
};

export default CustomizedTimeline;