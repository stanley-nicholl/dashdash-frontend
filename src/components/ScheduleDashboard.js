import React from 'react';
import Headertype from './common-elements/Header'
import ScheduleTile from './ScheduleTile'
import Navigation from './common-elements/Navigation'
import AddNewButton from './common-elements/AddNewButton'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const ScheduleDashboard = ({plans, firstname}) => {

  const openNav = () => {
      const test = document.getElementById("side-nav").style.width = "85vw";
      console.log(test);
  }

  const closeNav = () => {
      document.getElementById("side-nav").style.width = "0";
  }

  return(
  <div className="body">
    <Navigation closeNav={closeNav}/>
    <Headertype openNav={openNav}/>
    <div className="container schedule-content">
      <h2 className="py-3">{firstname}'s Schedules</h2>
      <div className="schedule-section row mx-3">
        {plans.map((plan, index)=>{
          return <ScheduleTile key={index} name={plan.name} active={plan.active} startTime={plan.start_time} />
        })}
      </div>
    </div>
    <footer className="footer-container">
    <Link to={'/scheduleType'}>
      <AddNewButton />
    </Link>
    </footer>
  </div>
  )
};

export default ScheduleDashboard;
