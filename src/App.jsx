import SearchForm from "./SearchForm"
import Courses from "./Courses"
import SearchDisplay from "./SearchDisplay"
import NavBar from "./NavBar"
import Home from "./Home"
import About from "./About"
import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import styles from "./styling/App.module.css"

function App(){

  return(
    <>
      <div className={styles.app}>
        <NavBar/>
        <h1 className={styles.title}>U-Discovery</h1>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/SearchDisplay" element={<SearchDisplay/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
    </>
  )
}

export default App