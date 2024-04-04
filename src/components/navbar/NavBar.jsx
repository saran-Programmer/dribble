import styles from "./NavBar.module.css"
import Logo from "../../assets/logo.jpg"
import { useState } from "react"

const NavBar = () => {
    
    const [isDetailDisplayerOpen, setIsDetailDisplayerOpen] = useState(false)
    const [isCourseDisplayerOpen, setIsCourseDisplayerOpen] = useState(false)

    return(
        <div className={styles.container}>
            <nav>
                <div className={styles.rightSide}>
                    <span
                    onMouseEnter={() => {setIsDetailDisplayerOpen(true)}}
                    onMouseLeave={() => {setIsDetailDisplayerOpen(false)}}
                    >                        
                        Find designers 
                        <i class="fa-solid fa-angle-down" />
                    </span>
                    <span>Inspiration</span>
                    <span
                        onMouseEnter={() => {setIsCourseDisplayerOpen(true)}}
                        onMouseLeave={() => {setIsCourseDisplayerOpen(false)}}
                    >Courses <i class="fa-solid fa-angle-down" /></span>
                    <span>Jobs</span>
                    <span>Go Pro</span>
                </div>
                <div className={styles.logo}>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className={styles.leftSide}>
                    <div className={styles.searchBar}>
                        <i class="fa-solid fa-magnifying-glass" />
                        <input placeholder="Search..."/>
                    </div>
                    <button className={styles.login}>Log in</button>
                    <button className={styles.signup}>Sign up</button>
                </div>
            </nav>
            <div className={isDetailDisplayerOpen ? styles.detailsDisplayer : styles.detailsDisplayerClose}>
                <div className={styles.designersDetails}>
                   <div className={styles.details}>
                        <span className={styles.title}>Designers Search</span>
                        <span className={styles.itemDetails}>Quickly find your next desiger</span>
                   </div>
                   <div className={styles.details}>
                        <span className={styles.title}>Post Your Job</span>
                        <span className={styles.itemDetails}>The #1 job board for design talent</span>
                   </div>
                </div>
            </div>
            <div className={isCourseDisplayerOpen ? styles.courseDisplayer : styles.courseDisplayerClose}>
                <div className={styles.courseDetails}>
                <div className={styles.details}>
                        <span className={styles.title}>Designers Search</span>
                        <span className={styles.itemDetails}>Quickly find your next desiger</span>
                   </div>
                   <div className={styles.details}>
                        <span className={styles.title}>Designers Search</span>
                        <span className={styles.itemDetails}>Quickly find your next desiger</span>
                   </div>
                   <div className={styles.divisionLine} />
                   <div className={styles.details}>
                        <span className={styles.title}>Designers Search</span>
                        <span className={styles.itemDetails}>Quickly find your next desiger</span>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar