import SearchForm from "./SearchForm"
import Courses from "./Courses"
import { useState } from "react"

function App(){

  const [courseData, setCourseData] = useState([])

  return(
    <div>
      <h1>UDiscCovery</h1>
      <SearchForm setCourseData={setCourseData}/>
      <br/>
      <Courses courseData={courseData}/>
    </div>
  )
}

export default App