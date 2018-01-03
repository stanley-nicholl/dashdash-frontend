import React from 'react';

const ScheduleTile = ({name, active, startTime}) => {
  return (
    <div className="card card-cascade">
      <div className="view gradient-card-header blue-gradient">
          <h2 className="h2-responsive">{name}</h2>
          <p>{startTime}</p>
      </div>
    </div>
  );
}

export default ScheduleTile;
