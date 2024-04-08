import styles from "./PageTitle.module.css"

const PageTitle = ({handleOverLayStatusChange,isAdmin}) => {

    const handleOverLayStateChange = () => {
        handleOverLayStatusChange()
    }

    return(
        <div className={styles.container}>
            <div className={styles.title}>
                DRIBBBLE HIRING
            </div>
            {(isAdmin) ? <button className={styles.addJobType} onClick={handleOverLayStateChange}>Add Job Types</button> : null}
            
            <div className={styles.pageContent}>
                Hire the world's top designers
            </div>
            <div className={styles.content}>
                Find the perfect match for your next project using Designer Search, or let designers come to you through our Job Board. Dribbble Hiring makes it easier than ever to source top-notch design talent.
            </div>
        </div>
    )
}

export default PageTitle