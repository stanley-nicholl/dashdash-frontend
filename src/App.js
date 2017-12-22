import React, { Component } from 'react';
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
    signIn: <SignIn />
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

  updatePageState = (page) => {
    this.setState({page: page})
  }

  showPage = (page) => {
     return (this.pages[page])
  }

  render() {
    return (
      <div className="App">
        {this.showPage(this.state.page)}
      </div>
    );
  }
}

export default App;
