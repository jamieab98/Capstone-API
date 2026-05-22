function About(){

    return(
        <>
            <h3>About:</h3>
            <p>This site uses a free API from https://io.discgolfapi.com/. When using this application, there are three primary options. You can use seaching by all courses, by all courses within a country, or by all courses within in a region within a country.</p>
            <p>To search by all courses, leave the "Country Code" and "Region Code" fields blank. Then hit search.</p>
            <p>To search by all courses in a country, type in initial of the country in the "Country Code" field and hit search.</p>
            <p>To search by all courses in a within a region in a specific country, type in the initials of the country in the "Country Code" field and the region in the "Region Code" field.</p>
            <p>Click <a href="https://www.iban.com/country-codes" target="blank">here</a> to see a reference to country codes</p>
        </>
    )
}

export default About