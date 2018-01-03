import React, { Component } from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

class SignUp extends Component {

  signup = async () => {
    // get props functions
    const { fetchUserData, saveAppState } = this.props.functions
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
      const user = await fetchUserData(userToken)
      // save to local storage & state
      localStorage.setItem('dashdashUserToken', userToken)
      saveAppState({ userToken, ...user })
      // advance to scheduleDashboard
      setTimeout(() => this.props.history.push('/'), 1000)
    }
  }

  render() {
    return (
      <div>
        <section className="form-dark">
          <div className="card card-image">
            <div className="card-content text-white rgba-stylish-strong py-5 px-5 z-depth-4 d-flex flex-column justify-content-between">
              <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-bold"><strong>SIGN</strong> <a className="orange-text font-bold"><strong> UP</strong></a></h3>
              </div>
              <form id="signup-form">
                <div className="md-form">
                  <input type="text" id="signup-firstname" name="firstname" className="form-control white-text" />
                  <label htmlFor="signup-first-name">Your first name</label>
                </div>
                <div className="md-form">
                  <input type="text" id="signup-lastname" name="lastname" className="form-control white-text" />
                  <label htmlFor="last-name">Your last name</label>
                </div>
                <div className="md-form">
                  <input type="email" id="signup-email" name="email" className="form-control white-text" />
                  <label htmlFor="signup-email">Your email</label>
                </div>
                <div className="md-form pb-3">
                  <input type="password" id="signup-password" name="password" className="form-control white-text" />
                  <label htmlFor="signup-password">Your password</label>
                </div>
                <div id="signup-messagebox" className="mb-3">
                  {/* Messages go here */}
                </div>
                <div className="row d-flex align-items-center mb-4">
                  <div className="text-center mb-3 col-md-12">
                    <button type="button" onClick={ this.signup } className="btn blue darken-2 btn-block btn-rounded z-depth-1">Sign up</button>
                  </div>
                </div>
              </form>
              <div className="col-md-12">
                <p className="font-small white-text d-flex justify-content-end signin-link">Have an account? <Link to={'/signIn'} className="orange-text ml-1 font-bold">Sign In</Link></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SignUp
