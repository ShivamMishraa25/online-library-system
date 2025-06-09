import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="errorContainer">
      <div className="errorIcon">!</div>
      <div className="errorTitle">Something went wrong</div>
      <div className="errorMsg">Sorry, the page you're looking for doesn't exist. Please try again later.</div>
      <Link to="/" className='backToHome'>Go to Home</Link>
    </div>
  )
}

export default Error