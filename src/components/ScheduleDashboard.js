import React from 'react';
import Headertype from './common-elements/Header'
import ScheduleTile from './ScheduleTile'
import AddNewButton from './common-elements/AddNewButton'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const ScheduleDashboard = ({plans, firstname, history}) => {


  return(
  <div className="ScheduleDashboard">
    <Headertype history={history} />
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
