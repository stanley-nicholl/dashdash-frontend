import React from 'react';
import Headertype from './common-elements/Header'
import ScheduleTile from './ScheduleTile'



const ScheduleDashboard = ({plans}) => {


  return(
  <div className="ScheduleDashboard">
    <Headertype />
    <h1>Aldo's Schedules</h1>
    {plans.map(plan=>{
      return <ScheduleTile name={plan.name} active={plan.active} startTime={plan.start_time} />
    })}
  </div>
  )
};

export default ScheduleDashboard;
