function SearchForm(){

    return(
        <div>
            <h3>Course Search</h3>
            <form>
                <label>Country Code:</label>
                <input type="text"></input>
                <label>Region Code:</label>
                <input type="text"></input>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm