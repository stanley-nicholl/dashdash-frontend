import React from 'react'
import UpcomingDay from './common-elements/UpcomingDay'
import Headertype from './common-elements/Header'
import Navigation from './common-elements/Navigation'

const days = ['Su','M', 'T', 'W', 'Th', 'F', 'S']

// WILL NEED TO FIGURE OUT HOW TO ORDER THE WEEK ORDER (HAVE NEXT DAY BE AT THE TOP) AND GET FROM DB

const UpcomingWeek = () => {

  const openNav = () => {
    const test = document.getElementById("side-nav").style.width = "85vw";
  }

  const closeNav = () => {
      document.getElementById("side-nav").style.width = "0";
  }

  return (
    <div className="body">
      <Navigation closeNav={closeNav}/>
      <Headertype openNav={openNav}/>
      <h2 className="pt-3 pb-0">Upcoming Week</h2>
      <small className="upcoming-footnote pt-0 pb-3">*snooze skips schedule for one instance</small>
      <div className="upcoming-content d-flex flex-column justify-content-between container">
        {days.map(day => {
          return <UpcomingDay day={day} />
        })}
      </div>

    </div>
  )
}

export default UpcomingWeek
