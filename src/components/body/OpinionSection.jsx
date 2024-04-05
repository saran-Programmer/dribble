import styles from "./OpinionSection.module.css"
import user from "../../assets/userImage.jpeg"
import oneSignal from "../../assets/S5BMILr4aSBsQ0mgFpf9Mtqgxc.svg"

const OpinionSection = () => {
    return(
        <div className={styles.container}>
            <div className={styles.contentSection}>
                <div className={styles.content}>
                    “Dribbble is my go-to for hiring designers.It always provides a wealth of quality candidates and instantly builds my pipeline.”
                </div>
                <div className={styles.userInfo}>
                    <img 
                    src={user} 
                    alt="user image" 
                    width={50}
                    height={50}
                    />
                    <span className={styles.userName}>Saran G </span>
                    <span className={styles.userDesignation}>Full Stack Developer, One Signal</span>
                </div>
            </div>
            <div className={styles.iconSection}>
                <div className={styles.icon}>
                    <img src={oneSignal} alt="Logo" />
                </div>
            </div>
        </div>
    )
}

export default OpinionSection