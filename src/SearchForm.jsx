import { useState } from "react"

function SearchForm(){
    const [country, setCountry] = useState("")
    const [region, setRegion] = useState("")

    function handleSearch(e){
        e.preventDefault()
        console.log(`Looking for courses in ${country} and ${region}`)
    }

    return(
        <div>
            <h3>Course Search</h3>
            <form onSubmit={handleSearch}>
                <label htmlFor="country">Country Code:</label>
                <input type="text" id="country" onChange={(e)=>setCountry(e.target.value)} autoComplete="false"></input>
                <label htmlFor="region">Region Code:</label>
                <input type="text" id="region" onChange={(e)=>setRegion(e.target.value)} autoComplete="false"></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm