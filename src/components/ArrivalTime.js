import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import NextButton from './common-elements/NextButton'

const ArrivalTime = () => {

  // need to add component did mount and change to class
  // Time Picker Initialization
  // $('#input_starttime').pickatime({
  //     twelvehour: true
  // });

  return (
    <div className="body">
      <h2 className="py-4 mb-5 title font-weight-bold">create a schedule</h2>
      <img className="selection-img mb-2" src="./img/branding/days-of-the-week-orange.svg" />
      <h5 className="px-5">when do you need to be at your destination?</h5>
      <small className="mb-5 pb-5">aka work, the gym, the opera, HH</small>
      <div className="container">
        <div className="md-form mt-5">
          <input placeholder="select a time" type="text" id="input_starttime" className="form-control timepicker"/>
        </div>
      </div>

      <div className="footer-container py-3">
        <Link to={'/configuring'}>
          <NextButton />
        </Link>
      </div>
    </div>
  )


}



export default ArrivalTime
