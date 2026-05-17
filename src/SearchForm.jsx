import { useState } from "react"
import { useEffect } from "react"

function SearchForm({setCourseData}){
    const [country, setCountry] = useState("")
    const [region, setRegion] = useState("")
    const [total, setTotal] = useState(0)
    const [offset, setOffset] = useState(0)
    const [hasSearched, setHasSearched] = useState(false)

    var url = 'https://io.discgolfapi.com/v1/courses'

    useEffect(()=>{
        if (hasSearched == false){
            return
        }
        else if (hasSearched == true){
            setUrl()
            fetchData()
        }
    }, [offset])

    function setUrl(){
        if (country != "" && region != ""){
            url = `${url}?country=${country}&region=${region}&limit=20offset=${offset}`
        }
        else if (country != "" && region == ""){
            url = `${url}?country=${country}&limit=20offset=${offset}`
        }
        else if(country == "" && region != ""){
            return(console.log('Must provide a country code if searching by region'))
        }
        else{
            url = `${url}?limit=20&offset=${offset}`
        }
    }

    function fetchData(){
        fetch(url)
        .then(response=>response.json())
        .then((data)=>{
            setCourseData(data['courses'])
            setTotal(data['total'])
        })
        .catch(error=>console.log(error))
    }

    function handleSearch(e){
        e.preventDefault()
        setHasSearched(true)
        setUrl()
        fetchData()
    }

    function addOffset(){
        if (offset + 20 < total){
            setOffset(prev => prev + 20)
        }
        else{
            console.log('You cannot go further forward')
        }
    }

    function removeOffset(){
        if (offset != 0){
            setOffset(prev => prev - 20)
        }
        else{
            console.log('You cannot go further back')
        }
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
            <button onClick={removeOffset}>Previous Page</button>
            <button onClick={addOffset}>Next Page</button>
        </div>
    )
}

export default SearchForm