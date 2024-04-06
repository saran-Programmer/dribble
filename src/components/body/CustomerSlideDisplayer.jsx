import styles from "./CustomerSlideDisplayer.module.css"

import logo1 from "../../assets/customerLogos/logo1.png"
import logo2 from "../../assets/customerLogos/logo2.png"
import logo3 from "../../assets/customerLogos/logo3.png"
import logo4 from "../../assets/customerLogos/logo4.png"
import logo5 from "../../assets/customerLogos/logo5.png"
import logo6 from "../../assets/customerLogos/logo6.png"
import logo7 from "../../assets/customerLogos/logo7.png"
import logo8 from "../../assets/customerLogos/logo8.png"
import logo9 from "../../assets/customerLogos/logo9.png"
import logo10 from "../../assets/customerLogos/logo10.png"

const CustomerSlideDisplayer = () => {

    const customerLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10]

    return(
        <div className={styles.container}>
            We've helped some of the world's best design-forward companies hire expert creatives
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>{
                    customerLogos.map(e => (
                        <img src={e} alt="" />
                    ))
                }</div>
            </div>
        </div>
    )
}

export default CustomerSlideDisplayer