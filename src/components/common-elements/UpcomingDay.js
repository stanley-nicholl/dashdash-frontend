import React from 'react'

const UpcomingDay = ({day}) => {

  return (
    <div className="d-flex upcoming-content justify-content-between align-items-center">
      <div className="d-flex align-items-center mt-3">
        <p className="upcoming-day-circle text-center mr-3">{day}</p>
        <p className="upcoming-day-name">Weekday Schedule</p>
      </div>
      <button class="btn snooze-btn px-3 py-0">snooze</button>
    </div>
  )
}

export default UpcomingDay
