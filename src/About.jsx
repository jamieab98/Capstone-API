import styles from "./styling/About.module.css"

function About(){

    return(
        <div className={styles.About}>
            <div className={styles.Heading}>About this site:</div>
            <ul className={styles.Information}>
                <li>This site uses a free API from https://io.discgolfapi.com/. When using this application, there are three primary options. You can use seaching by all courses, by all courses within a country, or by all courses within in a region within a country.</li>
                <li>To search by all courses, leave the "Country Code" and "Region Code" fields blank. Then hit search.</li>
                <li>To search by all courses in a country, type in initial of the country in the "Country Code" field and hit search.</li>
                <li>To search by all courses in a within a region in a specific country, type in the initials of the country in the "Country Code" field and the region in the "Region Code" field.</li>
                <li>Click <a href="https://www.iban.com/country-codes" target="blank">here</a> to see a reference to country codes</li>
            </ul>
        </div>
    )
}

export default About