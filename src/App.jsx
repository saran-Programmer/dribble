import NavBar from "./components/navbar/NavBar"
import styles from "./App.module.css"
import PageTitle from "./components/body/PageTitle"
import DisplayJobTypes from "./components/body/DisplayJobTypes"
import CustomerSlideDisplayer from "./components/body/CustomerSlideDisplayer"
import DisplayVideoContent from "./components/body/DisplayVideoContent"
import OpinionSection from "./components/body/OpinionSection"
import FeatureDisplayer from "./components/body/FeatureDisplayer"

const App = () => {
    return(
      <div className={styles.container}>
        <NavBar />
        <PageTitle />
        <DisplayJobTypes />
        <CustomerSlideDisplayer />
        <DisplayVideoContent />
        <OpinionSection />
        <FeatureDisplayer />
      </div>
    )
}

export default App