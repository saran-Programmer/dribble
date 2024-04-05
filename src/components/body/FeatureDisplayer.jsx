import styles from "./FeatureDisplayer.module.css"
import featureSectionImage from "../../assets/featureSectionImages.webp"


// This is the component used to Display all the Feature the company provides

const FeatureDisplayer = () => {
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                Why brands choose Dribbble to hire design talent
            </div>
            <div className={styles.contentSection}>
                <div className={styles.textContent}>
                    <div className={styles.content}>
                        <i class="fa-regular fa-gem" />
                        <div className={styles.contentTitleOne}>WORLD-CLASS TALENT</div>
                        <div className={styles.contentBody}>From graphic design to UX/UI, our community is home to the world’s leading designers and creative agencies.</div>
                    </div>
                    <div className={styles.content}>
                        <i class="fa-brands fa-bitcoin"></i>
                        <div className={styles.contentTitleTwo}>$0 PLACEMENT FEES</div>
                        <div className={styles.contentBody}>From graphic design to UX/UI, our community is home to the world’s leading designers and creative agencies.</div>
                    </div>
                    <div className={styles.content}>
                    <i class="fa-solid fa-shield-halved" />
                        <div className={styles.contentTitleThree}>GLOBAL REACH</div>
                        <div className={styles.contentBody}>From graphic design to UX/UI, our community is home to the world’s leading designers and creative agencies.</div>
                    </div>
                </div>
                <img src={featureSectionImage} alt="Customer image" />
            </div>
        </div>
    )
}

export default FeatureDisplayer