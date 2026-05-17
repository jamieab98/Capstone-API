import { useState } from "react"

function SearchForm(){
    const [country, setCountry] = useState("")
    const [region, setRegion] = useState("")

    var url = 'https://io.discgolfapi.com/v1/courses'

    function handleSearch(e){
        e.preventDefault()   

        if (country != "" && region != ""){
            url = `${url}?country=${country}&region=${region}`
        }
        else if (country != "" && region == ""){
            url = `${url}?country=${country}`
        }
        else if(country == "" && region != ""){
            return(console.log('Must provide a country code if searching by region'))
        }
        console.log(url)
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