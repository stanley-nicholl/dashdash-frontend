import React from 'react'
import UpcomingDay from './common-elements/UpcomingDay'

const days = ['Su','M', 'T', 'W', 'Th', 'F', 'S']

// WILL NEED TO FIGURE OUT HOW TO ORDER THE WEEK ORDER (HAVE NEXT DAY BE AT THE TOP) AND GET FROM DB

const UpcomingWeek = () => {

  return (
    <div className="body">
      {/* <Common-header /> */}
      <h1 className="title">DASH DASH</h1>
      <h3 className="mt-2 mb-3">Upcoming Week</h3>
      <div className="upcoming-content d-flex flex-column justify-content-between container">
        {days.map(day => {
          return <UpcomingDay day={day} />
        })}
      </div>
      <small className="upcoming-footnote">*snooze skips schedule for one instance</small>
    </div>
  )
}

export default UpcomingWeek
