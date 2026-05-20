import SearchForm from "./SearchForm"
import Courses from "./Courses"
import { useState } from "react"

function SearchDisplay(){

  const [courseData, setCourseData] = useState([])    

    return(
        <>
            <SearchForm setCourseData={setCourseData}/>
            <Courses courseData={courseData}/>
        </>
    )
}

export default SearchDisplay