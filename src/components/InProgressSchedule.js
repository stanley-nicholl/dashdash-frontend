import React, { Component } from 'react'
import Header from './inProgress/Header'
import ActiveItemBox from './inProgress/ActiveItemBox'
import ItemsContainer from './inProgress/ItemsContainer'
import MainStatusBar from './inProgress/MainStatusBar'

class InProgressSchedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      plan: {},
      items: [],
      duration: null,
      running: false,
      currentItemIndex: null,
      timeLeft: null,
      intervalId: null
    }
  }

  componentDidMount = async () => {
    // catch error where navigating directly to this component before app has fetched user data
    if (!this.props.userId) return null
    // get plan data
    const planResponse = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/plans/${this.props.planId}/users/${this.props.userId}`, {
      headers: {
        'authorization': `Bearer ${this.props.token}`
      }
    })
    const planJSON = await planResponse.json()
    const plan = planJSON.Plan
    // calculate duration in minutes
    let duration
    const deadlineArray = this.splitTime(plan.deadline)
    const deadline = (60 * deadlineArray[0]) + deadlineArray[1]
    const startTimeArray = this.splitTime(plan.start_time)
    const startTime = (60 * startTimeArray[0]) + startTimeArray[1]
    if (deadline > startTime) duration = deadline - startTime
    else duration = (24 * 60) + deadline - startTime
    // get all plan items
    const planItemsResponse = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/plans/${this.props.planId}/users/${this.props.userId}/items`, {
      headers: {
        'authorization': `Bearer ${this.props.token}`
      }
    })
    const planItemsJSON = await planItemsResponse.json()
    const items = planItemsJSON.Items
    // change time values in data structure
    const modifiedItems = items.map(el => {
      const splitTime = this.splitTime(el.duration)
      el.timeHours = splitTime[0]
      el.timeMinutes = splitTime[1]
      el.timeSeconds = splitTime[2]
      return el
    })
    // save plan and items list to state
    this.setState({ plan, duration, items: modifiedItems })
  }

  splitTime(timeString) {
    if (!timeString) return null
    return timeString.split(':').map(el => Number(el))
  }

  startTimer = () => {
    // this.setState({ currentItemIndex: 0 }) //reset first item
    console.log('click start')
  }

  advanceItem = () => {
    // for later development
    console.log('click advanceItem')
  }

  stopTimer = () => {
    console.log('click stop')
  }

  render() {
    return (
      <div style={{ backgroundColor: '#EAEBED' }}>
        <div style={{ position: 'fixed', top: '0', width: '100vw', zIndex: '1' }}>
          <Header name={ this.state.plan.name } running={ this.state.running } />
          <ActiveItemBox currentItem={ this.state.items[this.state.currentItemIndex] } running={ this.state.running } functions={{ startTime: this.startTimer, advanceItem: this.advanceItem }} />
        </div>
        <ItemsContainer currentItemIndex={ this.state.currentItemIndex } items={ this.state.items } />
        <MainStatusBar running={ this.state.running } duration={ this.state.duration } timeLeft={ this.state.timeLeft } deadline={ this.state.plan.deadline } functions={ this.stopTimer } />
      </div>
    )
  }
}

export default InProgressSchedule