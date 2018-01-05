import React from 'react';

const ScheduleTile = ({name, active, startTime}) => {
  return (
  <div className="schedule-card mb-3 col-5">
    <div className="d-flex flex-column schedule-card-content">
        <h5 className="mt-3 font-weight-bold">{name}</h5>
        <p>{startTime}</p>
    </div>
  </div>
  );
}

export default ScheduleTile;
