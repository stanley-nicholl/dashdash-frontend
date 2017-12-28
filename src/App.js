import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import SignIn from './components/SignIn'
import GettingStarted from './components/GettingStarted'
import ScheduleType from './components/ScheduleType'
import Configuring from './components/Configuring'
import Guided3 from './components/Guided3'
import Guided4 from './components/Guided4'
import Guided5 from './components/Guided5'
import EditSchedule from './components/EditSchedule'
import UpcomingWeek from './components/UpcomingWeek'
import MyProfile from './components/MyProfile'
import ScheduleDashboard from './components/ScheduleDashboard'
import InProgressSchedule from './components/InProgressSchedule'

class App extends Component {
  constructor(){
    super()
    this.state = { }
  }

  //USE LINKS TO DYNAMICALLY CHANGE THE URL (EVEN FOR IMAGES OR BUTTONS)

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/:login' component={Login}/>
          <Route path='/:gettingStarted' component={GettingStarted}/>
          <Route path='/:scheduleType' component={ScheduleType}/>
          <Route path='/:' component={Configuring}/>
          <Route path='/:inProgressSchedule' component={InProgressSchedule}/>
          <Route path='/:myProfile' component={MyProfile}/>
          <Route path='/:scheduleDashboard' component={ScheduleDashboard}/>
          <Route path='/' component={EditSchedule}/>
          <Route path='/:upcomingWeek' component={UpcomingWeek}/>
        </div>
    </Router>
    );
  }
}

export default App;
