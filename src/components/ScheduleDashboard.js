import React from 'react';
import Headertype from './common-elements/Header'



const ScheduleDashboard = ({plans}) => {


  return(
  <div className="ScheduleDashboard">
    <Headertype />
    <h1>Aldo's Schedules</h1>
    {plans.map(plan=>{
      return (
        <div>
          {plan.name}<br/>
          {if(plan.active){return 'active'}else{return'disabled'}}
        </div>
      )
    })}
  </div>
  )
};

export default ScheduleDashboard;
