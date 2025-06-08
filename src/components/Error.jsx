import React from 'react'
import "./style.css"

function Error() {
  return (
    <div className="errorContainer">
      <div className="errorIcon">!</div>
      <div className="errorTitle">Something went wrong</div>
      <div className="errorMsg">Sorry, we couldn't load the content. Please try again later.</div>
    </div>
  )
}

export default Error