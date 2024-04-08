import NavBar from "../navbar/NavBar"
import PageTitle from "../body/PageTitle"
import DisplayJobTypes from "../body/DisplayJobTypes"
import CustomerSlideDisplayer from "../body/CustomerSlideDisplayer"
import DisplayVideoContent from "../body/DisplayVideoContent"
import OpinionSection from "../body/OpinionSection"
import FeatureDisplayer from "../body/FeatureDisplayer"
import BillingSection from "../body/BillingSection"
import Footer from "../footer/Footer"
import OverLay from "../overLay/OverLay"
import { useState } from "react"

const MainPages = ({isAdmin}) => {

    const [isOverLayOpen, setIsOverLayOpen] = useState(false)

    const handleOverLayStatusChange = () => {
        setIsOverLayOpen(!isOverLayOpen)
    }

    return(
        <div>
            <NavBar />
            {(isOverLayOpen) ? <OverLay handleOverLayStatusChange={handleOverLayStatusChange}/> : null}
            <PageTitle handleOverLayStatusChange={handleOverLayStatusChange} isAdmin={isAdmin}/>
            <DisplayJobTypes />
            <CustomerSlideDisplayer />
            <DisplayVideoContent />
            <OpinionSection />
            <FeatureDisplayer />
            <BillingSection />
            <Footer />
        </div>
    )
}

export default MainPages