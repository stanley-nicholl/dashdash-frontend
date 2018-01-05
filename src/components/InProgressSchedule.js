import React, { Component } from 'react'
import { cloneDeep } from 'lodash'
import Header from './inProgress/Header'
import ActiveItemBox from './inProgress/ActiveItemBox'
import ItemsContainer from './inProgress/ItemsContainer'
import MainStatusBar from './inProgress/MainStatusBar'

class InProgressSchedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      planId: Number(this.props.match.params.planId),
      plan: {},
      items: [],
      duration: null, //in seconds
      running: false,
      currentItemIndex: null,
      timeLeft: null, //in seconds
      intervalId: null
    }
  }

  componentDidMount = async () => {
    await this.resetData()
  }

  resetData = async () => {
    // catch error where navigating directly to this component before app has fetched user data
    if (!this.props.userId) return null
    // get plan data
    const planResponse = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/plans/${this.state.planId}/users/${this.props.userId}`, {
      headers: {
        'authorization': `Bearer ${this.props.token}`
      }
    })
    const planJSON = await planResponse.json()
    const plan = planJSON.Plan
    // calculate duration in seconds
    let duration
    const deadline = this.timeStringToSeconds(plan.deadline)
    const startTime = this.timeStringToSeconds(plan.start_time)
    if (deadline > startTime) duration = deadline - startTime
    else duration = (24 * 60 * 60) + deadline - startTime
    // get all plan items
    const planItemsResponse = await fetch(`${process.env.REACT_APP_DASHDASH_API_URL}/plans/${this.state.planId}/users/${this.props.userId}/items`, {
      headers: {
        'authorization': `Bearer ${this.props.token}`
      }
    })
    const planItemsJSON = await planItemsResponse.json()
    const items = planItemsJSON.Items
    // change time values (in seconds) in data structure
    const modifiedItems = items.map(el => {
      el.itemSecondsLeft = this.timeStringToSeconds(el.duration)
      return el
    })
    // save plan and items list to state
    this.setState({ plan, duration, items: modifiedItems })
  }

  timeStringToSeconds(timeString) {
    if (!timeString) return null
    const timeArray = timeString.split(':').map(el => Number(el))
    return (timeArray[0] * 60 * 60) +
           (timeArray[1] * 60) +
           (timeArray[2])
  }

  startTimer = () => {
    document.activeElement.blur()
    this.setState((prevState, props) => {
      return { running: true, currentItemIndex: 0, timeLeft: this.state.duration }
    }, () => {
      const intervalId = window.setInterval(this.timerUpdate,1000)
      this.setState({ intervalId })
    })
  }

  timerUpdate = () => {
    if (this.state.timeLeft < 1) this.stopTimer()
    else this.setState((prevState, props) => {
      const itemsCopy = cloneDeep(prevState.items)
      let newCurrentItemIndex = prevState.currentItemIndex
      let itemZeroed = false
      const newItems = itemsCopy.map((el, index) => {
        if (index === newCurrentItemIndex) {
          --el.itemSecondsLeft
          if (el.itemSecondsLeft === 0) itemZeroed = true
        }
        return el
      })
      if (itemZeroed) ++newCurrentItemIndex
      let newTimeLeft = prevState.timeLeft - 1
      return { items: newItems, currentItemIndex: newCurrentItemIndex, timeLeft: newTimeLeft }
    })
  }

  advanceItem = () => {
    document.activeElement.blur()
    this.setState((prevState, props) => {
      const currentIndex = prevState.currentItemIndex
      let itemsLeft = prevState.items.length - currentIndex - 1
      if (itemsLeft === 0) return {} // you can't advance the last item in the list
      let itemsCopy = cloneDeep(prevState.items)
      let leftOverTime = itemsCopy[currentIndex].itemSecondsLeft
      let newItems = itemsCopy.map((el, index) => {
        if (index === currentIndex) el.itemSecondsLeft = 0
        else if (index === currentIndex + 1) el.itemSecondsLeft = el.itemSecondsLeft + Math.floor(leftOverTime / itemsLeft) + leftOverTime % itemsLeft
        else if (index > currentIndex + 1) el.itemSecondsLeft = el.itemSecondsLeft + Math.floor(leftOverTime / itemsLeft)
        return el
      })
      let newCurrentItemIndex = currentIndex + 1
      return { items: newItems, currentItemIndex: newCurrentItemIndex }
    })
  }

  stopTimer = () => {
    document.activeElement.blur()
    clearInterval(this.state.intervalId)
    this.setState({ running: false, currentItemIndex: null, timeLeft: null, intervalId: null })
    this.resetData()
  }

  render() {
    return (
      <div style={{ backgroundColor: '#EAEBED' }}>
        <div style={{ position: 'fixed', top: '0', width: '100vw', zIndex: '1' }}>
          <Header name={ this.state.plan.name } running={ this.state.running } />
          <ActiveItemBox currentItem={ this.state.items[this.state.currentItemIndex] } running={ this.state.running } functions={{ startTimer: this.startTimer, advanceItem: this.advanceItem }} />
        </div>
        <ItemsContainer currentItemIndex={ this.state.currentItemIndex } items={ this.state.items } />
        <MainStatusBar running={ this.state.running } duration={ this.state.duration } timeLeft={ this.state.timeLeft } deadline={ this.state.plan.deadline } functions={ this.stopTimer } />
      </div>
    )
  }
}

export default InProgressSchedule