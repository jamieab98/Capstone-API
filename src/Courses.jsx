import styles from "./styling/Courses.module.css"

function Courses({courseData}){
    
    return(
        <div className={styles.CoursesContainer}>
            {courseData.map((course)=>(
                <div key={course['id']} className={styles.CourseCard}>
                    <div>{course['name']}</div>
                    <div>{course['country_code']}, {course['region_code']}, {course['locality']}</div>
                    <div>{course['holes']}</div>
                    <div>{course['verification_strength']}</div>
                    <a href={course['website']} className={styles.Website}>{course['website']}</a>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default Courses