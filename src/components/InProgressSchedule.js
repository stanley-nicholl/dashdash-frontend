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
        <div style={{ position: 'fixed', top: '0', width: '100vw', zIndex: '1' }}>
          <Header />
          <ActiveItemBox />
        </div>
        <ItemsContainer />
        <MainStatusBar />
      </div>
    )
  }
}

export default InProgressSchedule