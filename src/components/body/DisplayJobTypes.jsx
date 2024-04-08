import styles from "../body/DisplayJobTypes.module.css"


const DisplayJobType = ({userList}) => {
    return(
        <div className={styles.container}>
           {
            userList.map(e => (
                <div className={styles.jobSection}>
                    <div className={styles.jobSectionTitle}>{e.title}</div>
                    <div className={styles.jobDiscription}>{e.describe}</div>
                    <button className={styles.getJobButton}>Get started</button>
                    <div className={styles.cancelLink}>Cancel anytime. No strings attached.</div>
                </div>
            ))
           }
        </div>
    )
}

export default DisplayJobType