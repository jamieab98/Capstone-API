import styles from "./styling/Home.module.css"

function Home(){

    return(
        <div className={styles.Home}>
            <h2 className={styles.Heading}>Welcome to U-Discovery</h2>
            <div className={styles.Description}>This is an application that lets you find discgolf courses near you or wherever you please! All you need to know is the abbreviation to the country you're searching through and the region!</div>
            <div className={styles.Direction}>Click the find course tab at the top to start looking for courses!</div>
        </div>
    )
}

export default Home