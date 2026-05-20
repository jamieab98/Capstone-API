import { Link } from "react-router-dom"

function NavBar(){

    return(
        <>
            <Link to="/">Home</Link>
            <Link to="SearchDisplay">Find Courses</Link>
            <Link to="About">About</Link>
        </>
    )
}

export default NavBar