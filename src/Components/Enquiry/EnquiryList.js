import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const EnquiryList = () => {
  const [enquires, setEnquires] = useState([]);
  const courses = useSelector((state) => state.course.courses)
  const fetchEnquires = async () => {
    const res = await axios.get('http://localhost:8000/enquires');
    console.log(res.data);
    console.log("Fetching courses list from redux store : ", courses);

    setEnquires(res.data)
  }
  useEffect(() => {
    fetchEnquires();
  }, [])
  return (
    <div className='card container-fluid'>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Course Name</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {
            enquires.map((enquiry, index) => {
              return <tr key={index}>
                <th scope="row">{enquiry.id}</th>
                <th scope="row">{enquiry.courseName}</th>
                <td>{enquiry.firstName}</td>
                <td>{enquiry.lastName}</td>
                <td>{enquiry.email}</td>
                <td>{enquiry.phoneNo}</td>
                <td>{enquiry.message}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default EnquiryList