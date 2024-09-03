import styles from "./FirstScreen.module.css"

const FirstScreen = (props) => {
    return (
        <>
            <div className={props.scrolled ? styles.descriptionWrapperP : styles.descriptionWrapper}>
                <div className={styles.description}>
                    הכירי את התהליך שיגרום לך לרדת במשקל,לחזור לאהוב את עצמך ,להנות מהדרך <span> </span>
                    <div className={styles.underlined}>ולא לעלות הכל בחזרה כשהליווי נגמר</div>
                </div>
            </div>

            <div className={styles.svgContainer}>
                <svg className={styles.title} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 120">
                    <defs>
                        <linearGradient id="titleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#8B4513" />
                            <stop offset="50%" stopColor="#654321" />
                            <stop offset="100%" stopColor="#5D4037" />
                        </linearGradient>
                        <path id="curve1" d="M20,100 Q300,20 580,100" fill="none" stroke="none" />
                    </defs>
                    <text fontSize="3.5rem" fontFamily="Assistant, serif" fontWeight="bold">
                        <textPath href="#curve1" startOffset="50%" textAnchor="middle">
                            <tspan fill="url(#titleGradient)">Happy Genetic Women</tspan>
                        </textPath>
                    </text>
                </svg>
                
                <svg className={styles.job} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 60">
                    <defs>
                        <path id="curve2" d="M20,50 Q300,10 580,50" fill="none" stroke="none" />
                    </defs>
                    <text fill="#6B4423" fontSize="1.8rem" fontFamily="AssistantR, serif">
                        <textPath href="#curve2" startOffset="50%" textAnchor="middle">
                            ריפוי עצמי תזונה טבעית לנשים
                        </textPath>
                    </text>
                </svg>
            </div>

            <style jsx>{`
                .svgContainer {
                    background: linear-gradient(146deg, rgba(255,244,234,1) 20%, rgba(255,239,209,1) 50%, rgba(255,245,232,1) 80%);
                    padding: 20px;
                    border-radius: 10px;
                }
            `}</style>
        </>
    )
}

export default FirstScreen