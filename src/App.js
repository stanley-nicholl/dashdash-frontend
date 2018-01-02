import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css';
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import GettingStarted from './components/GettingStarted'
import ScheduleType from './components/ScheduleType'
import ArrivalTime from './components/ArrivalTime'
import Configuring from './components/Configuring'
import EditSchedule from './components/EditSchedule'
import UpcomingWeek from './components/UpcomingWeek'
import MyProfile from './components/MyProfile'
import ScheduleDashboard from './components/ScheduleDashboard'
import InProgressSchedule from './components/InProgressSchedule'
<<<<<<< HEAD
=======
import Navigation from './components/common-elements/Navigation'

>>>>>>> 1cfa09bba791836d4aea5f74842abc94a979776c
class App extends Component {
  constructor(){
    super()
    this.state = { }
  }

  //USE LINKS TO DYNAMICALLY CHANGE THE URL (EVEN FOR IMAGES OR BUTTONS)
  //REMOVE NAVIGATION - JUST HERE FOR DEV

  //FIGURE OUT HOW TO TOGGLE NAVIGATION ON AND OFF
  render() {
    return (
      <Router>
        <div className="App">
<<<<<<< HEAD
          <Route path='/:signIn' component={SignIn}/>
          <Route path='/:signUp' component={SignUp}/>
          <Route path='/:gettingStarted' component={GettingStarted}/>
          <Route path='/:scheduleType' component={ScheduleType}/>
          <Route path='/:arrivalTime' component={ArrivalTime}/>
          <Route path='/:configuring' component={Configuring}/>
          <Route path='/:inProgressSchedule' component={InProgressSchedule}/>
          <Route path='/:myProfile' component={MyProfile}/>
          <Route path='/' component={ScheduleDashboard}/>
          <Route path='/:editSchedule' component={EditSchedule}/>
          <Route path='/:upcomingWeek' component={UpcomingWeek}/>
=======
          <Route path='/signIn' component={SignIn}/>
          <Route path='/signUp' component={SignUp}/>
          <Route exact path='/gettingStarted' component={GettingStarted}/>
          <Route exact path='/scheduleType' component={ScheduleType}/>
          <Route exact path='/arrivalTime' component={ArrivalTime}/>


          <Route exact path='/configuring' component={Configuring}/>
          <Route path='/inProgressSchedule' component={InProgressSchedule}/>
          <Route path='/myProfile' component={MyProfile}/>
          <Route path='/scheduleDashboard' component={ScheduleDashboard}/>
          <Route path='/editSchedule' component={EditSchedule}/>
          <Route path='/upcomingWeek' component={UpcomingWeek}/>
          <Route path='/navigation' component={Navigation}/>
>>>>>>> 1cfa09bba791836d4aea5f74842abc94a979776c

        </div>
    </Router>
    );
  }

}

export default App;
