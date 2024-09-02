import React, { useEffect, useState } from 'react'
import './Enquiry.css'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Enquiry = () => {
  const params = useParams();
  const [courseDetails, setCourseDetails] = useState({});
  const [messageDetails, setMessageDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    message: ""
  });
  useEffect(() => {
    fetchCourseById()
  }, [])
  const fetchCourseById = async () => {
    const { id } = params;
    const res = await axios.get(`http://localhost:8000/courses/${id}`);
    setCourseDetails(res.data)
  }

  const inputHandler = (e) => {
    setMessageDetails({ ...messageDetails, [e.target.id]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(messageDetails);
    await axios.post(`http://localhost:8000/enquires`, { ...messageDetails, courseName: courseDetails.course })
  }
  return (
    <div className='enquiry-container'>
      <div className='container card my-3'>
        <div className='title'>Enquiry for <span style={{ color: 'rgb(28 126 33)' }}>{courseDetails.course}</span></div>
        <form className="container my-3" onSubmit={submitHandler}>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" onChange={inputHandler} className="form-control" id="firstName" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" onChange={inputHandler} className="form-control" id="lastName" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" onChange={inputHandler} className="form-control" placeholder='ex: name@example.com' id="email" aria-describedby="emailHelp" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="phoneNo" className="form-label">Phone Number</label>
                <input type="tel" onChange={inputHandler} className="form-control" placeholder='ex: 000-000-0000' id="phoneNo" aria-describedby="emailHelp" required />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" onChange={inputHandler} id="message" required rows={5} />
              </div>
            </div>
          </div>
          <button className='btn' style={{ float: 'right' }} type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Enquiry