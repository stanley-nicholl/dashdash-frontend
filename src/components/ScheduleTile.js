import React from 'react';

const ScheduleTile = ({name, active, startTime}) => {
  return (
  <div className="card card-cascade tiles">
    <div className={`view gradient-card-header ${(active) ? 'blue-gradient' : 'scheduleTile'}`}>
        <h2 className="h2-responsive">{name}</h2>
        <p>{startTime}</p>
    </div>
  </div>
  );
}

export default ScheduleTile;
