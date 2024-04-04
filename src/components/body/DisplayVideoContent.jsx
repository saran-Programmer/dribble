import styles from "./DisplayVideoContent.module.css"
import video1 from "../../assets/video1.mp4"
import video2 from "../../assets/video2.mp4"

const DisplayVideoContent = () => {
    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.video}>
                    <video src={video1} 
                    autoPlay 
                    muted
                    loop
                    width={600}
                    />
                </div>
                <div className={styles.sectionContent}>
                    <div className={styles.contentTitle}>Hire faster & smarter with our designer search</div>
                    <div className={styles.contentBody}>Easily find quality freelancers and full-time creatives using our powerful search engine with filters for specialty, location, experience level, and more. Search for available talent in the largest professional creative community with just a few clicks.</div>
                    <button className={styles.contentSectionButton}>Start your search</button>
                </div>
            </div>
            <div className={styles.contentTwo}>
                <div className={styles.sectionContent}>
                    <div className={styles.contentTitle}>The #1 job board for top design talent</div>
                    <div className={styles.contentBody}>Our job board postings receive an average of 1.1k targeted clicks per month and are viewed by over 1 million top designers globally. With a proven track record assisting over 60,000 companies, you’ll spend less time sorting through unqualified candidates and more time hiring amazing talent.</div>
                    <button className={styles.contentSectionButton}>Post your job</button>
                </div>
                <div className={styles.videoTwo}>
                    <video src={video2} 
                    autoPlay 
                    muted
                    loop
                    width={600}
                    />
                </div>
            </div>
        </div>
    )
}

export default DisplayVideoContent