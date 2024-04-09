import { useState } from "react"
import DisplayJobType from "../body/DisplayJobTypes"
import NavBar from "../navbar/NavBar"
import PageTitle from "../body/PageTitle"
import OverLay from "../overLay/OverLay"
import CustomerSlideDisplayer from "../body/CustomerSlideDisplayer"
import DisplayVideoContent from "../body/DisplayVideoContent"
import BillingSection from "../body/BillingSection"
import OpinionSection from "../body/OpinionSection"
import FeatureDisplayer from "../body/FeatureDisplayer"

import Footer from "../footer/Footer"

const MainPage = ({isAdmin, jobElementList, setJobElementList}) => {

    const [isOverLayOpen, setIsOverLayOpen] = useState(false)
    
    const handleOverLayStatusChange = () => {
        setIsOverLayOpen(!isOverLayOpen)
    }

    const addElementsToList = (props) => {
        setJobElementList(props)
    }

    return(
        <div>
            <NavBar />
            {(isOverLayOpen) ? <OverLay handleOverLayStatusChange={handleOverLayStatusChange} addElementsToList={addElementsToList}/> : null}
            <PageTitle handleOverLayStatusChange={handleOverLayStatusChange} isAdmin={isAdmin}/>
            <DisplayJobType userList={jobElementList}/>
            <CustomerSlideDisplayer />
            <DisplayVideoContent />
            <OpinionSection />
            <BillingSection userList={jobElementList}/>
            <FeatureDisplayer />
            
            <Footer />
        </div>
    )
}

export default MainPage