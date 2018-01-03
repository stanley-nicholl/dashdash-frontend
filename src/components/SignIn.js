import React, { Component } from 'react'
import {BrowserRouter as Router, Link } from 'react-router-dom'

class SignIn extends Component {

  signin = async () => {
    // get props functions
    const { fetchUserData, saveAppState } = this.props.functions
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
      const user = await fetchUserData(userToken)
      // display success message
      signinMessagebox.innerHTML = `
        <div>
          Welcome back, ${user.firstname}!
        </div>
      `
      // save to local storage & state
      localStorage.setItem('dashdashUserToken', userToken)
      saveAppState({ userToken, ...user })
      // advance to scheduleDashboard
      setTimeout(() => this.props.history.push('/'), 1000)
    }
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <section className="form-dark">
          <div className="card card-image">
            <div className="card-content text-white rgba-stylish-strong py-5 px-5 z-depth-4 d-flex flex-column justify-content-between">
              <div className="text-center">
                  <h3 className="white-text mb-5 mt-4 font-bold"><strong>SIGN</strong> <a className="orange-text font-bold"><strong> IN</strong></a></h3>
              </div>
              <form id="signup-form">
                <div className="md-form">
                    <input type="text" name="email" id="signin-email" className="form-control white-text"/>
                    <label htmlFor="signin-email">Your email</label>
                </div>
                <div className="md-form pb-3">
                    <input type="password" name="password" id="signin-password" className="form-control white-text"/>
                    <label htmlFor="signin-password">Your password</label>
                </div>
                <div id="signin-messagebox" className="mb-3">
                  {/* Messages go here */}
                </div>
                <div className="row d-flex align-items-center mb-4">
                    <div className="text-center mb-3 col-md-12">
                        <button onClick={ this.signin } type="button" className="btn blue darken-2 btn-block btn-rounded z-depth-1">Sign in</button>
                    </div>
                </div>
              </form>
              <div className="col-md-12">
                  <p className="font-small white-text d-flex justify-content-end signin-link">Don't have an account? <Link to={'/signUp'} className="orange-text ml-1 font-bold"> Create an account</Link></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SignIn
