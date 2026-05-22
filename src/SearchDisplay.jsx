import SearchForm from "./SearchForm"
import Courses from "./Courses"
import { useState } from "react"
import styles from "./styling/SearchDisplay.module.css"

function SearchDisplay(){

  const [courseData, setCourseData] = useState([])    

    return(
        <div className={styles.SearchDisplay}>
            <SearchForm setCourseData={setCourseData}/>
            <Courses courseData={courseData}/>
        </div>
    )
}

export default SearchDisplay