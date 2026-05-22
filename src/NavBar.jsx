import { Link } from "react-router-dom"
import styles from "./styling/NavBar.module.css"

function NavBar(){

    return(
        <div className={styles.navigation}>
            <Link className={styles.link} to="/">Home</Link>
            <Link className={styles.link} to="SearchDisplay">Find Courses</Link>
            <Link className={styles.link} to="About">About</Link>
        </div>
    )
}

export default NavBar