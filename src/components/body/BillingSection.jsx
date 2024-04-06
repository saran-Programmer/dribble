import styles from "./BillingSection.module.css"
import DisplayJobTypes from "./DisplayJobTypes"

const BillingSection = () => {
    return(
        <div className={styles.container}>
            <div className={styles.sectionTitle}>
                Find your next creative professional today!
            </div>
            <DisplayJobTypes />
        </div>
    )
}

export default BillingSection