import { useState } from "react"
import { useEffect } from "react"
import styles from "./styling/SearchForm.module.css"

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
            url = `${url}?country=${country}&region=${region}&limit=20&offset=${offset}`
        }
        else if (country != "" && region == ""){
            url = `${url}?country=${country}&limit=20&offset=${offset}`
        }
        else if(country == "" && region != ""){
            return(console.log('Must provide a country code if searching by region'))
        }
        else{
            url = `${url}?limit=20&offset=${offset}`
        }
    }

    function fetchData(){
        console.log(offset)
        console.log(url)
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
        <div className={styles.SearchForm}>
            <div className={styles.Form}>
                <h3 className={styles.FormTitle}>Course Search</h3>
                <form onSubmit={handleSearch} className={styles.FormInputs}>
                    <div className={styles.CountryInput}>
                        <label htmlFor="country">Country Code:</label>
                        <input type="text" id="country" onChange={(e)=>setCountry(e.target.value)} autoComplete="false" className={styles.FormInput}></input>
                    </div>
                    <div className={styles.RegionInput}>
                        <label htmlFor="region">Region Code:</label>
                        <input type="text" id="region" onChange={(e)=>setRegion(e.target.value)} autoComplete="false" className={styles.FormInput}></input>
                    </div>
                    <button type="submit" className={styles.SearchButton}>Search</button>
                    <br/>
                </form>
            </div>
            <div className={styles.PageButtons}>
                <button onClick={removeOffset}>Previous Page</button>
                <button onClick={addOffset}>Next Page</button>
            </div>
        </div>
    )
}

export default SearchForm