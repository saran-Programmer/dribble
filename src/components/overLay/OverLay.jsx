import styles from "./OverLay.module.css"
import { useState } from "react"

const OverLay = ({handleOverLayStatusChange}) => {

    const [enteredUserName, setCurrentUserName] = useState("")
    const [enteredDescription, setEnteredDescription] = useState("")
    const [enteredCost, setCost] = useState("")

    const handleUserNameChange = (e) => {
        setCurrentUserName(e.target.value)
    }

    const handleSubmitButtonClick = () => {
        handleOverLayStatusChange()
    }

    return(
        <div className={styles.container}>
            <div className={styles.contentDisplayer}>
                <span className={styles.contentTitle}>Add New Job</span>
                <div className={styles.contentInputSection}><input type="text" placeholder="Job Title" value={enteredUserName} onChange={handleUserNameChange}/></div>
                <div className={styles.contentInputSection}><input type="text" placeholder="Job Description"/></div>
                <div className={styles.contentInputSection}><input type="text" placeholder="Job Cost"/></div>
                <button className={styles.addJobButton} onClick={handleSubmitButtonClick}>Add Job</button>
            </div>
        </div>
    )
}

export default OverLay