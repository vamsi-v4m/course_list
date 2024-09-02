import React from 'react'
import './Error.css'
const Error = ({ message = "Error" }) => {
  return (
    <div>{message}</div>
  )
}

export default Error