import React from 'react'

const ScheduleType = () => {

  return (
    <div className="body">
      <h2 className="py-4 mb-5 title font-weight-bold">a few quick q's</h2>
      <img className="selection-img mb-2" src="./img/branding/days-of-the-week-orange.svg" />
      <h5 className="mb-4 px-5">what type of schedule will this be?</h5>
      <div className="switch">
        <label>
          weekday
          <input type="checkbox"/>
          <span className="lever"></span>
          weekend
        </label>
      </div>
      <div className="footer-container py-3">
        <h4 className="font-weight-bold mt-1">NEXT ></h4>
      </div>
    </div>
  )
}

export default ScheduleType
