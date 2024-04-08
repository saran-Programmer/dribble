import styles from "./OverLay.module.css"
import { useState } from "react"

const OverLay = ({handleOverLayStatusChange, addElementsToList}) => {

    const [enteredJobTitle, setEnteredJobTitle] = useState("")
    const [enteredDescription, setEnteredDescription] = useState("")
    const [enteredCost, setEnteredCost] = useState("")

    const handleJobTitleChange = (e) => {
        setEnteredJobTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setEnteredDescription(e.target.value)
    }

    const handleEnteredCost = (e) => {
        setEnteredCost(e.target.value)
    }

    const handleSubmitButtonClick = () => {
        handleOverLayStatusChange()
        addElementsToList({title: enteredJobTitle, describe: enteredDescription, price: enteredCost})
        setEnteredCost("")
        setEnteredDescription("")
        setEnteredJobTitle("")
    }

    return(
        <div className={styles.container}>
            <div className={styles.contentDisplayer}>
                <span className={styles.contentTitle}>Add New Job</span>
                <div className={styles.contentInputSection}>
                    <input type="text" placeholder="Job Title" value={enteredJobTitle} onChange={handleJobTitleChange}/>
                </div>
                <div className={styles.contentInputSection}>
                    <input type="text" placeholder="Job Description" value={enteredDescription} onChange={handleDescriptionChange}/>
                </div>
                <div className={styles.contentInputSection}>
                    <input type="text" placeholder="Job Cost" value={enteredCost} onChange={handleEnteredCost}/>
                </div>
                <button className={styles.addJobButton} onClick={handleSubmitButtonClick}>Add Job</button>
            </div>
        </div>
    )
}

export default OverLay