import SearchForm from "./SearchForm"
import { useState } from "react"

function App(){

  const [courseData, setCourseData] = useState([])

  return(
    <div>
      <h1>App Component</h1>
      <SearchForm setCourseData={setCourseData}/>
    </div>
  )
}

export default App