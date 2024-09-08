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
                    <path id="curve1" d="M20,100 Q300,20 580,100" fill="none" stroke="none" />
                    <text fontSize="3.5rem" fontFamily="Assistant, serif" fontWeight="bold">
                        <textPath href="#curve1" startOffset="50%" textAnchor="middle">
                            <tspan fill="rgb(66, 43, 11)">Happy Genetic Women</tspan>
                        </textPath>
                    </text>
                </svg>
            </div>

            <style jsx>{`
                .svgContainer {
                    background: linear-gradient(146deg, rgba(144,88,43,1) 15%, rgba(171,131,115,1) 35%, rgba(171,131,115,1) 60%, rgba(144,88,43,1) 85%);
                    padding: 20px;
                    border-radius: 10px;
                }
            `}</style>
        </>
    )
}

export default FirstScreen