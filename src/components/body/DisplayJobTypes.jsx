import styles from "./DisplayJobTypes.module.css"

const DisplayJobTypes = () => {
    return(
        <div className={styles.container}>
            <div className={styles.jobSection}>
                <span className={styles.jobSectionTitle}>Job Board</span>
                <span className={styles.jobDiscription}>Let top creative talent come to you by posting your listing on #1 design job board.</span>
                <div className={styles.priceDetails}>
                    <div className={styles.price}>$5/day</div>
                    <div className={styles.priceLable}>Billed Montly</div>
                </div>
                <div className={styles.advantageList}>
                    <span><i class="fa-solid fa-check" /> Average of 1.1k targeted clicks per month</span>
                    <span><i class="fa-solid fa-check" /> Easily hire for full-time or freelance placements</span>
                    <span><i class="fa-solid fa-check" /> Swap out listings as needed</span>
                </div>
                <button className={styles.postAJob}>Post A Job</button>
                <div className={styles.cancelLink}>Cancel anytime. No strings attached.</div>
            </div>
            <div className={styles.jobSectionImportant}>
                <span className={styles.jobSectionTitle}>Hiring Suite</span>
                <span className={styles.label}>Most Popular</span>
                <span className={styles.jobDiscription}>Tap into our ready-to-hire community of top designers with our seamless hiring solution.</span>
                <div className={styles.priceDetails}>
                    <div className={styles.price}>$10/day</div>
                    <div className={styles.priceLable}>Billed Montly</div>
                </div>
                <div className={styles.advantageList}>
                    <span><i class="fa-solid fa-arrow-left" /> Job Board included</span>
                    <span><i class="fa-solid fa-check" /> Search our entire database of available designers</span>
                    <span><i class="fa-solid fa-check" /> Filter by work, location, budget, and more</span>
                    <span><i class="fa-solid fa-check" /> Unlimited messages for designer outreach</span>
                    <span><i class="fa-solid fa-check" /> Save and bookmark designers for future needs</span>
                </div>
                <button className={styles.getStartedButton}>Get Started</button>
                <div className={styles.cancelLink}>Cancel anytime. No strings attached.</div>
            </div>
        </div>
    )
}

export default DisplayJobTypes