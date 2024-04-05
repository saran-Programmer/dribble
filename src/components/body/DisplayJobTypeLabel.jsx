import styles from "./DisJobTypeLabel.module.css"

const DisplayJobTypeLabel = () => {
    return(
        <div className={styles.container}>
            <span className={styles.importantLabel}>Most Used</span>
            <div className={styles.itemContainer}>
                <div>Job Board</div>
                <div>Hiring Suit</div>
            </div>
        </div>
    )
}

export default DisplayJobTypeLabel