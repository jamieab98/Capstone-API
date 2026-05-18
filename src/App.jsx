import SearchForm from "./SearchForm"
import Courses from "./Courses"
import { useState } from "react"
import styles from "./styling/App.module.css"

function App(){

  const [courseData, setCourseData] = useState([])

  return(
    <div className={styles.app}>
      <h1 className={styles.title}>U-Discovery</h1>
      <SearchForm setCourseData={setCourseData}/>
      <br/>
      <Courses courseData={courseData}/>
    </div>
  )
}

export default App