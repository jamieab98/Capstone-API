function Courses({courseData}){
    
    return(
        <div>
            {courseData.map((course)=>(
                <div key={course['id']}>
                    <div>{course['name']}</div>
                    <div>{course['country_code']}, {course['region_code']}, {course['locality']}</div>
                    <div>{course['holes']}</div>
                    <div>{course['verification_strength']}</div>
                    <div>{course['website']}</div>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default Courses