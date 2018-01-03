import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import './App.css';
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
  constructor(){
    super()
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
      editArrivalTime: null
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
    console.log(type);
    this.setState({newScheduleType: type})
  }

  // updateNewScheduleKidsPetsData = (kids, pets) => {
  //   this.setState({children: kids, pets: pets})
  // }

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

  // SIGNUP
  signup = async () => {
    // clear prior error message
    const signupMessagebox = document.querySelector('#signup-messagebox')
    signupMessagebox.innerHTML = ''
    // get form values
    const firstname = document.querySelector('#signup-firstname').value
    const lastname = document.querySelector('#signup-lastname').value
    const email = document.querySelector('#signup-email').value
    const password = document.querySelector('#signup-password').value
    // send POST data to API
    const signupResponse = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/auth/signup`, {
      method: 'POST',
      body: JSON.stringify({ first_name: firstname, last_name: lastname, email, password }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const signupJSON = await signupResponse.json()
    // check for error
    if (signupResponse.status !== 201) {
      signupMessagebox.innerHTML = `
        <div>
          ${signupJSON.message}
        </div>
      `
    } else {
      // display success message
      signupMessagebox.innerHTML = `
        <div>
          Welcome to DashDash, ${firstname}!
        </div>
      `
      // get user data from API
      const userToken = signupJSON.Auth
      const user = await this.fetchUserData(userToken)
      // save to local storage & state
      localStorage.setItem('dashdashUserToken', userToken)
      this.setState({ userToken, ...user })
    }
  }

  // SIGNIN
  signin = async () => {
    // clear prior error message
    const signinMessagebox = document.querySelector('#signin-messagebox')
    signinMessagebox.innerHTML = ''
    // get form values
    const email = document.querySelector('#signin-email').value
    const password = document.querySelector('#signin-password').value
    // send POST data to API
    const signinResponse = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/auth/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const signinJSON = await signinResponse.json()
    // check for error
    if (signinResponse.status !== 200) {
      signinMessagebox.innerHTML = `
        <div>
          ${signinJSON.message}
        </div>
      `
    } else {
      // get user data from API
      const userToken = signinJSON.Auth
      const user = await this.fetchUserData(userToken)
      // display success message
      signinMessagebox.innerHTML = `
        <div>
          Welcome back, ${user.firstname}!
        </div>
      `
      // save to local storage & state
      localStorage.setItem('dashdashUserToken', userToken)
      this.setState({ userToken, ...user })
    }
  }

  //USE LINKS TO DYNAMICALLY CHANGE THE URL (EVEN FOR IMAGES OR BUTTONS)
  //REMOVE NAVIGATION - JUST HERE FOR DEV

  //FIGURE OUT HOW TO TOGGLE NAVIGATION ON AND OFF
  render() {
    const obj = {
      children: this.state.children,
      pets: this.state.pets,
      newScheduleType: this.state.newScheduleType,
      newArrivalTime: this.state.newArrivalTime
    }
    return (
      <Router>
        <div className="App">
          {/* { this.state.userToken ? <Redirect push to='/scheduleDashboard' /> : <Redirect push to='/signIn' /> } */}

          <Route path='/signIn' component={ () => <SignIn functions={ this.signin } /> } />
          <Route path='/signUp' component={ () => <SignUp functions={ this.signup } /> } />
          <Route path='/gettingStarted' component={ () => <GettingStarted updateNewScheduleKidsPetsData= {this.updateNewScheduleKidsPetsData} />}/>
          <Route path='/scheduleType' component={ () => <ScheduleType updateNewScheduleTypeData= {this.updateNewScheduleTypeData} />}/>
          <Route path='/arrivalTime' component={ArrivalTime}/>
          <Route path='/configuring' component={Configuring}/>

          <Route path='/createSchedule' component={ () => <CreateSchedule test={obj} />} />

          <Route path='/inProgressSchedule' component={InProgressSchedule}/>
          <Route path='/myProfile' component={MyProfile}/>
          <Route path='/scheduleDashboard' component={()=> <ScheduleDashboard plans={this.state.plans} firstname={this.state.firstname} />}/>
          <Route path='/editSchedule' component={EditSchedule}/>
          <Route path='/upcomingWeek' component={UpcomingWeek}/>
          <Route path='/navigation' component={Navigation}/>

        </div>
    </Router>
    )
  }

}

export default App
