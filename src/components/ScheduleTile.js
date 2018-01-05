import React from 'react';
import { Link } from 'react-router-dom'

const ScheduleTile = ({planId, name, active, startTime}) => {
  return (
    
  <div className="schedule-card mb-3 col-5">
    <div className="d-flex flex-column schedule-card-content">
      <Link to={`/inProgressSchedule/${planId}`} >
        <h5 className="mt-3 font-weight-bold text-white">{name}</h5>
        <p>{startTime}</p>
      </Link>
    </div>
  </div>
  
  );
}

export default ScheduleTile;
