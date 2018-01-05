import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import GettingStarted from './components/GettingStarted'
import ScheduleType from './components/ScheduleType'
import ArrivalTime from './components/ArrivalTime'
import Configuring from './components/Configuring'
import CreateSchedule from './components/CreateSchedule'
import EditSchedule from './components/EditSchedule'
import UpcomingWeek from './components/UpcomingWeek'
import MyProfile from './components/MyProfile'
import ScheduleDashboard from './components/ScheduleDashboard'
import InProgressSchedule from './components/InProgressSchedule'
import Navigation from './components/common-elements/Navigation'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userToken: localStorage.getItem('dashdashUserToken'),
      userId: null,
      firstname: null,
      lastname: null,
      email: null,
      children: null,
      pets: null,
      plans: [],
      newScheduleType: null,
      editDaysOfTheWeek: null,
      newArrivalTime: '9:00 AM',
      editArrivalTime: null,
      badges:[]
    }
  }

  componentDidMount = async () => {
    // check for previously logged in user
    if (this.state.userToken) {
      const user = await this.fetchUserData(this.state.userToken)
      // if user does not exist, they have been deleted/disabled on the API, so remove local token
      if (!user) {
        localStorage.removeItem('dashdashUserToken')
        this.setState({ userToken: null })
      }
      // if user exists, save user data to state
      else this.setState({ ...user })
    }
  }

  updateNewScheduleKidsPetsData = (kids, pets) => {
    this.setState({children: kids, pets: pets})
  }

  updateNewScheduleTypeData = (type) => {
    this.setState({newScheduleType: type})
  }

  updateNewScheduleArrivalTimeData = (time) => {
    this.setState({newArrivalTime: time})
  }

  shouldComponentUpdate() {
    if (window.location.pathname === '/signUp') return false //do not rerender when saving state on signUp page
    if (window.location.pathname === '/signIn') return false //do not rerender when saving state on signIn page
    return true
  }

  // GET USER DATA (USER & PLANS)
  fetchUserData = async (token) => {
    // get user data from API
    const userDataResponse = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/users/fromToken`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    if (userDataResponse.status !== 200) return null // user does not exist on server
    const userDataJSON = await userDataResponse.json()
    const { id: userId, first_name: firstname, last_name: lastname, email, children, pets } = userDataJSON.User
    // get plans from API
    const plansDataResponse = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/plans/users/${userId}`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    const plansDataJSON = await plansDataResponse.json()
    const plans = plansDataJSON.Plans
    // return user with plans
    return { userId, firstname, lastname, email, children, pets, plans }
  }


  // get user Badges

  // fetchUserBadges = async (userId)=>{
  //
  //   const token = localStorage.getItem('dashdashUserToken')
  //
  //   let badgesResponce = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/badges/user/${userId}`, {
  //     method: 'GET',
  //     headers: {
  //       'authorization': `Bearer ${token}`
  //     }
  //   })
  //   let allBadges = await badgesResponce.json()
  //
  //   this.setState({badges:allBadges})
  //
  // }

  // SET APP STATE FROM SUB-COMPONENTS
  saveAppState = (data) => {
    this.setState(data)
  }

  //USE LINKS TO DYNAMICALLY CHANGE THE URL (EVEN FOR IMAGES OR BUTTONS)
  //REMOVE NAVIGATION - JUST HERE FOR DEV

  //FIGURE OUT HOW TO TOGGLE NAVIGATION ON AND OFF
  render() {
    const createScheduleObj = {
      children: this.state.children,
      pets: this.state.pets,
      newScheduleType: this.state.newScheduleType,
      newArrivalTime: this.state.newArrivalTime
    }

    return (
      <Router>
        <div className="App">
          { !this.state.userToken ? <Redirect push to='/signIn' /> : null }

          <Route exact path='/signIn' component={ (props) => <SignIn { ...props } functions={ { saveAppState: this.saveAppState, fetchUserData: this.fetchUserData } } /> } />

          <Route exact path='/signUp' component={ (props) => <SignUp { ...props } functions={ { saveAppState: this.saveAppState, fetchUserData: this.fetchUserData } } /> } />

          <Route exact path='/gettingStarted' component={ (props) => <GettingStarted { ...props } updateNewScheduleKidsPetsData= {this.updateNewScheduleKidsPetsData} id={this.state.userId} />}/>

          <Route exact path='/scheduleType' component={ (props) => <ScheduleType { ...props } updateNewScheduleTypeData= {this.updateNewScheduleTypeData} />}/>

          <Route exact path='/arrivalTime' component={(props)=> <ArrivalTime { ...props } time={this.state.newArrivalTime} updateNewScheduleArrivalTimeData={this.updateNewScheduleArrivalTimeData} />}/>

          <Route exact path='/navigation' component= {(props)=> <Navigation {...props} />}/>

          <Route exact path='/configuring' component={Configuring}/>

          <Route exact path='/createSchedule' component={ (props) => <CreateSchedule { ...props } test={{ children: this.state.children, pets: this.state.pets, newScheduleType: this.state.newScheduleType, newArrivalTime: this.state.newArrivalTime, userId: this.state.userId }} />} />

          <Route exact path='/myProfile' component={(props) => <MyProfile { ...props } firstname={this.state.firstname} lastname={this.state.lastname} kids={this.state.children} pets={this.state.pets} userId={this.state.userId}/>}/>

          <Route path='/inProgressSchedule/:planId' component={ (props) => <InProgressSchedule token={ this.state.userToken } userId={ this.state.userId } { ...props } /> }/>

          <Route exact path='/editSchedule' component={EditSchedule}/>

          <Route exact path='/upcomingWeek' component={UpcomingWeek}/>

          <Route exact path='/navigation' component={Navigation}/>
          <Route exact path='/' component={ (props) => <ScheduleDashboard { ...props } plans={this.state.plans} firstname={this.state.firstname} />}/>
        </div>
      </Router>
    )
  }

}

export default App
