import styles from "./Foot.module.css";

import image1 from "../../assets/footerImages/img1.webp";
import image2 from "../../assets/footerImages/img2.webp";
import image3 from "../../assets/footerImages/img3.webp";
import image4 from "../../assets/footerImages/img4.webp";
import image5 from "../../assets/footerImages/img5.webp";
import image6 from "../../assets/footerImages/img6.webp";
import image7 from "../../assets/footerImages/img7.webp";
import image8 from "../../assets/footerImages/img8.webp";
import logo from "../../assets/logo.jpg"


const Footer = () => {

    const imageList = [
        {image: image1, description : "Web Desiging"},
        {image: image2, description : "App Designing"},
        {image: image3, description : "Product Designing"},
        {image: image4, description : "Animation"},
        {image: image5, description : "Topography"},
        {image: image6, description : "Branding"},
        {image: image7, description : "UI/UX Design"},
        {image: image8, description : "Print"}, 
        {image: image1, description : "Web Desiging"},
        {image: image2, description : "App Designing"},
        {image: image3, description : "Product Designing"},
        {image: image4, description : "Animation"},
        {image: image5, description : "Topography"},
        {image: image6, description : "Branding"},
        {image: image7, description : "banding"},
        {image: image8, description : "Print"}]

    return(
        <div className={styles.container}>
            <div className={styles.slideContainer}>
                <div className={styles.slider}>
                {
                    imageList.map(e => (
                        <div className={styles.imageContainer}>
                            <img src={e.image} alt="Company Qualities" />
                            <span className={styles.imageDescription}>
                                {e.description}
                            </span>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className={styles.footNavBar}>
                <img className={styles.footerLogo} src={logo} alt="Logo" />
                <div className={styles.footerNarBarItem}>For designers</div>
                <div className={styles.footerNarBarItem}>Hire talent</div>
                <div className={styles.footerNarBarItem}>Inspiration</div>
                <div className={styles.footerNarBarItem}>Advertising</div>
                <div className={styles.footerNarBarItem}>Blog</div>
                <div className={styles.footerNarBarItem}>About</div>
                <div className={styles.footerNarBarItem}>Careers</div>
                <div className={styles.footerNarBarItem}>Support</div>
                <div className={styles.footerLinks}>
                    <i class="fa-brands fa-twitter" />
                    <i class="fa-brands fa-square-facebook" />
                    <i class="fa-brands fa-instagram" />
                    <i class="fa-brands fa-square-pinterest" />
                </div>
            </div>
            <div className={styles.credentailas}>
                    <div className={styles.leftSide}>
                        <div>© 2024 Saran-Programmer</div>
                        <div>Terms</div>
                        <div>Privacy</div>
                        <div>Cookies</div>
                    </div>
                    <div className={styles.rightSide}>
                        <div>Jobs</div>
                        <div>Designers</div>
                        <div>Freelancers</div>
                        <div>Tags</div>
                        <div>Places</div>
                        <div>Resources</div>
                    </div>
                </div>
        </div>
    )
}

export default Footer