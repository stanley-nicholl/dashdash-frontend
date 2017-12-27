import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import SignIn from './components/SignIn'
import GettingStarted from './components/GettingStarted'
import Guided1 from './components/Guided1'
import Guided2 from './components/Guided2'
import Guided3 from './components/Guided3'
import Guided4 from './components/Guided4'
import Guided5 from './components/Guided5'
import SelectedSchedule from './components/SelectedSchedule'
import UpcomingWeek from './components/UpcomingWeek'
import MyProfile from './components/MyProfile'
import ScheduleDashboard from './components/ScheduleDashboard'
import InProgressSchedule from './components/InProgressSchedule'

class App extends Component {
  constructor(){
    super()
    this.state = {
      page: 'login'
    }
  }

  pages = {
    login: <Login />,
    signIn: <SignIn />,
    gettingStarted: <GettingStarted />,
    guided1: <Guided1 />,
    guided2: <Guided2 />,
    guided3: <Guided3 />,
    guided4: <Guided4 />,
    guided5: <Guided5 />,
    selectedSchedule: <SelectedSchedule />,
    upcomingWeek: <UpcomingWeek />,
    myProfile: <MyProfile />,
    scheduleDashboard: <ScheduleDashboard />,
    inProgressSchedule: <InProgressSchedule/>
  }

  updatePageState = (e) => {
    e.preventDefault()
    console.log('test');
    alert(e.target.name.value)

    const page = e.target.page.value

    this.setState({page: page})
  }

  showPage = (page) => {
    console.log(this.state.page);
    const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?page=${page}`;
    window.history.pushState({path:newUrl},'',newUrl);
    return (this.pages[page])
  }

  //USE LINKS TO DYNAMICALLY CHANGE THE URL (EVEN FOR IMAGES OR BUTTONS)

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/login' component={'./components/Login'}/>
          <Route path='/gettingStarted' component={'./components/GettingStarted'}/>
          <Route path='/guided1' component={'./components/Guided1'}/>
          <Route path='/inProgressSchedule' component={'./components/InProgressSchedule'}/>
          <Route path='/myProfile' component={'./components/MyProfile'}/>
          <Route path='/scheduleDashboard' component={'./components/ScheduleDashboard'}/>
          <Route path='/selectedSchedule' component={'./components/SelectedSchedule'}/>
          <Route path='/upcomingWeek' component={'./components/UpcomingWeek'}/>
        </div>
    </Router>
    );
  }
}

export default App;
