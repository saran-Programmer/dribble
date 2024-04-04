import NavBar from "./components/navbar/NavBar"
import styles from "./App.module.css"
import PageTitle from "./components/body/PageTitle"
import DisplayJobTypes from "./components/body/DisplayJobTypes"

const App = () => {
    return(
      <div className={styles.container}>
        <NavBar />
        <PageTitle />
        <DisplayJobTypes />
      </div>
    )
}

export default App