import React, { Component } from 'react'
import Header from './inProgress/Header'
import ActiveItemBox from './inProgress/ActiveItemBox'
import ItemsContainer from './inProgress/ItemsContainer'
import MainStatusBar from './inProgress/MainStatusBar'

class InProgressSchedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      something: 0
    }
  }

  render() {
    return (
      <div style={{ backgroundColor: '#EAEBED' }}>
        <Header />
        <ActiveItemBox />
        <ItemsContainer />
        <MainStatusBar />
      </div>
    )
  }
}

export default InProgressSchedule