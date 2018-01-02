import React from 'react';

const ScheduleTile = ({name, active, startTime}) => {
  return (
    <div>
      <button type="button" class="btn btn-outline-warning waves-effect">{name}</button>
    </div>
  );
}

export default ScheduleTile;
