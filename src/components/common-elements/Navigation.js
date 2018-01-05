import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
    <div className="navigation">
      <div className="nav-top d-flex justify-content-end">
        <div className="d-flex justify-content-end mb-5">
          <img className="logout-img mt-4 mr-3" src="./img/branding/logout-navy.svg" alt="logout" />
        </div>
      </div>
      <div className="nav-body mt-4">
        <div className="d-flex mb-4 ml-4 align-items-center">
          <img className="nav-img mb-2 mr-4" src="./img/branding/running-man-white.svg" alt="running man" />
          <Link to={'/myProfile'}><h5 className="text-white">My Profile</h5></Link>
        </div>
        <div className="d-flex mb-4 ml-4 align-items-center">
          <img className="nav-img mb-2 mr-4" src="./img/branding/my-schedule-white.svg" alt="schedule" />
          <Link to={'/scheduleDashboard'}><h5 className="text-white">My Schedules</h5></Link>
        </div>
        <div className="d-flex mb-4 ml-4 align-items-center">
          <img className="nav-img mb-2 mr-4" src="./img/branding/upcoming-week-white.svg" alt="upcoming week" />
          <Link to={'/upcomingWeek'}><h5 className="text-white">My Upcoming Week</h5></Link>
        </div>
      </div>
      <div className="nav-footer">
        <h3 className="nav-title text-center">DASH DASH</h3>
      </div>
    </div>
  )

}

export default Navigation
