import React, { Component } from 'react'
import Header from './common-elements/Header'

class InProgressSchedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      something: 0
    }
  }

  render() {
    return (
      <Header />
    )
  }
}

export default InProgressSchedule