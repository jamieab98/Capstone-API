import { useState } from "react"
import { useEffect } from "react"

function SearchForm({setCourseData}){
    const [country, setCountry] = useState("")
    const [region, setRegion] = useState("")
    const [total, setTotal] = useState(0)

    var url = 'https://io.discgolfapi.com/v1/courses'

    function handleSearch(e){
        e.preventDefault()

        if (country != "" && region != ""){
            url = `${url}?country=${country}&region=${region}&limit=20`
        }
        else if (country != "" && region == ""){
            url = `${url}?country=${country}&limit=20`
        }
        else if(country == "" && region != ""){
            return(console.log('Must provide a country code if searching by region'))
        }
        else{
            url = `${url}?limit=20`
        }

        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
            setCourseData(data["courses"])
            setTotal(data['total'])
        })
        .catch(error=>console.log(error))

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
                <br/>
            </form>
            <button>Previous Page</button>
            <button>Next Page</button>
        </div>
    )
}

export default SearchForm