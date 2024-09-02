import React, { useEffect, useState } from 'react'
import './Courses.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setCourses } from '../../slices/CourseSlice'
const Courses = () => {
  // const [courses, setCourses] = useState([]);
  const courses = useSelector((state) => state.course.courses)
  
  const dispatch = useDispatch();
  const fetchCourses = async () => {
    const res = await axios.get('http://localhost:8000/courses');
    console.log(res.data);
    // setCourses(res.data);
    dispatch(setCourses(res.data));
  }
  useEffect(() => {
    fetchCourses();
    console.log("Courses from redux : ", courses);
  }, [])
  return (
    <div className='courses-container'>
      {
        courses.map((course, _) => {
          return <CourseCard key={course.id} courseDetails={course} />
        })
      }
    </div>
  )
}

const CourseCard = ({ courseDetails }) => {
  const { course, description, image, id } = courseDetails;
  return <div className='card'>
    <img src={image} className='image' />
    <div style={{ display: 'flex', flexDirection: "column", gap: 6 }}>
      <div className="title">{course}</div>
      <div className="desc" title={description}>{description}</div>
    </div>
    <div style={{ borderBottom: '1.5px solid rgb(225,225,225)', width: '100%', marginTop: '10px', marginBottom: '10px' }} />
    <Link to={`/enquiry/${id}`}><button className='btn' style={{ float: 'right' }}>Enquire</button></Link>
  </div>
}

export default Courses