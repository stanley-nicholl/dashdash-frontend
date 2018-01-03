import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom'

class Configuring extends Component{
  componentDidMount = () => {
    setTimeout( () => { window.location.pathname = '/createSchedule' }, 3000);
  }

  render () {
    return (
      <div className="body d-flex flex-column justify-content-between">
        <h2 className="py-4 mb-4 title font-weight-bold">building schedule</h2>
        <img className="loading" src="./img/branding/loading-orange.svg" />
        <div className="py-3">
          <h4 className="font-weight-bold mt-1">configuring. . .</h4>
        </div>
      </div>
    )
  }
}

export default Configuring
