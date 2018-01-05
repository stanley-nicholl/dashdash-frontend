import React from 'react';
import Headertype from './common-elements/Header'
import ScheduleTile from './ScheduleTile'
import AddNewButton from './common-elements/AddNewButton'
import { Link } from 'react-router-dom'

const ScheduleDashboard = ({plans, firstname}) => {


  return(
  <div className="ScheduleDashboard">
    <Headertype />
    <h1 className="container">{firstname}'s Schedules</h1>
    {plans.map((plan, index)=>{
      return <ScheduleTile key={index}  name={plan.name} active={plan.active} startTime={plan.start_time} />
    })}
    <footer className="footer-container">
    <Link to={'/scheduleType'}>
    <AddNewButton />
    </Link>
    </footer>
  </div>
  )
};

export default ScheduleDashboard;
