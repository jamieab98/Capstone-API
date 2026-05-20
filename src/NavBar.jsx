import { Link } from "react-router-dom"

function NavBar(){

    return(
        <>
            <Link to="/">Home</Link>
            <Link to="SearchDisplay">Find Courses</Link>
        </>
    )
}

export default NavBar