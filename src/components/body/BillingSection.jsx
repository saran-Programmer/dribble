import styles from "./BillingSection.module.css"
import DisplayJobTypes from "./DisplayJobTypes"

const BillingSection = ({userList}) => {
    return(
        <div className={styles.container}>
            <div className={styles.sectionTitle}>
                Find your next creative professional today!
            </div>
            <DisplayJobTypes userList={userList}/>
        </div>
    )
}

export default BillingSection