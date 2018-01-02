import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'

const SignUp = () => {

  return (
    <div>
      <section className="form-dark">
        <div className="card card-image">
          <div className="card-content text-white rgba-stylish-strong py-5 px-5 z-depth-4 d-flex flex-column justify-content-between">
            <div className="text-center">
                <h3 className="white-text mb-5 mt-4 font-bold"><strong>SIGN</strong> <a className="orange-text font-bold"><strong> UP</strong></a></h3>
            </div>
            <div className="md-form">
                <input type="text" name="first_name" className="form-control white-text"/>
                <label htmlFor="Form-email5">Your first name</label>
            </div>
            <div className="md-form">
                <input type="text" name="last_name" className="form-control white-text"/>
                <label htmlFor="Form-email5">Your last name</label>
            </div>
            <div className="md-form">
                <input type="text" name="email" className="form-control white-text"/>
                <label htmlFor="Form-email5">Your email</label>
            </div>
            <div className="md-form pb-3">
                <input type="password" name="password" className="form-control white-text"/>
                <label htmlFor="Form-pass5">Your password</label>
            </div>
            <div className="row d-flex align-items-center mb-4">

                <div className="text-center mb-3 col-md-12">
                    <button type="button" className="btn blue darken-2 btn-block btn-rounded z-depth-1">Sign up</button>
                </div>
            </div>
            <div className="col-md-12">
                <p className="font-small white-text d-flex justify-content-end signin-link">Have an account? <a href="#" className="orange-text ml-1 font-bold"> <Link to={'/signIn'}>Sign In</Link></a></p>
            </div>
          </div>
        </div>
      </section>
    </div>

  )

}

export default SignUp
