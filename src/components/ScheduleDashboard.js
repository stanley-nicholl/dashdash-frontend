import React from 'react';
import Headertype from './common-elements/Header'
import ScheduleTile from './ScheduleTile'



const ScheduleDashboard = ({plans, firstname}) => {


  return(
  <div className="ScheduleDashboard">
    <Headertype />
    <h1 className="container">{firstname}'s Schedules'</h1>
    {plans.map((plan, index)=>{
      return <ScheduleTile key={index}  name={plan.name} active={plan.active} startTime={plan.start_time} />
    })}
  </div>
  )
};

export default ScheduleDashboard;
