import React, { useEffect } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Courses from './Components/Courses/Courses'
import Error from './Components/Error/Error'
import Enquiry from './Components/Enquiry/Enquiry'
import EnquiryList from './Components/Enquiry/EnquiryList'
import { useSelector } from 'react-redux'
const App = () => {
  // const { data } = useGetCoursesQuery();
  const authInfo = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Header />
        <Routes>
          <Route path='/' element={<Courses />} />
          {
            authInfo.logInfo.isLoggedIn &&
            <>
              <Route path='/enquiry'>
                <Route index element={<EnquiryList />} />
                <Route path=':id' element={<Enquiry />} />
              </Route>
            </>
          }
          <Route path='/*' element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App